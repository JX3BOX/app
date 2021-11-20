<template>
    <div class="m-database-skill">
        <p v-if="list.length && done" class="m-resource-count">
            <i class="el-icon-s-data"></i> 共找到
            <b>{{ list.length }}</b> 条记录
        </p>
        <ul class="m-resource-list m-skill-list" v-if="list && list.length">
            <li v-for="(o, i) in list" class="u-item u-cantoggle" :key="i">
                <div class="u-skill">
                    <span class="u-id">ID:{{ o.SkillID }}</span>
                    <img class="u-pic" :title="'IconID:' + o.IconID" :src="iconLink(o.IconID)" />
                    <div class="u-primary">
                        <span class="u-name">
                            {{ o.Name }}
                            <em v-if="o.SkillName">({{ o.SkillName }})</em>
                        </span>
                        <span class="u-content">{{ o.Desc | filterRaw }}</span>
                        <div class="u-remarks">
                            <span class="u-remark">Level : {{ o.Level }}</span>
                            <span class="u-remark">Remark : {{ o.Remark }}</span>
                            <span v-if="o.HelpDesc" class="u-remark">HelpDesc : {{ o.HelpDesc }}</span>
                            <span
                                v-if="o.SimpleDesc"
                                class="u-remark"
                            >SimpleDesc : {{ o.SimpleDesc }}</span>
                            <span
                                v-if="o.SpecialDesc"
                                class="u-remark"
                            >SpecialDesc : {{ o.SpecialDesc }}</span>
                        </div>
                        <el-button
                            class="u-raw"
                            :class="{ on: o.isopen }"
                            icon="el-icon-view"
                            plain
                            size="mini"
                            @click="toggleProps(o)"
                        >{{ o.isopen ? "收起详情" : "展开详情" }}</el-button>
                    </div>
                    <div class="u-props" :class="{ on: o.isopen }">
                        <template v-for="(val,key) in o">
                            <span class="u-desc" :key="key" v-if="cansee(o,key)">
                                <el-tooltip effect="dark" :content="key" placement="top">
                                    <em
                                        :class="{'isAdv':skillmap[key]['adv']}"
                                    >{{skillmap[key]['desc'] || key}}</em>
                                </el-tooltip>
                                {{ val }}
                            </span>
                        </template>
                        <span v-html="scriptAssociate(o.ScriptFile)"></span>
                        <!-- <div class="u-tip" v-if="!hasRight">
                            <i class="el-icon-lock"></i>
                            部分词条仅
                            <a
                                href="/vip/premium?from=database_skill"
                                target="_blank"
                            >高级/专业版会员</a>可见
                        </div>-->
                    </div>
                </div>
            </li>
        </ul>
        <el-alert v-if="!list.length && done" title="没有找到相关条目" type="info" show-icon></el-alert>
    </div>
</template>

<script>
import {
    __iconPath,
    __ossRoot,
    __Root,
} from "@jx3box/jx3box-common/data/jx3box.json";
import skillmap from "@jx3box/jx3box-data/data/app/skill.json";
import { iconLink } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "data_skill",
    props: ["data", "vip", "status",'client'],
    data: function () {
        return {
            list: this.data || [],
            skillmap,
        };
    },
    computed: {
        hasRight: function () {
            return this.vip;
        },
        done: function () {
            return this.status;
        },
    },
    watch: {
        data: {
            deep: true,
            handler: function (val) {
                this.list = val;
            },
        },
    },
    filters: {
        filterRaw: function (str) {
            str = str && str.replace(/\\n/g, "\n");
            str = str && str.replace(/(\<TALENT.*?\>)/g, "\n$1");
            str = str && str.replace(/(\<EnchantID.*?\>)/g, "\n$1");
            return str;
        },
    },
    methods: {
        iconLink : function (id){
            return iconLink(id,this.client)
        },
        toggleProps: function (o) {
            o.isopen = !o.isopen;
        },
        scriptAssociate: function (val) {
            if (val.includes("副本BOSS")) {
                let path_arr = val.split("/");
                let start = path_arr.indexOf("副本BOSS");
                let fb_name = path_arr[start + 1] || "";
                return `<a class="u-script" href="${__Root}fb/?fb_name=${fb_name}#/skill" target="_blank">${val}</a>`;
            } else {
                return "";
            }
        },
        cansee: function (o, key) {
            // 本地虚拟字段
            if (key == "isopen" || key == "IdKey") return false;

            // 值为null实
            if (o[key] === null) return false;

            // 不包含基础类型
            if (this.skillmap[key]["basic"]) return false;

            // return true;

            // 如果不需要权限
            if (!this.skillmap[key]["adv"]) {
                return true;
                // 如果需要权限且有权限
            } else if (this.skillmap[key]["adv"] && this.hasRight) {
                return true;
            } else {
                return false;
            }
        },
    },
    mounted: function () {},
    components: {},
};
</script>

<style scoped lang="less">
.u-content {
    white-space: pre-wrap;
}
</style>