<template>
    <div id="app" class="p-app-flog">
        <Header></Header>
        <Breadcrumb name="BOSS日志分析" slug="flog" root="/app/flog">
            <img
                slot="logo"
                class="u-app-flog"
                svg-inline
                src="../../assets/img/logos/flog.svg"
            />
        </Breadcrumb>
        <LeftSidebar>
            <Nav />
        </LeftSidebar>

        <Main :withoutRight="false">
            <div class="m-app-flog">
                <div v-if="type === 'lanren'">
                    <el-table :data="list" style="width: 100%">
                        <el-table-column prop="caster.szName" label="释放者">
                        </el-table-column>
                        <el-table-column prop="nTime" label="时间">
                            <template slot-scope="scope">
                                <div v-if="ms">{{ scope.row.nTime }}</div>
                                <div v-else>
                                    {{ scope.row.nTime | time_Milli }}
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="nType" label="类型">
                        </el-table-column>
                        <el-table-column prop="nLevel" label="技能等级">
                        </el-table-column>
                        <el-table-column prop="dwSkillID" label="技能ID">
                        </el-table-column>
                    </el-table>
                </div>
                <div v-else-if="type == 'old'">
                    <el-table :data="list" style="width: 100%">
                        <el-table-column prop="ev_1" label="时间" width="180">
                            <template slot-scope="scope">
                                {{ scope.row.ev_1 | time_Unix }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="ev_3" label="类型" width="180">
                        </el-table-column>
                        <el-table-column prop="ev_4" label="释放者">
                            <template slot-scope="scope">
                                {{ scope.row.ev_4 | char_Name(name) }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="ev_5" label="攻击者">
                            <template slot-scope="scope">
                                {{ scope.row.ev_5 | char_Name(name) }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="ev_9" label="使用技能">
                            <template slot-scope="scope">
                                {{ scope.row.ev_9 | char_Skill(eff) }}
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div v-else-if="type == 'new'">
                    暂无
                    <!-- <el-table :data="list" style="width: 100%">
           			</el-table> -->
                </div>
            </div>
            <RightSidebar>
                <div class="m-app-flog-aside">
                    <el-upload
                        :auto-upload="false"
                        drag
                        :on-change="elInFile"
                        ref="upload"
                        accept="*/*"
                        action="/"
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">
                            将文件拖到此处，或<em>点击上传</em>
                        </div>
                    </el-upload>
                    <div v-if="type == 'lanren'">
                        <el-button plain @click="toMs" v-if="ms"
                            >切换成秒</el-button
                        >
                        <el-button plain @click="toMs" v-else
                            >切换成毫秒</el-button
                        >
                    </div>
                </div>
                <Extend />
            </RightSidebar>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import { dattxt } from "./data.js";
import Extend from "@/components/Extend.vue";
Date.prototype.toLocaleString = function() {
    function addZero(num) {
        if (num < 10) return "0" + num;
        return num;
    }
    // 按自定义拼接格式返回
    return (
        this.getFullYear() +
        "/" +
        addZero(this.getMonth() + 1) +
        "/" +
        addZero(this.getDate()) +
        " " +
        addZero(this.getHours()) +
        ":" +
        addZero(this.getMinutes()) +
        ":" +
        addZero(this.getSeconds())
    );
};
export default {
    name: "flog",
    data() {
        return {
            list: null,
            name: null,
            eff: null,
            type: "",
            ms: true,
        };
    },
    computed: {},
    methods: {
        elInFile(f, fs) {
            this.list = null;
            this.name = null;
            this.eff = null;
            this.type = "";
            this.read(f.raw);
        },
        read(f) {
            let rd = new FileReader();
            rd.onload = (e) => {
                let cont = rd.reading({ encode: "GBK" });
                let name = f.name;
                if (name.indexOf(".fstt") == -1) {
                    cont = dattxt(cont, "lanren");
                    this.list = cont;
                    this.type = "lanren";
                } else {
                    cont = dattxt(cont, "fstt");
                    for (let i in cont) {
                        if (i == "EVERYTHING") {
                            this.list = cont[i];
                            if (cont[i].EVE_1) {
                                this.type = "new";
                            } else {
                                this.type = "old";
                            }
                        } else if (i == "EFFECT_LIST") {
                            this.eff = cont[i];
                        } else if (i == "NAME_LIST") {
                            this.name = cont[i];
                        }
                    }
                }
                console.log(
                    "list___________________文件上传转换后的数据",
                    this.list
                );
                console.log("name___________________人物名称", this.name);
                console.log("eff___________________技能名称", this.eff);
                console.log("type___________________文件类型", this.type);
            };
            rd.readAsBinaryString(f);
        },
        toMs() {
            this.ms = !this.ms;
        },
    },
    filters: {
        time_Milli(time) {
            let s = parseInt(time / 60);
            let m = 0;
            let h = 0;
            if (s > 60) {
                m = parseInt(s / 60);
                s = parseInt(s % 60);
                if (m > 60) {
                    h = parseInt(m / 60);
                    m = parseInt(m % 60);
                }
            }
            let newtime = "" + parseInt(s);
            if (m > 0) {
                newtime = "" + parseInt(m) + ":" + newtime;
            }
            if (h > 0) {
                newtime = "" + parseInt(h) + ":" + newtime;
            }

            return newtime;
        },
        time_Unix(time) {
            var unixTimestamp = new Date(time * 1000);
            time = unixTimestamp.toLocaleString();
            return time;
        },
        char_Name(name, object) {
            for (let i in object) {
                if (i == name) {
                    return object[i];
                }
            }
        },
        char_Skill(skill, obj) {
            for (let i in obj) {
                if (obj[i][0] == skill) {
                    return obj[i][1];
                }
            }
            return skill;
        },
    },
    beforeCreate() {
        FileReader.prototype.reading = function({ encode } = pms) {
            let bytes = new Uint8Array(this.result);
            let text = new TextDecoder(encode || "UTF-8").decode(bytes);
            return text;
        };
        FileReader.prototype.readAsBinaryString = function(f) {
            if (!this.onload)
                this.onload = (e) => {
                    let rs = this.reading();
                    console.log(rs);
                };
            this.readAsArrayBuffer(f);
        };
    },
    components: { Extend },
};
</script>

<style lang="less">
@import "../../assets/css/flog.less";
</style>
