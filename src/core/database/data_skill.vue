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
                    <img
                        class="u-pic"
                        :title="'IconID:' + o.IconID"
                        :src="o.IconID | iconURL"
                    />
                    <div class="u-primary">
                        <span class="u-name"
                            >{{ o.Name }}
                            <em v-if="o.SkillName">({{ o.SkillName }})</em>
                        </span>
                        <span class="u-content">{{ o.Desc | filterRaw }}</span>
                        <div class="u-remarks">
                            <span class="u-remark">Level : {{ o.Level }}</span>
                            <span class="u-remark"
                                >Remark : {{ o.Remark }}</span
                            >
                            <span v-if="o.HelpDesc" class="u-remark"
                                >HelpDesc : {{ o.HelpDesc }}</span
                            >
                            <span v-if="o.SimpleDesc" class="u-remark"
                                >SimpleDesc : {{ o.SimpleDesc }}</span
                            >
                            <span v-if="o.SpecialDesc" class="u-remark"
                                >SpecialDesc : {{ o.SpecialDesc }}</span
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
                        <span class="u-desc" title="区分物理或魔法等"
                            ><em>类型</em>{{ o.KindType || "-" }}</span
                        >
                        <span class="u-desc" title="区分眩晕或伤害等"
                            ><em>功能</em>{{ o.FunctionType || "-" }}</span
                        >
                        <span
                            class="u-desc"
                            title="Harmful伤害类型技能/Neutral中立类型技能/Beneficial增益类型技能"
                            ><em>效果</em>{{ o.EffectType || "-" }}</span
                        >
                        <span class="u-desc"
                            ><em>生效</em>{{ o.Design_Effect || "-" }}</span
                        >

                        <span class="u-desc" title="范围或指定目标等"
                            ><em>释放方式</em>{{ o.CastMode }}</span
                        >
                        <span class="u-desc" title="是否为通道/引导技能"
                            ><em>通道技能</em
                            >{{ ~~o.IsChannelSkill ? "是" : "否" }}</span
                        >

                        <span class="u-desc" title="是否为被动"
                            ><em>被动</em
                            >{{ ~~o.IsPassiveSkill ? "是" : "否" }}</span
                        >
                        <span class="u-desc" title="3D碰撞"
                            ><em>是否受障碍影响</em
                            >{{ ~~o.Use3DObstacle ? "是" : "否" }}</span
                        >
                        <span class="u-desc"
                            ><em>可否打断</em
                            >{{ ~~o.CauseBeatBreak ? "可" : "否" }}</span
                        >
                        <span class="u-desc"
                            ><em>可否打退</em
                            >{{ ~~o.CauseBeatBack ? "可" : "否" }}</span
                        >

                        <span class="u-desc"
                            ><em>对玩家生效</em
                            >{{ ~~o.TargetTypePlayer ? "是" : "否" }}</span
                        >
                        <span class="u-desc"
                            ><em>对NPC生效</em
                            >{{ ~~o.TargetTypeNpc ? "是" : "否" }}</span
                        >
                        <span class="u-desc"
                            ><em>小队生效</em
                            >{{ ~~o.TargetRelationParty ? "是" : "否" }}</span
                        >
                        <span class="u-desc"
                            ><em>团队生效</em
                            >{{ ~~o.TargetRelationRaid ? "是" : "否" }}</span
                        >

                        <span class="u-desc"
                            ><em>所属门派</em>{{ o.BelongSchool }}</span
                        >
                        <span class="u-desc"
                            ><em>所属套路</em>{{ o.BelongKungfu }}</span
                        >
                        <span class="u-desc"
                            ><em>最高等级</em>{{ o.MaxLevel }}</span
                        >
                        <span class="u-desc" title="用于例如凌雪阁技能斩无常是否能反弹"
                            ><em>视为弹道技能</em>{{ o.LongRange }}</span
                        >
                        <span class="u-desc"
                            ><em>是否需求武器</em
                            >{{ ~~o.WeaponRequest ? "是" : "否" }}</span
                        >
                        <span class="u-desc"
                            ><em>是否需要上马</em
                            >{{ ~~o.SelfHorseStateRequest ? "是" : "否" }}</span
                        >
                        <span class="u-desc"
                            ><em>需要脱战释放</em
                            >{{ ~~o.NeedOutOfFight ? "是" : "否" }}</span
                        >
                        <span class="u-desc" title="技能消耗武器耐久的比例"
                            ><em>武器耐久消耗</em
                            >{{ ~~o.AbradeEquipRate && ~~(o.AbradeEquipRate/1024) }}</span
                        >

                        <template v-if="hasRight">
                            <span class="u-desc u-adv"
                                ><em>可否会心</em
                                >{{ ~~o.hasCriticalStrike ? "是" : "否" }}</span
                            >
                            <span class="u-desc u-adv"
                                ><em>必定命中</em
                                >{{ ~~o.IsExactHit ? "是" : "否" }}</span
                            >
                            <span class="u-desc u-adv"
                                ><em>穿透</em
                                >{{ ~~o.Penetration ? "是" : "否" }}</span
                            >
                            <span class="u-desc u-adv"
                                ><em>是否使用技能系数</em
                                >{{
                                    ~~o.UseSkillCoefficient ? "是" : "否"
                                }}</span
                            >
                            <span class="u-desc u-adv" title="受到的范围伤害降低"
                                ><em>AOE</em
                                >{{ ~~o.AOE ? "是" : "否" }}</span
                            >
                            <span class="u-desc u-adv"
                                ><em>无视「免疫增益效果」</em
                                >{{
                                    ~~o.IgnorePositiveShield ? "是" : "否"
                                }}</span
                            >
                            <span class="u-desc u-adv"
                                ><em>无视「免疫减益效果」</em
                                >{{
                                    ~~o.IgnoreNegativeShield ? "是" : "否"
                                }}</span
                            >
                            <span class="u-desc u-adv" title="包括沉默、任意属性封内"
                                ><em>无视「无法释放技能效果」</em
                                >{{
                                    ~~o.IgnoreSilence ? "是" : "否"
                                }}</span
                            >
                            <!-- <span class="u-desc u-adv" title="一个被动附加属性（这是之前做日常奖励属性的那个机制，但是被玩家给推翻了，西山居就废弃了这个东西，目前没有别的东西在用这个属性）"
                                ><em>IsMentalPassiveSkill</em
                                >{{ o.IsMentalPassiveSkill }}</span
                            > -->
                            <span class="u-desc u-adv"
                                ><em>ScriptFile</em
                                ><span v-html="scriptAssociate(o.ScriptFile)"></span>
                            </span>
                        </template>
                        <template v-else>
                            <div class="u-tip">
                                <i class="el-icon-lock"></i>
                                部分词条仅<a
                                    href="/vip/premium?from=database_skill"
                                    target="_blank"
                                    >高级/专业版会员</a
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
import { __iconPath, __ossRoot,__Root } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "data_skill",
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
        scriptAssociate : function (val){
            if(val.includes('副本BOSS')){
                let path_arr = val.split('/')
                let start = path_arr.indexOf('副本BOSS')
                let fb_name = path_arr[start + 1] || ''
                return `<a href="${__Root}fb/?fb_name=${fb_name}#/skill" target="_blank">${val}</a>`
            }else{
                return val
            }
        }
    },
    mounted: function() {},
    components: {},
};
</script>
