<template>
    <div class="m-database-npc">
        <p v-if="list.length && done" class="m-resource-count">
            <i class="el-icon-s-data"></i> 共找到
            <b>{{ list.length }}</b> 条记录
        </p>
        <ul class="m-npc-list" v-if="list && list.length">
            <li v-for="(o, i) in list" class="u-item" :key="o + i">
                <div class="u-npc">
                    <Mark
                        class="u-id"
                        BGL="#333"
                        :value="'ID:' + o.ID"
                        :key="o.ID"
                        v-clipboard:copy="o.ID"
                        v-clipboard:success="onCopy"
                        v-clipboard:error="onError"
                    />
                    <div class="u-title">
                        <span class="u-name">{{ o.Name }}</span>
                        <span class="u-name-add">
                            <span v-if="o.Title || o.Level">&lt;</span>
                            <span class="u-nick" v-if="o.Title">
                                {{
                                o.Title
                                }}
                            </span>
                            <span v-if="o.Title && o.Level">·</span>
                            <b class="u-level" v-if="o.Level">{{ o.Level }}</b>
                            <span v-if="o.Title || o.Level">&gt;</span>
                        </span>
                        <div class="u-base">
                            <span class="u-atmap" v-if="o.MapName">
                                <!-- <em>MapName</em> -->
                                {{ o.MapName }}
                            </span>
                            <!-- <span class="u-totation" v-if="o._Notation">
                                <em>_Notation</em>
                                {{ o._Notation }}
                            </span>-->
                            <span class="u-intensity" v-if="o.Intensity">
                                强度
                                <!-- <em>Intensity</em> -->
                                {{ o.Intensity }}
                            </span>
                        </div>
                    </div>
                    <div class="u-primary">
                        <div class="u-life">
                            <img
                                class="u-descicon u-descicon-life"
                                svg-inline
                                src="../../assets/img/database/energy.svg"
                            />
                            <b>血量</b>
                            <em>MaxLife</em>
                            <strong>{{ o.MaxLife }}</strong>
                        </div>
                        <div class="u-mana">
                            <img
                                class="u-descicon u-descicon-mana"
                                svg-inline
                                src="../../assets/img/database/energy.svg"
                            />
                            <b>内力</b>
                            <em>MaxMana</em>
                            <strong>{{ o.MaxMana }}</strong>
                        </div>
                        <div class="u-speed" v-if="o.RunSpeed || o.WalkSpeed">
                            <img
                                class="u-descicon u-descicon-speed"
                                svg-inline
                                src="../../assets/img/database/speed.svg"
                            />
                            <b>跑速</b>
                            <em>RunSpeed</em>
                            <strong>{{ o.RunSpeed || o.WalkSpeed }}</strong>
                        </div>
                        <div class="u-touch" v-if="o.TouchRange">
                            <img
                                class="u-descicon u-descicon-touch"
                                svg-inline
                                src="../../assets/img/database/radar.svg"
                            />
                            <b>范围</b>
                            <em>TouchRange</em>
                            <strong>{{ o.TouchRange }}</strong>
                        </div>
                        <div class="u-sense" v-if="o.Sense">
                            <img
                                class="u-descicon u-descicon-sense"
                                svg-inline
                                src="../../assets/img/database/sight.svg"
                            />
                            <b>识破</b>
                            <em>Sense</em>
                            <strong>{{ o.Sense }}</strong>
                        </div>
                        <div class="u-dodge" v-if="o.Dodge">
                            <img
                                class="u-descicon u-descicon-dodge"
                                svg-inline
                                src="../../assets/img/database/miss.svg"
                            />
                            <b>闪避</b>
                            <em>Dodge</em>
                            <strong>{{ o.Dodge }}</strong>
                        </div>
                        <div class="u-dodge" v-if="o.Parry">
                            <img
                                class="u-descicon u-descicon-dodge"
                                svg-inline
                                src="../../assets/img/database/miss.svg"
                            />
                            <b>招架</b>
                            <em>Parry</em>
                            <strong>{{ o.ParryValue }}</strong>
                        </div>
                        <div class="u-shield">
                            <img
                                class="u-descicon u-descicon-shield"
                                svg-inline
                                src="../../assets/img/database/shield.svg"
                            />
                            <b>防御</b>
                            <em>Shield</em>
                            <span class="u-sitem">
                                外功防御
                                <em>PhysicsShieldBase</em>
                                <span class="u-value">{{~~o.PhysicsShieldBase}}</span>
                            </span>
                            <span class="u-sitem">
                                混元防御
                                <em>NeutralMagicDefence</em>
                                <span class="u-value">{{~~o.NeutralMagicDefence}}</span>
                            </span>
                            <span class="u-sitem">
                                阳性防御
                                <em>SolarMagicDefence</em>
                                <span class="u-value">{{~~o.SolarMagicDefence}}</span>
                            </span>
                            <span class="u-sitem">
                                阴性防御
                                <em>LunarMagicDefence</em>
                                <span class="u-value">{{~~o.LunarMagicDefence}}</span>
                            </span>
                            <span class="u-sitem">
                                毒性防御
                                <em>PoisonMagicDefence</em>
                                <span class="u-value">{{~~o.PoisonMagicDefence}}</span>
                            </span>
                        </div>
                        <div class="u-critical">
                            <img
                                class="u-descicon u-descicon-attack"
                                svg-inline
                                src="../../assets/img/database/attack.svg"
                            />
                            <b>会心</b>
                            <em>Critical</em>
                            <span class="u-sitem">
                                外功会心
                                <em>PhysicsCriticalStrike</em>
                                <span class="u-value">{{~~o.PhysicsCriticalStrike}}</span>
                            </span>
                            <span class="u-sitem">
                                混元会心
                                <em>NeutralCriticalStrike</em>
                                <span class="u-value">{{~~o.NeutralCriticalStrike}}</span>
                            </span>
                            <span class="u-sitem">
                                阳性会心
                                <em>SolarCriticalStrike</em>
                                <span class="u-value">{{~~o.SolarCriticalStrike}}</span>
                            </span>
                            <span class="u-sitem">
                                阴性会心
                                <em>LunarCriticalStrike</em>
                                <span class="u-value">{{~~o.LunarCriticalStrike}}</span>
                            </span>
                            <span class="u-sitem">
                                毒性会心
                                <em>PoisonCriticalStrike</em>
                                <span class="u-value">{{~~o.PoisonCriticalStrike}}</span>
                            </span>
                        </div>
                        <div class="u-attack">
                            <img
                                class="u-descicon u-descicon-attack"
                                svg-inline
                                src="../../assets/img/database/target.svg"
                            />
                            <b>命中</b>
                            <em>Attack</em>
                            <span class="u-sitem">
                                外功命中
                                <em>PhysicsAttackHit</em>
                                <span class="u-value">{{~~o.PhysicsAttackHit}}</span>
                            </span>
                            <span class="u-sitem">
                                混元命中
                                <em>NeutralMagicHit</em>
                                <span class="u-value">{{~~o.NeutralMagicHit}}</span>
                            </span>
                            <span class="u-sitem">
                                阳性命中
                                <em>SolarMagicHit</em>
                                <span class="u-value">{{~~o.SolarMagicHit}}</span>
                            </span>
                            <span class="u-sitem">
                                阴性命中
                                <em>LunarMagicHit</em>
                                <span class="u-value">{{~~o.LunarMagicHit}}</span>
                            </span>
                            <span class="u-sitem">
                                毒性命中
                                <em>PoisonMagicHit</em>
                                <span class="u-value">{{~~o.PoisonMagicHit}}</span>
                            </span>
                        </div>
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
                    <div class="u-props" :class="{ on: o.isopen }" v-if="hasRight">
                        <template v-for="(val,key) in o">
                            <span class="u-desc" :key="key" v-if="cansee(o,key)">
                                <el-tooltip effect="light" :content="key" placement="top">
                                    <em>{{npcmap[key]['desc'] ? npcmap[key]['desc'] : key}}</em>
                                </el-tooltip>
                                {{ val }}
                            </span>
                        </template>
                    </div>
                    <!-- <div class="u-misc-tip" v-else>
                        <i class="el-icon-lock"></i>
                        部分词条仅
                        <a
                            href="/vip/premium?from=database_npc"
                            target="_blank"
                        >高级/专业版会员</a>可见
                    </div> -->
                </div>
            </li>
        </ul>
        <el-alert v-if="!list.length && done" title="没有找到相关条目" type="info" show-icon></el-alert>
    </div>
</template>

<script>
import npcmap from "@jx3box/jx3box-data/data/app/npc.json";
export default {
    name: "npc",
    props: ["data", "vip", "status"],
    data: function () {
        return {
            list: this.data || [],
            npcmap,
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
        iconURL: function (id) {
            return __iconPath + "icon/" + id + ".png";
        },
        filterRaw: function (str) {
            return str && str.replace(/\\n/g, "\n");
        },
    },
    methods: {
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
        toggleProps: function (o) {
            o.isopen = !o.isopen;
        },
        cansee: function (o, key) {
            // 本地虚拟字段
            if (key == "isopen" || key == "IdKey") return false;

            // 值为null实
            if (o[key] === null) return false;

            // 不包含基础类型
            if (this.npcmap[key]["adv"]) return true;

            return false;
        },
    },
};
</script>
