<template>
    <div class="m-database-doodad">
        <p v-if="list.length && done" class="m-resource-count">
            <i class="el-icon-s-data"></i> 共找到
            <b>{{ list.length }}</b> 条记录
        </p>
        <ul class="m-resource-list m-doodad-list" v-if="list && list.length">
            <li v-for="(o, i) in list" :key="i" class="u-item">
                <div class="u-doodad">
                    <span class="u-id">ID:{{ o.ID }}</span>
                    <img class="u-pic" :title="'IconID:' + 10909" :src="10909 | iconURL" />
                    <div class="u-primary">
                        <span class="u-name">{{ o.Name }}</span>
                        <span class="u-desc">
                            <span class="u-doodad-prop">
                                <em>地图</em>
                                {{ o.MapName }}
                            </span>
                            <span class="u-doodad-prop">
                                <em>说明</em>
                                {{ o.BarText }}
                            </span>
                            <span class="u-doodad-prop">
                                <em>类型</em>
                                {{ o.Kind }}
                            </span>
                        </span>
                        <el-button
                            class="u-raw"
                            :class="{ on: o.isopen }"
                            icon="el-icon-view"
                            plain
                            size="mini"
                            @click="toggleProps(o)"
                            v-if="hasRight"
                        >{{ o.isopen ? "收起详情" : "展开详情" }}</el-button>
                    </div>
                </div>
                <div class="u-props" :class="{ on: o.isopen }" v-if="hasRight">
                    <template v-for="(val,key) in o">
                        <span class="u-desc" :key="key" v-if="cansee(o,key)">
                            <!-- <el-tooltip effect="light" :content="key" placement="top"> -->
                            <em>{{key}}</em>
                            <!-- </el-tooltip> -->
                            {{ val }}
                        </span>
                    </template>
                </div>
                <div class="u-tip" v-else>
                    <i class="el-icon-lock"></i>
                    部分词条仅
                    <a
                        href="/vip/premium?from=database_doodad"
                        target="_blank"
                    >高级/专业版会员</a>可见
                </div>
            </li>
        </ul>
        <el-alert v-if="!list.length && done" title="没有找到相关条目" type="info" show-icon></el-alert>
    </div>
</template>

<script>
import { __iconPath, __ossRoot } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "doodad",
    props: ["data", "vip", "status"],
    data: function () {
        return {
            list: this.data || [],
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
    methods: {
        toggleProps: function (o) {
            o.isopen = !o.isopen;
        },
        cansee: function (o, key) {
            // 本地虚拟字段
            if (key == "isopen" || key == "IdKey") return false;

            // 值为null实
            if (o[key] === null) return false;

            // 不包含基础类型
            // if (this.npcmap[key]["adv"]) return true;

            return true;
        },
    },
    filters: {
        iconURL: function (id) {
            return __iconPath + "icon/" + id + ".png";
        },
        filterRaw: function (str) {
            return str && str.replace(/\\n/g, "\n");
        },
    },
    mounted: function () {},
    components: {},
};
</script>
