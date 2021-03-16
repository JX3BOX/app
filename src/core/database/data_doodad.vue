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
                    <img
                        class="u-pic"
                        :title="'IconID:' + 10909"
                        :src="10909 | iconURL"
                    />
                    <span class="u-name">{{ o.Name }}</span>
                    <span class="u-desc">
                        <span class="u-doodad-prop"
                            ><em>地图</em> {{ o.MapName }}</span
                        >
                        <span class="u-doodad-prop"
                            ><em>说明</em> {{ o.BarText }}</span
                        >
                        <span class="u-doodad-prop"
                            ><em>类型</em> {{ o.Kind }}</span
                        >
                    </span>
                    <span class="u-desc u-adv" v-if="hasRight">
                        <em>script</em>{{ o.Script }}
                    </span>
                    <template v-else>
                        <div class="u-tip">
                            <i class="el-icon-lock"></i>
                            部分词条仅<a
                                href="/vip/premium?from=database_doodad"
                                target="_blank"
                                >高级/专业版会员</a
                            >可见
                        </div>
                    </template>
                </div>
            </li>
        </ul>
        <el-alert
            v-if="!list.length && done"
            title="没有找到相关条目"
            type="info"
            show-icon
        >
        </el-alert>
    </div>
</template>

<script>
import { __iconPath, __ossRoot } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "doodad",
    props: ["data", "vip", "status"],
    data: function() {
        return {
            list: this.data || [],
        };
    },
    computed: {
        hasRight: function() {
            return this.vip;
        },
        done: function() {
            return this.status;
        },
    },
    watch: {
        data: {
            deep: true,
            handler: function(val) {
                this.list = val;
            },
        },
    },
    methods: {},
    filters: {
        iconURL: function(id) {
            return __iconPath + "icon/" + id + ".png";
        },
        filterRaw: function(str) {
            return str && str.replace(/\\n/g, "\n");
        },
    },
    mounted: function() {},
    components: {},
};
</script>
