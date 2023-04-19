<template>
    <div class="m-database-buff">
        <p v-if="list.length && done" class="m-resource-count">
            <i class="el-icon-s-data"></i> 共找到 <b>{{ list.length }}</b> 条记录
        </p>
        <ul class="m-resource-list m-buff-list" v-if="list && list.length">
            <li v-for="(o, i) in list" class="u-item u-cantoggle" :key="i">
                <div class="u-buff">
                    <span class="u-id" v-clipboard:copy="'' + o.BuffID" v-clipboard:success="onCopy" v-clipboard:error="onError" title="点击快速复制">
                        ID:{{ o.BuffID }}
                        <span class="u-detach">{{ showDetachType(o.DetachType) }}</span>
                    </span>
                    <img class="u-pic" :title="'IconID:' + o.IconID" :src="iconLink(o.IconID)" />
                    <div class="u-primary">
                        <span class="u-name">
                            {{ o.Name }}
                            <em v-if="o.BuffName">({{ o.BuffName }})</em>
                        </span>
                        <span class="u-content">{{ o.Desc }}</span>
                        <div class="u-remarks">
                            <span class="u-remark">Level : {{ o.Level }}</span>
                            <span class="u-remark">Remark : {{ o.Remark }}</span>
                        </div>
                        <el-button class="u-raw" :class="{ on: o.isopen }" icon="el-icon-view" plain size="mini" @click="toggleProps(o)">{{ o.isopen ? "收起详情" : "展开详情" }}</el-button>
                    </div>
                    <div class="u-props" :class="{ on: o.isopen }">
                        <template v-for="(val, key) in o">
                            <span class="u-desc" :key="key" v-if="cansee(o, key)">
                                <el-tooltip effect="dark" :content="key" placement="top">
                                    <em :class="{ isAdv: buffmap[key] && buffmap[key]['adv'] }">{{ buffmap[key] && buffmap[key]["desc"] || key }}</em>
                                </el-tooltip>
                                {{ val }}
                            </span>
                        </template>
                        <!-- <div class="u-tip" v-if="!hasRight">
                            <i class="el-icon-lock"></i>
                            部分词条仅
                            <a
                                href="/vip/premium?from=database_buff"
                                target="_blank"
                            >高级/专业版会员</a>可见
                        </div> -->
                    </div>
                </div>
            </li>
        </ul>
        <el-alert v-if="!list.length && done" title="没有找到相关条目" type="info" show-icon></el-alert>
    </div>
</template>

<script>
import { __iconPath, __ossRoot } from "@jx3box/jx3box-common/data/jx3box.json";
import detach_types from "@/assets/data/detach_type.json";
import buffmap from "@jx3box/jx3box-data/data/app/buff.json";
import { iconLink } from "@jx3box/jx3box-common/js/utils";
import { buff as ignore_list } from "@/assets/data/ignore.json";
export default {
    name: "data_buff",
    props: ["data", "vip", "status", "client"],
    data: function () {
        return {
            list: this.data || [],
            buffmap,
            ignore_list,
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
                let raw = val;
                let output = [];
                for (let item of raw) {
                    if (!ignore_list.includes(item.BuffID)) {
                        output.push(item);
                    }
                }
                this.list = output;
            },
        },
    },
    // filters: {
    //     filterRaw: function (str) {
    //         return str && str.replace(/\\n/g, "\n");
    //     },
    // },
    methods: {
        showDetachType: function (val) {
            if (val && detach_types[val]) {
                return detach_types[val];
            } else {
                return "";
            }
        },
        iconLink: function (id) {
            return iconLink(id, this.client);
        },
        toggleProps: function (o) {
            o.isopen = !o.isopen;
        },
        cansee: function (o, key) {
            // 本地虚拟字段
            if (key == "isopen" || key == "IdKey") return false;

            // 值为null实
            if (o[key] === null) return false;

            // 不包含基础类型
            if (this.buffmap?.[key]?.["basic"]) return false;

            // return true;

            // 如果不需要权限
            if (!this.buffmap?.[key]?.["adv"]) {
                return true;
                // 如果需要权限且有权限
            } else if (this.buffmap?.[key]?.["adv"] && this.hasRight) {
                return true;
            } else {
                return false;
            }
        },
        onCopy: function (val) {
            this.$notify({
                title: "复制成功",
                message: "复制内容 : " + val.text,
                type: "success",
            });
        },
        onError: function () {
            this.$notify.error({
                title: "复制失败",
                message: "请手动复制",
            });
        },
    },
    mounted: function () {},
    components: {},
};
</script>
