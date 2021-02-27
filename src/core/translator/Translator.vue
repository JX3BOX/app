<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="簡繁轉換"
            slug="translator"
            root="/app/translator"
            :feedbackEnable="true"
            :crumbEnable="true"
            ><img
                slot="logo"
                svg-inline
                src="../../assets/img/translator/translator.svg"
        /></Breadcrumb>
        <LeftSidebar :open="false"><Nav /></LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-translator">
                <h1 class="title">簡繁轉換工具</h1>
                <h3 class="title">將宏或插件數據等轉為劍網三國際服專用繁體</h3>
                <el-tabs
                    type="card"
                    class="translate-wrapper"
                    :before-leave="tabClick"
                    v-model="activeTabName"
                >
                    <el-tab-pane
                        label="文字轉換"
                        :disabled="isLoading"
                        name="translate-str"
                    >
                        <div class="translate-content">
                            <el-input
                                type="textarea"
                                placeholder="请输入原文（简体）内容。建议不要超过1000个汉字。大段文字容易导致浏览器卡死，建议使用文件转换功能。"
                                v-model="preTranslateText"
                                :validate-event="false"
                                resize="none"
                                maxlength="10000"
                                show-word-limit
                                class="textarea-translate textarea-translate-pre"
                            ></el-input>
                            <el-input
                                type="textarea"
                                placeholder="轉換（繁體）之後的內容"
                                v-model="postTranslateText"
                                :validate-event="false"
                                resize="none"
                                :readonly="false"
                                class="textarea-translate textarea-translate-post"
                            ></el-input>
                        </div>
                        <el-button
                            type="primary"
                            :loading="isLoading"
                            class="btn-convert"
                            size="medium"
                            @click="convertText"
                            v-if="percentage < 0"
                        >
                            {{ isLoading ? "正在加載" : "轉換" }}
                        </el-button>
                        <el-progress
                            :text-inside="true"
                            :stroke-width="20"
                            :percentage="percentage"
                            v-if="isLoading && percentage >= 0"
                        ></el-progress>
                    </el-tab-pane>
                    <el-tab-pane
                        label="文件轉換"
                        :disabled="isLoading"
                        name="translate-file"
                    >
                        <transition name="el-zoom-in-top">
                            <el-alert
                                title="转换成功!"
                                type="success"
                                show-icon
                                v-if="downloadFileUrl !== ''"
                            >
                                如果沒有自動下載的話,
                                <el-button
                                    type="text"
                                    class="btn-download"
                                    @click="downloadByUrl"
                                    >點此下載</el-button
                                >
                            </el-alert>
                        </transition>
                        <h4>上传的文件编码</h4>
                        <el-radio-group v-model="fileEncoding">
                            <el-radio label="gbk" border>GBK</el-radio>
                            <el-radio label="utf-8" border>UTF-8</el-radio>
                        </el-radio-group>
                        <h5 class="hint-inline">如果你不知道这是什么，请不要修改此选项</h5>
                        <div class="translate-content">
                            <el-upload
                                class="upload-file"
                                drag
                                action="javascript:void(0)"
                                :auto-upload="true"
                                :show-file-list="false"
                                v-loading="isLoading"
                                element-loading-text="正在轉換,請稍後"
                                :http-request="uploadFile"
                                v-if="percentage < 0"
                            >
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">
                                    將文件拖到此處,或
                                    <em>點擊上傳</em>
                                </div>
                                <div class="el-upload__tip" slot="tip">
                                    暫不支持word等帶樣式文檔
                                </div>
                            </el-upload>
                            <el-progress
                                type="circle"
                                :percentage="percentage"
                                v-if="isLoading && percentage >= 0"
                                :format="progressFormat"
                            ></el-progress>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane
                        label="💖貢獻詞庫"
                        :disabled="isLoading"
                        name="add-dict"
                    ></el-tab-pane>
                </el-tabs>
                <!-- <div class="translate-wrapper">
                    
                </div> -->
            </div>
            <!-- <RightSidebar
                ><div class="m-translator-aside">
                    <Github_REPO REPO="app" coder="172"></Github_REPO>
                </div>
                <Extend
            /></RightSidebar> -->
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Info from "@/components/Info.vue";
import Nav from "@/components/Nav.vue";
import { axios } from "@/service/api.js";
import { JX3BOX } from "@jx3box/jx3box-common";
import User from "@jx3box/jx3box-common/js/user";
// import Extend from "@/components/Extend.vue";
var blob = new Blob([document.querySelector("#worker").textContent]);
var url = window.URL.createObjectURL(blob);
var worker = new Worker(url);
import dict from "@jx3box/jx3box-dict/dict.json";

export default {
    name: "Translator",
    data: function () {
        return {
            worker: null,
            activeTabName: "translate-str",
            preTranslateText: "",
            postTranslateText: "",
            isLoading: false,
            percentage: -1,
            downloadFileUrl: "",
            dict,
            fileEncoding: "gbk",
        };
    },
    computed: {},
    methods: {
        tabClick(activeName, oldName) {
            if (activeName === "add-dict") {
                var aTag = document.createElement("a");
                aTag.href = "https://github.com/JX3BOX/jx3box-dict/issues";
                aTag.target = "_blank";
                aTag.click();
                return false;
            } else {
                return true;
            }
        },
        progressFormat(percentage) {
            return percentage === 100 ? "完成" : `${percentage}% \n正在轉換...`;
        },
        initWorker() {
            worker.addEventListener("message", (event) => {
                let data = event.data;
                let progress = 0;
                if (data.success) {
                    switch (data.type) {
                        case "str":
                            this.postTranslateText = data.result;
                            this.isLoading = false;
                            this.percentage = -1;
                            break;
                        case "file":
                            this.downloadTranslatedFile(data.result);
                            this.isLoading = false;
                            this.percentage = -1;
                            break;
                        case "progress":
                            this.percentage = data.result;
                            break;
                        default:
                            break;
                    }
                }
            });
            worker.addEventListener("error", (event) => {
                this.$message.error("轉換出錯");
                console.log(
                    [
                        "ERROR: Line ",
                        e.lineno,
                        " in ",
                        e.filename,
                        ": ",
                        e.message,
                    ].join("")
                );
            });
        },
        // getDict() {
        //     let url = `https://cdn.jsdelivr.net/npm/@jx3box/jx3box-dict/dict.json?v=${Date.now()}`;
        //     axios(url)
        //         .then((response) => {
        //             this.dict = response;
        //             this.isLoading = false;
        //         })
        //         .catch((e) => {
        //             switch (e.code) {
        //                 case -1:
        //                     // 网络异常
        //                     this.$message.error(e.msg);
        //                     break;
        //                 default:
        //                     // 服务器错误
        //                     console.log(e);
        //                     this.$message.error(`[${e.code}]${e.msg}`);
        //             }
        //         });
        // },
        async convertText() {
            let preText = this.preTranslateText;
            if (preText.replace(/\ /g, "") === "") {
                return;
            }
            // let isLogin = true;
            this.isLoading = true;
            // if (preText.length > 1000) {
            //     // isLogin = await this.checkLogin();
            //     isLogin = User.isLogin()
            //     if (!isLogin) {
            //         this.$message.warning(
            //             "转换的字符超过1000个需要先登录再尝试转换~"
            //         );
            //         this.isLoading = false;
            //         return;
            //     }
            // }
            this.percentage = 0;
            worker.postMessage({
                cmd: "translate-str",
                str: preText,
                dict: this.dict,
            });
        },
        async uploadFile(file) {
            if (file.file) {
                let isLogin = true;
                this.isLoading = true;
                if (file.file.size > 1024 * 1024) {
                    isLogin = await this.checkLogin();
                    if (!isLogin) {
                        this.$message.warning(
                            "转换的文件大小超过1MB需要先登录再尝试转换~"
                        );
                        this.isLoading = false;
                        return;
                    }
                }
                this.downloadFileUrl = "";
                this.filename = file.file.name;
                this.percentage = 0;
                worker.postMessage({
                    cmd: "translate-file",
                    file: file.file,
                    dict: this.dict,
                    encoding: this.fileEncoding,
                });
            }
        },
        downloadTranslatedFile(blob) {
            var aTag = document.createElement("a");
            aTag.download = `JX3BOX轉換-${this.filename}`;
            let url = URL.createObjectURL(blob);
            aTag.href = url;
            this.downloadFileUrl = url;
            aTag.click();
            this.isLoading = false;
        },
        downloadByUrl() {
            if (this.downloadFileUrl === "") {
                return;
            }
            var aTag = document.createElement("a");
            aTag.download = `JX3BOX轉換-${this.filename}`;
            let url = this.downloadFileUrl;
            aTag.href = url;
            aTag.click();
        },
        async checkLogin() {
            let isLogin = true;
            if (!this.uid) {
                isLogin = false;
            } else {
                isLogin = await this.testCheckIsLogin();
            }
            return new Promise((resolve, reject) => {
                resolve(isLogin);
            });
        },
        // 用于验证是否真的登录了
        testCheckIsLogin() {
            let url = JX3BOX.__server + "user/meta";
            return axios(
                url,
                "GET",
                true,
                {},
                {},
                { uid: this.uid, key: "jx3_servers" }
            )
                .then((response) => {
                    if (response.code == 10050) {
                        return true;
                    } else {
                        return false;
                    }
                })
                .catch((e) => {
                    switch (e.code) {
                        case -1:
                            // 网络异常
                            this.$message.error(e.msg);
                            this.getFromLocal();
                            break;
                        case 9999:
                            this.$message.error("登录失效, 请重新登录");
                            User.destroy();
                            setTimeout(() => {
                                User.toLogin();
                            }, 2000);
                            return false;
                            break;
                        default:
                            // 服务器错误
                            this.$message.error(`[${e.code}]${e.msg}`);
                            this.getFromLocal();
                    }
                    return false;
                });
        },

        // 分割线
        getUserId() {
            if (User.isLogin()) {
                this.uid = User.getInfo().uid;
            }
        },
    },
    filters: {},
    created() {
        this.initWorker();
        // this.getDict();
    },
    mounted: function () {
        this.getUserId();
    },
    beforeDestroy() {
        worker.terminate();
    },
    components: {
        Nav,
        // Extend,
    },
};
</script>

<style lang="less">
@import "../../assets/css/translator.less";
</style>
