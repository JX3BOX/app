<template>
    <div class="m-database-buff">
        <p v-if="list.length && done" class="m-resource-count">
            <i class="el-icon-s-data"></i> 共找到
            <b>{{ list.length }}</b> 条记录
        </p>
        <ul class="m-resource-list m-buff-list" v-if="list && list.length">
            <li v-for="(o, i) in list" class="u-item u-cantoggle" :key="i">
                <div class="u-buff">
                    <span class="u-id">ID:{{ o.BuffID }}</span>
                    <img
                        class="u-pic"
                        :title="'IconID:' + o.IconID"
                        :src="o.IconID | iconURL"
                    />
                    <div class="u-primary">
                        <span class="u-name"
                            >{{ o.Name
                            }}<em v-if="o.BuffName"
                                >({{ o.BuffName }})</em
                            ></span
                        >
                        <span class="u-content">{{ o.Desc }}</span>
                        <div class="u-remarks">
                            <span class="u-remark">Level : {{ o.Level }}</span>
                            <span class="u-remark"
                                >Remark : {{ o.Remark }}</span
                            >
                        </div>
                        <el-button
                            class="u-raw"
                            :class="{ on: o.isopen }"
                            icon="el-icon-view"
                            plain
                            size="mini"
                            @click="toggleProps(o)"
                            >{{ o.isopen ? "收起详情" : "展开详情" }}</el-button
                        >
                    </div>
                    <div class="u-props" :class="{ on: o.isopen }">
                        <span class="u-desc"
                            ><em>是否隐藏</em>{{ o.Hide }}</span
                        >
                        <span class="u-desc"
                            ><em>强度/优先级</em>{{ o.Intensity }}</span
                        >
                        <span class="u-desc"
                            ><em>功能</em>{{ o.FunctionType }}</span
                        >
                        <span class="u-desc"
                            ><em>能否驱散</em>{{ o.DetachType }}</span
                        >
                        <span class="u-desc"
                            ><em>能否主动取消</em>{{ o.CanCancel }}</span
                        >
                        <span class="u-desc"
                            ><em>能否被偷取</em>{{ o.CanBeSteal }}</span
                        >

                        <span class="u-desc"
                            ><em>能否叠加</em>{{ o.IsStackable }}</span
                        >
                        <span class="u-desc"
                            ><em>最大可叠加层数</em>{{ o.MaxStackNum }}</span
                        >
                        <span class="u-desc"><em>跳数</em>{{ o.Count }}</span>
                        <span class="u-desc"
                            ><em>作用间隔</em>{{ o.Interval }}帧</span
                        >
                        <span class="u-desc"
                            ><em>最小间隔</em>{{ o.MinInterval }}帧</span
                        >
                        <span class="u-desc"
                            ><em>最大间隔</em>{{ o.MaxInterval }}帧</span
                        >
                        <span class="u-desc" v-if="o.ActiveCoefficient"
                            ><em>每跳增幅</em>{{ o.ActiveCoefficient }}</span
                        >

                        <template v-if="hasRight">
                            <span class="u-desc u-adv" v-if="o.BeginAttrib1"
                                ><em>{{ o.BeginAttrib1 }}</em
                                >{{ o.BeginValue1A }} ／
                                {{ o.BeginValue1B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.BeginAttrib2"
                                ><em>{{ o.BeginAttrib2 }}</em
                                >{{ o.BeginValue2A }} ／
                                {{ o.BeginValue2B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.BeginAttrib3"
                                ><em>{{ o.BeginAttrib3 }}</em
                                >{{ o.BeginValue3A }} ／
                                {{ o.BeginValue3B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.BeginAttrib4"
                                ><em>{{ o.BeginAttrib4 }}</em
                                >{{ o.BeginValue4A }} ／
                                {{ o.BeginValue4B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.BeginAttrib5"
                                ><em>{{ o.BeginAttrib5 }}</em
                                >{{ o.BeginValue5A }} ／
                                {{ o.BeginValue5B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.BeginAttrib6"
                                ><em>{{ o.BeginAttrib6 }}</em
                                >{{ o.BeginValue6A }} ／
                                {{ o.BeginValue6B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.BeginAttrib7"
                                ><em>{{ o.BeginAttrib7 }}</em
                                >{{ o.BeginValue7A }} ／
                                {{ o.BeginValue7B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.BeginAttrib8"
                                ><em>{{ o.BeginAttrib8 }}</em
                                >{{ o.BeginValue8A }} ／
                                {{ o.BeginValue8B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.BeginAttrib9"
                                ><em>{{ o.BeginAttrib9 }}</em
                                >{{ o.BeginValue9A }} ／
                                {{ o.BeginValue9B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.BeginAttrib10"
                                ><em>{{ o.BeginAttrib10 }}</em
                                >{{ o.BeginValue10A }} ／
                                {{ o.BeginValue10B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.BeginAttrib11"
                                ><em>{{ o.BeginAttrib11 }}</em
                                >{{ o.BeginValue11A }} ／
                                {{ o.BeginValue11B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.BeginAttrib12"
                                ><em>{{ o.BeginAttrib12 }}</em
                                >{{ o.BeginValue12A }} ／
                                {{ o.BeginValue12B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.BeginAttrib13"
                                ><em>{{ o.BeginAttrib13 }}</em
                                >{{ o.BeginValue13A }} ／
                                {{ o.BeginValue13B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.BeginAttrib14"
                                ><em>{{ o.BeginAttrib14 }}</em
                                >{{ o.BeginValue14A }} ／
                                {{ o.BeginValue14B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.BeginAttrib15"
                                ><em>{{ o.BeginAttrib15 }}</em
                                >{{ o.BeginValue15A }} ／
                                {{ o.BeginValue15B }}</span
                            >

                            <span class="u-desc u-adv" v-if="o.ActiveAttrib1"
                                ><em>{{ o.ActiveAttrib1 }}</em
                                >{{ o.ActiveValue1A }} ／
                                {{ o.ActiveValue1B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.ActiveAttrib2"
                                ><em>{{ o.ActiveAttrib2 }}</em
                                >{{ o.ActiveValue2A }} ／
                                {{ o.ActiveValue2B }}</span
                            >

                            <span class="u-desc u-adv" v-if="o.EndTimeAttrib1"
                                ><em>{{ o.EndTimeAttrib1 }}</em
                                >{{ o.EndTimeValue1A }} ／
                                {{ o.EndTimeValue1B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.EndTimeAttrib2"
                                ><em>{{ o.EndTimeAttrib2 }}</em
                                >{{ o.EndTimeValue2A }} ／
                                {{ o.EndTimeValue2B }}</span
                            >
                            <span class="u-desc u-adv" v-if="o.ScriptFile"
                                ><em>ScriptFile</em>
                                <span>{{ o.ScriptFile }}</span>
                            </span>
                        </template>
                        <template v-else>
                            <div class="u-tip">
                                <i class="el-icon-lock"></i>
                                部分词条仅<a
                                    href="/vip/premium?from=database_buff"
                                    target="_blank"
                                    >高级版会员</a
                                >可见
                            </div>
                        </template>
                    </div>
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
import { __iconPath, __ossRoot } from "@jx3box/jx3box-common/js/jx3box.json";
export default {
    name: "data_buff",
    props: ["data", "vip",'status'],
    data: function() {
        return {
            list: this.data || [],
        };
    },
    computed: {
        hasRight: function() {
            return this.vip;
        },
        done : function (){
            return this.status
        }
    },
    watch: {
        data: {
            deep: true,
            handler: function(val) {
                this.list = val;
            },
        },
    },
    filters: {
        iconURL: function(id) {
            return __iconPath + "icon/" + id + ".png";
        },
        filterRaw: function(str) {
            return str && str.replace(/\\n/g, "\n");
        },
    },
    methods: {
        toggleProps: function(o) {
            o.isopen = !o.isopen;
        },
    },
    mounted: function() {},
    components: {},
};
</script>
