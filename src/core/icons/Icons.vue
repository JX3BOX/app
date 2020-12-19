<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="图标大全"
            slug="icons"
            root="/app/icons"
            :feedbackEnable="true"
            :crumbEnable="true"
            ><img
                slot="logo"
                svg-inline
                src="../../assets/img/logos/icons.svg"
            />
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-icons">
                <h1 class="m-icons-title">剑三图标库</h1>
                <div class="m-icons-box">
                    <el-tabs
                        v-model="activeTabName"
                        type="card"
                        @tab-click="handleClick"
                    >
                        <el-tab-pane label="图标库" name="icon" lazy>
                            <div class="searchbar-wrapper">
                                <el-input
                                    placeholder="输入搜索条件，例如：3089、1-100、幽月乱花"
                                    v-model="searchIconInput"
                                    class="input-with-select"
                                    @keyup.enter.native="handleSearchIcon"
                                >
                                    <el-button
                                        slot="append"
                                        icon="el-icon-search"
                                        @click="handleSearchIcon"
                                    ></el-button>
                                </el-input>
                                <div class="m-icon-search-tip">
                                    <ul>
                                        <li>
                                            输入单个数字，例如1，返回IconID为1的图标；
                                        </li>
                                        <li>
                                            输入多个数字，例如2,4,6（支持中英文逗号“,”,顿号“、”,斜杠“/”,竖杠“|”），返回IconID分别为2,4,6的三个图标；
                                        </li>
                                        <li>
                                            输入范围区间，例如1~100或1-100，返回IconID从1至100的100个图标；
                                        </li>
                                        <li>
                                            可以同时输入多个数字和多个范围，例如2,3,11-14,17，返回IconID分别为2,3,11,12,13,14,17的7个图标；
                                        </li>
                                        <li>
                                            输入单个图标名称，可以根据名称模糊搜索相关图标，例如：幽月、幽月乱花。
                                        </li>
                                        <li>每次上限500个</li>
                                    </ul>
                                </div>
                            </div>
                            <ul
                                class="m-icon-list"
                                v-loading="isSearchingByName"
                            >
                                <el-alert
                                    title="以下为部分图标展示，请在上方自定义搜索范围。点击图标即可收藏。"
                                    type="warning"
                                    close-text="知道了"
                                    center
                                    show-icon
                                ></el-alert>
                                <li
                                    v-for="(icon, index) in iconsList"
                                    :key="index"
                                    @mouseleave="handleMouseLeaveIcon"
                                >
                                    <i
                                        class="u-pic"
                                        @click="handleAddFavorite(index, icon)"
                                    >
                                        <el-image
                                            :src="
                                                `${IconPath}${icon}.png`
                                            "
                                            class="u-img"
                                            lazy
                                        >
                                            <div
                                                slot="placeholder"
                                                class="image-slot"
                                            >
                                                <i class="el-icon-loading"></i>
                                            </div>
                                            <div
                                                slot="error"
                                                class="image-slot"
                                            >
                                                <i
                                                    class="el-icon-warning-outline"
                                                ></i>
                                            </div>
                                        </el-image>
                                        <span class="u-love"
                                            ><i
                                                class="w-heart"
                                                :class="{
                                                    'w-heart-animation':
                                                        index == clickedIndex,
                                                }"
                                            ></i
                                        ></span>
                                    </i>
                                    <span
                                        class="u-iconid"
                                        v-clipboard:copy="icon"
                                        v-clipboard:success="onCopy"
                                        v-clipboard:error="onError"
                                        title="点击快速复制"
                                        >{{ icon }}</span
                                    >
                                </li>
                                <div
                                    class="loading-placeholder"
                                    v-if="
                                        isSearchingByName &&
                                            iconsList.length === 0
                                    "
                                ></div>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane
                            label="收藏图标"
                            name="favicon"
                            lazy
                            :loading="isSynchronizing"
                        >
                            <ul
                                class="m-icon-list"
                                v-if="activeTabName === 'favicon'"
                            >
                                <el-alert
                                    class="m-icons-sync"
                                    title="本地有收藏图标未同步到服务器"
                                    type="info"
                                    center
                                    show-icon
                                    v-if="faviconNeedsSync"
                                >
                                    <el-button type="text" @click="syncFavicon"
                                        >点此同步未登录收藏数据</el-button
                                    >
                                </el-alert>
                                <ul v-if="faviconsList.length">
                                    <transition-group name="el-fade-in">
                                        <li
                                            v-for="(icon,
                                            index) in faviconsList"
                                            :key="icon"
                                        >
                                            <i class="u-pic">
                                                <el-image
                                                    :src="
                                                        `${IconPath}${icon}.png`
                                                    "
                                                    class="u-img"
                                                    lazy
                                                >
                                                    <div
                                                        slot="placeholder"
                                                        class="image-slot"
                                                    >
                                                        <i
                                                            class="el-icon-loading"
                                                        ></i>
                                                    </div>
                                                    <div
                                                        slot="error"
                                                        class="image-slot"
                                                    >
                                                        <i
                                                            class="el-icon-warning-outline"
                                                        ></i>
                                                    </div>
                                                </el-image>
                                                <span
                                                    class="u-remove"
                                                    @click="
                                                        handleRemoveFavorite(
                                                            index,
                                                            icon
                                                        )
                                                    "
                                                ></span>
                                            </i>
                                            <span class="u-iconid">{{
                                                icon
                                            }}</span>
                                        </li>
                                    </transition-group>
                                </ul>
                                <el-alert
                                    v-else
                                    title="没有收藏的图标"
                                    type="info"
                                    show-icon
                                >
                                </el-alert>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="表情包" name="emoji" lazy>
                            <ul class="m-emotion-nav">
                                <li
                                    v-for="(category,
                                    index) in emojiCategoryOptions"
                                    :key="category.name"
                                    :class="{
                                        active: index === emojiSelection,
                                    }"
                                    @click="handleSelectEmojiCategory(index)"
                                >
                                    {{ category.name }}
                                    <span>({{ category.total }})</span>
                                </li>
                            </ul>
                            <el-select
                                v-model="emojiSelection"
                                placeholder="请选择"
                                class="m-emotion-selection"
                            >
                                <el-option
                                    v-for="(category,
                                    index) in emojiCategoryOptions"
                                    :key="category.name"
                                    :value="index"
                                    :label="category.name"
                                >
                                    <span style="float: left">{{
                                        category.name
                                    }}</span>
                                    <span
                                        style="float: right; color: #8492a6; font-size: 13px"
                                        >共{{ category.total }}个</span
                                    >
                                </el-option>
                            </el-select>
                            <template v-if="emojiCategoryOptions.length > 0">
                                <ul class="m-emotion-list">
                                    <li
                                        v-for="(emoji,
                                        index) in emojiCategoryOptions[
                                            emojiSelection
                                        ].total"
                                        :key="emoji"
                                    >
                                        <el-image
                                            :src="
                                                `${EmojiPath}${emojiCategoryOptions[emojiSelection].name}/${index}.gif`
                                            "
                                            lazy
                                        >
                                            <!-- 这里要用index, 因为这里for遍历的是数字，emoji值会从1开始，而index还是从0开始 -->
                                            <div
                                                slot="placeholder"
                                                class="image-slot"
                                            >
                                                <i class="el-icon-loading"></i>
                                            </div>
                                            <div
                                                slot="error"
                                                class="image-slot"
                                            >
                                                <i
                                                    class="el-icon-warning-outline"
                                                ></i>
                                            </div>
                                        </el-image>
                                    </li>
                                </ul>
                                <!-- <a class="m-emotion-down" href="" download=""></a> -->

                                <el-button
                                    :loading="isDownloadingEmoji"
                                    type="primary"
                                    plain
                                    @click.native.stop="handleDownloadEmoji"
                                    icon="el-icon-download"
                                    class="btn-download-emoji"
                                >
                                    <div class="m-emotion-down">
                                        <b>立即下载</b>
                                        <!-- <span>Download</span> -->
                                    </div>
                                </el-button>
                            </template>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <Footer></Footer>
            </div>
        </Main>
    </div>
</template>

<script>
import Info from "@/components/Info.vue";
import Nav from "@/components/Nav.vue";
import { axios, realUrl } from "@/service/api.js";
import { JX3BOX, User } from "@jx3box/jx3box-common";
// import Extend from "@/components/Extend.vue";

export default {
    name: "Icons",
    data: function() {
        return {
            activeTabName: "icon",
            searchIconInput: "",
            iconsList: [],
            clickedIndex: -1,
            IconPath: JX3BOX.__iconPath + "icon/",
            EmojiPath: JX3BOX.__ossMirror + "emotion/official_mini/",
            faviconsList: null,
            localFaviconsList: [],
            isSynchronizing: false,
            total: {},
            emojiCategoryOptions: [],
            emojiSelection: 0,
            isDownloadingEmoji: false,
            isSearchingByName: false,
        };
    },
    computed: {
        faviconNeedsSync() {
            if (
                !this.localFaviconsList ||
                !this.faviconsList ||
                this.localFaviconsList.length === 0
            ) {
                return false;
            }
            if (this.localFaviconsList.length !== this.faviconsList.length) {
                return true;
            }
            for (let each of this.localFaviconsList) {
                if (!this.faviconsList.includes(each)) {
                    return true;
                }
            }
            return false;
        },
    },
    methods: {
        async prepareMounted() {
            let defaultList = [
                13,
                316,
                109,
                245,
                889,
                2178,
                2179,
                2180,
                2588,
                2589,
                2646,
                2647,
                2648,
                2789,
                3089,
                3111,
                3112,
                3113,
                3114,
                3115,
                3116,
                3117,
                3118,
                3119,
                3120,
                3121,
                3122,
                3123,
                3137,
                3138,
                3139,
                3140,
                3321,
                4704,
                4707,
                4708,
                4709,
                4710,
                4835,
                4853,
                5389,
                8848,
                10451,
                10452,
                10909,
            ];
            this.iconsList = defaultList;

            // 这里先读取一次存在本地的收藏图标
            this.getFromLocal();

            let allIconsListUrl =
                JX3BOX.__staticPath.jsdelivr + "jx3-icon@1.1.0/icon.json";
            let getAllIconsList = axios(allIconsListUrl, "GET");

            let allEmojiListUrl =
                JX3BOX.__staticPath.jsdelivr + "jx3-icon@1.1.0/emotion.json";
            let getAllEmojiList = axios(allEmojiListUrl, "GET");

            let getUserServerSaved = null;
            if (this.uid) {
                getUserServerSaved = this.getSavedIcons();
            } else {
                getUserServerSaved = this.getFromLocal();
            }
            let axiosSuccess = false;
            Promise.all([getAllIconsList, getAllEmojiList])
                .then((result) => {
                    this.total.icons = result[0].icon;
                    this.emojiCategoryOptions = result[1];
                })
                .catch((e) => {
                    switch (e.code) {
                        case -1:
                            // 网络异常
                            this.$message.error(e.msg);
                            break;
                        case 9999:
                            this.$message.error("登录失效, 请重新登录");
                            User.destroy();
                            setTimeout(() => {
                                User.toLogin();
                            }, 2000);
                            break;
                        default:
                            // 服务器错误
                            console.log(e);
                            this.$message.error(`[${e.code}]${e.msg}`);
                    }
                });
        },
        syncFavicon() {
            this.isSynchronizing = true;
            //创建一个并集
            let union = this.faviconsList.concat(this.localFaviconsList);
            union = new Set(union);
            this.faviconsList = Array.from(union);
            this.setSavedIcons();
            if (window.localStorage) {
                localStorage.removeItem("favicons");
                this.localFaviconsList = null;
            }
        },
        handleDownloadEmoji() {
            this.isDownloadingEmoji = true;
            let link = document.createElement("a");
            link.href = `${this.EmojiPath}${
                this.emojiCategoryOptions[this.emojiSelection].name
            }.zip`;
            link.download = `${
                this.emojiCategoryOptions[this.emojiSelection].name
            }.zip`;
            link.click();
            this.isDownloadingEmoji = false;
        },
        handleSelectEmojiCategory(index) {
            this.emojiSelection = index;
        },
        handleClick(tab, event) {
            // console.log(tab)
        },
        handleAddFavorite(index, iconid) {
            this.clickedIndex = index;
            let id = iconid + "";
            if (this.faviconsList.includes(id)) {
                return;
            }
            this.faviconsList.push(id);
            this.setSavedIcons();
        },
        handleRemoveFavorite(index, iconid) {
            let iconidIndex = this.faviconsList.indexOf(iconid);
            if (iconidIndex !== -1) {
                this.faviconsList.splice(iconidIndex, 1);
                this.setSavedIcons();
            }
        },
        handleMouseLeaveIcon() {
            this.clickedIndex = -1;
        },
        async handleSearchIcon() {
            // 初始化变量
            //每次加载限制
            let limit = 500;
            let min = 0;
            let max = 1;
            let range = [];

            let query = this.searchIconInput.replace(/\ /g, "");
            if (query === "") {
                return;
            }
            let searchList = [];
            let tmpList = [];
            //如果出现全角逗号、顿号、斜杠、飘键进行替换
            query = query.replace(/，|、|\/|\||\\/g, ",");
            query = query.replace(/~/g, "-");

            // 如果没有分隔符，先判断是不是按照名字搜索的文字
            let numberReg = /^[0-9]+$/;
            if (
                !query.includes(",") &&
                !query.includes("-") &&
                !numberReg.test(query)
            ) {
                // 按照名称搜索
                this.isSearchingByName = true;
                let results = await this.searchIconByName(query);
                this.isSearchingByName = false;
                return;
            }

            // 如果同时出现逗号和杠，先拆逗号，再拆杠
            let bothExist = query.includes(",") && query.includes("-");
            if (query.includes(",")) {
                tmpList = query.split(",");
            }
            if (tmpList.length === 0) {
                tmpList = [query];
            }
            tmpList.forEach((value) => {
                if (value.includes("-")) {
                    range = value.split("-");
                    min = parseInt(range[0]);
                    max = parseInt(range[range.length - 1]);
                    if (!isNaN(min) && !isNaN(max)) {
                        if (min > max) {
                            for (let i = max; i <= min; ++i) {
                                if (!searchList.includes(i)) {
                                    searchList.push(i);
                                }
                            }
                        } else {
                            for (let i = min; i <= max; ++i) {
                                if (!searchList.includes(i)) {
                                    searchList.push(i);
                                }
                            }
                        }
                    }
                } else {
                    if (!isNaN(parseInt(value))) {
                        searchList.push(parseInt(value));
                    }
                }
            });

            this.iconsList = searchList.slice(0, 500);
        },
        async searchIconByName(name) {
            let url = JX3BOX.__node + "icon/name/" + name;
            return axios(url, "GET")
                .then((response) => {
                    if (response) {
                        let tmpList = [];
                        for (let key in response) {
                            response[key].forEach((item) => {
                                let iconid = item.iconID + "";
                                if (!tmpList.includes(iconid)) {
                                    tmpList.push(iconid);
                                }
                            });
                        }
                        this.iconsList = tmpList;
                    }
                })
                .catch((e) => {
                    switch (e.code) {
                        case -1:
                            // 网络异常
                            this.$message.error(e.msg);
                            this.getFromLocal();
                            break;
                        default:
                            // 服务器错误
                            this.$message.error(`[${e.code}]${e.msg}`);
                            this.getFromLocal();
                    }
                });
        },

        // 分割线
        getUserId() {
            if (User.isLogin()) {
                this.uid = User.getInfo().uid;
            }
        },
        getSavedIcons() {
            // 获取用户储存的服务器列表
            let url = realUrl(JX3BOX.__server, "user/meta");
            if (this.uid) {
                // 从服务器读取
                // 旧版数据格式 ’["109","3118","3119","13","316","2179","245","889","2178","5389"]‘
                axios(
                    url,
                    "GET",
                    true,
                    {},
                    {},
                    { uid: this.uid, key: "favicons" }
                )
                    .then((response) => {
                        if (response.code == 0) {
                            let serverValue = response.data.value;
                            if (serverValue) {
                                // 判断是否是旧版数据
                                // like -> '["345", "332", "  303"]'
                                if (serverValue.includes("[")) {
                                    serverValue = serverValue.replace(/[\[\]"\ ]/g,'')
                                }
                                // // 判断是否是旧版数据
                                // if (serverValue.includes("[")) {
                                //     this.faviconsList = JSON.parse(serverValue);
                                // } else {
                                //     this.faviconsList = serverValue.split(",");
                                // }
                                this.faviconsList = serverValue.split(",");
                            } else {
                                this.faviconsList = [];
                            }
                        }
                    })
                    .catch((e) => {
                        switch (e.code) {
                            case -1:
                                // 网络异常
                                this.$message.error(e.msg);
                                this.faviconsList = this.localFaviconsList;
                                break;
                            case 9999:
                                this.$message.error("登录失效, 请重新登录");
                                User.destroy();
                                setTimeout(() => {
                                    User.toLogin();
                                }, 2000);
                                //不指定url时则自动跳回当前所在页面
                                break;
                            default:
                                // 服务器错误
                                this.$message.error(`[${e.code}]${e.msg}`);
                                this.faviconsList = this.localFaviconsList;
                        }
                    })
                    .then(() => {});
            } else {
                // 本地读取
                this.faviconsList = this.localFaviconsList;
            }
        },
        getFromLocal() {
            if (window.localStorage) {
                let current = localStorage.getItem("favicons");
                if (current) {
                    // 判断是否是旧版数据
                    // like -> '["345", "332", "  303"]'
                    if (current.includes("[")) {
                        current = current.replace(/[\[\]"\ ]/g,'')
                    }
                    this.localFaviconsList = current.split(",");
                }
            }
        },
        setSavedIcons() {
            if (this.uid) {
                // 保存到服务器
                let url = realUrl(JX3BOX.__server, "user/meta");
                axios(url, "POST", true, {
                    uid: this.uid,
                    key: "favicons",
                    value: this.faviconsList.join(","),
                })
                    .then((response) => {
                        if (response.code == 0) {
                            //
                        }
                    })
                    .catch((e) => {
                        // 如果出问题，先存本地
                        //创建一个并集
                        let union = this.faviconsList;
                        if (
                            this.localFaviconsList &&
                            this.localFaviconsList.length > 0
                        ) {
                            union = this.localFaviconsList.concat(
                                this.faviconsList
                            );
                        }
                        union = new Set(union);
                        this.faviconsList = Array.from(union);
                        this.setToLocal();
                        switch (e.code) {
                            case -1:
                                // 网络异常
                                this.$message.error(e.msg);
                                break;
                            case 9999:
                                this.$message.error("登录失效, 请重新登录");
                                User.destroy();
                                setTimeout(() => {
                                    User.toLogin();
                                }, 2000);
                                //不指定url时则自动跳回当前所在页面
                                break;
                            default:
                                // 服务器错误
                                this.$message.error(`[${e.code}]${e.msg}`);
                        }
                    })
                    .then(() => {
                        this.isSynchronizing = false;
                    });
            } else {
                // 储存在本地
                this.setToLocal();
                this.isSynchronizing = false;
            }
        },
        setToLocal() {
            if (window.localStorage) {
                let names = this.faviconsList.join(",");
                localStorage.setItem("favicons", names);
                this.localFaviconsList = this.faviconsList;
            }
        },
        onCopy: function(val) {
            this.$notify({
                title: "复制成功",
                message: "复制内容 : " + val.text,
                type: "success",
            });
        },
        onError: function() {
            this.$notify.error({
                title: "复制失败",
                message: "请手动复制",
            });
        },
    },
    filters: {},
    mounted: function() {
        this.getUserId();
        this.prepareMounted();
        this.getSavedIcons();
        // this.loadAllServers();
    },
    components: {
        Nav,
        // Extend,
    },
};
</script>

<style lang="less">
@import "../../assets/css/icons.less";
</style>
