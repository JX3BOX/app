<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="剑三数据库"
            slug="database"
            root="/app/database"
            :feedbackEnable="true"
        >
            <img
                slot="logo"
                svg-inline
                src="../../assets/img/logos/database.svg"
            />
            <div class="m-info"></div>
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-database" v-loading="loading">
                <h1 class="m-database-title">剑三数据库</h1>

                <div class="m-database-search">
                    <el-input
                        placeholder="请输入 ID 或 名称"
                        v-model="query"
                        @change="search"
                        @keyup.enter.native="search"
                    >
                        <template slot="prepend">ID ／名称</template>
                        <el-button
                            slot="append"
                            icon="el-icon-search"
                        ></el-button>
                    </el-input>
                </div>
                <div class="m-databse-subtype">
                    <!-- <div class="u-label">
                        <i class="el-icon-s-operation"></i>追加条件
                    </div> -->
                    <div class="u-subtype u-strict">
                        <el-switch
                            v-model="strict"
                            active-text="精确匹配"
                            @change="search"
                        >
                        </el-switch>
                    </div>
                    <div class="u-subtype" v-show="type == 'skill'">
                        <el-select
                            v-model="school"
                            placeholder="门派"
                            size="medium"
                            @change="search"
                        >
                            <el-option
                                v-for="(item, key) in schools"
                                :key="key"
                                :label="key"
                                :value="item"
                            >
                            </el-option>
                        </el-select>
                    </div>
                    <div
                        class="u-subtype"
                        v-show="type == 'skill' || type == 'buff'"
                    >
                        <el-input
                            size="medium"
                            placeholder="指定技能/Buff等级"
                            v-model="level"
                            @change="search"
                        >
                            <template slot="prepend">等级</template>
                        </el-input>
                    </div>
                    <div class="u-subtype" v-show="type == 'npc'">
                        <el-input
                            size="medium"
                            placeholder="指定NPC所在地图"
                            v-model="npc_map"
                            @change="search"
                        >
                            <template slot="prepend">地图</template>
                        </el-input>
                    </div>
                    <div class="u-subtype" v-show="type == 'npc'">
                        <el-input
                            size="medium"
                            placeholder="指定NPC等级"
                            v-model="npc_level"
                            @change="search"
                        >
                            <template slot="prepend">等级</template>
                        </el-input>
                    </div>
                    <div class="u-subtype" v-show="type == 'doodad'">
                        <el-input
                            size="medium"
                            placeholder="指定等级"
                            v-model="doodad_level"
                            @change="search"
                        >
                            <template slot="prepend">等级</template>
                        </el-input>
                    </div>
                </div>

                <el-tabs
                    class="m-database-tabs"
                    v-model="type"
                    type="card"
                    @tab-click="search"
                >
                    <el-tab-pane label="Buff" name="buff">
                        <span slot="label">
                            <img
                                class="u-icon"
                                svg-inline
                                src="../../assets/img/database/skill3.svg"
                            />
                            <b>Buff</b>
                            <em class="u-count">{{ stat.buff }}</em>
                        </span>
                        <p v-if="buff.length && done" class="m-resource-count">
                            <i class="el-icon-s-data"></i> 共找到
                            <b>{{ buff.length }}</b> 条记录
                        </p>
                        <ul class="m-resource-list">
                            <li v-for="(o, i) in buff" class="u-item u-cantoggle" :key="i">
                                <span class="u-id">ID:{{ o.BuffID }}</span>
                                <img
                                    class="u-pic"
                                    :title="'IconID:' + o.IconID"
                                    :src="o.IconID | iconURL"
                                />
                                <div class="u-primary">
                                    <span class="u-name"
                                        >{{ o.Name
                                        }}<em v-if="o.BuffName">({{ o.BuffName }})</em></span
                                    >
                                    <span class="u-content">{{ o.Desc }}</span>
                                    <div class="u-remarks">
                                        <span class="u-remark"
                                            >Level : {{ o.Level }}</span
                                        >
                                        <span class="u-remark"
                                            >Remark : {{ o.Remark }}</span
                                        >
                                    </div>
                                    <el-button
                                        class="u-raw"
                                        :class="{on : o.isopen}"
                                        icon="el-icon-view"
                                        plain
                                        size="mini"
                                        @click="toggleProps(o)"
                                        >{{
                                            o.isopen ? "收起详情" : "展开详情"
                                        }}</el-button
                                    >
                                </div>
                                <div class="u-props" :class="{ on: o.isopen }">
                                    <span class="u-desc"
                                        ><em>是否隐藏</em>{{ o.Hide }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>强度/优先级</em
                                        >{{ o.Intensity }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>功能</em>{{ o.FunctionType }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>能否驱散</em
                                        >{{ o.DetachType }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>能否主动取消</em
                                        >{{ o.CanCancel }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>能否被偷取</em
                                        >{{ o.CanBeSteal }}</span
                                    >

                                    <span class="u-desc"
                                        ><em>能否叠加</em
                                        >{{ o.IsStackable }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>最大可叠加层数</em
                                        >{{ o.MaxStackNum }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>跳数</em>{{ o.Count }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>作用间隔</em
                                        >{{ o.Interval }}帧</span
                                    >
                                    <span class="u-desc"
                                        ><em>最小间隔</em
                                        >{{ o.MinInterval }}帧</span
                                    >
                                    <span class="u-desc"
                                        ><em>最大间隔</em
                                        >{{ o.MaxInterval }}帧</span
                                    >

                                    <span class="u-desc" v-if="o.BeginAttrib1"
                                        ><em>{{ o.BeginAttrib1 }}</em
                                        >{{ o.BeginValue1A }} ／
                                        {{ o.BeginValue1B }}</span
                                    >
                                    <span class="u-desc" v-if="o.BeginAttrib2"
                                        ><em>{{ o.BeginAttrib2 }}</em
                                        >{{ o.BeginValue2A }} ／
                                        {{ o.BeginValue2B }}</span
                                    >
                                    <span class="u-desc" v-if="o.BeginAttrib3"
                                        ><em>{{ o.BeginAttrib3 }}</em
                                        >{{ o.BeginValue3A }} ／
                                        {{ o.BeginValue3B }}</span
                                    >
                                    <span class="u-desc" v-if="o.BeginAttrib4"
                                        ><em>{{ o.BeginAttrib4 }}</em
                                        >{{ o.BeginValue4A }} ／
                                        {{ o.BeginValue4B }}</span
                                    >
                                    <span class="u-desc" v-if="o.BeginAttrib5"
                                        ><em>{{ o.BeginAttrib5 }}</em
                                        >{{ o.BeginValue5A }} ／
                                        {{ o.BeginValue5B }}</span
                                    >
                                    <span class="u-desc" v-if="o.BeginAttrib6"
                                        ><em>{{ o.BeginAttrib6 }}</em
                                        >{{ o.BeginValue6A }} ／
                                        {{ o.BeginValue6B }}</span
                                    >
                                    <span class="u-desc" v-if="o.BeginAttrib7"
                                        ><em>{{ o.BeginAttrib7 }}</em
                                        >{{ o.BeginValue7A }} ／
                                        {{ o.BeginValue7B }}</span
                                    >
                                    <span class="u-desc" v-if="o.BeginAttrib8"
                                        ><em>{{ o.BeginAttrib8 }}</em
                                        >{{ o.BeginValue8A }} ／
                                        {{ o.BeginValue8B }}</span
                                    >
                                    <span class="u-desc" v-if="o.BeginAttrib9"
                                        ><em>{{ o.BeginAttrib9 }}</em
                                        >{{ o.BeginValue9A }} ／
                                        {{ o.BeginValue9B }}</span
                                    >
                                    <span class="u-desc" v-if="o.BeginAttrib10"
                                        ><em>{{ o.BeginAttrib10 }}</em
                                        >{{ o.BeginValue10A }} ／
                                        {{ o.BeginValue10B }}</span
                                    >
                                    <span class="u-desc" v-if="o.BeginAttrib11"
                                        ><em>{{ o.BeginAttrib11 }}</em
                                        >{{ o.BeginValue11A }} ／
                                        {{ o.BeginValue11B }}</span
                                    >
                                    <span class="u-desc" v-if="o.BeginAttrib12"
                                        ><em>{{ o.BeginAttrib12 }}</em
                                        >{{ o.BeginValue12A }} ／
                                        {{ o.BeginValue12B }}</span
                                    >
                                    <span class="u-desc" v-if="o.BeginAttrib13"
                                        ><em>{{ o.BeginAttrib13 }}</em
                                        >{{ o.BeginValue13A }} ／
                                        {{ o.BeginValue13B }}</span
                                    >
                                    <span class="u-desc" v-if="o.BeginAttrib14"
                                        ><em>{{ o.BeginAttrib14 }}</em
                                        >{{ o.BeginValue14A }} ／
                                        {{ o.BeginValue14B }}</span
                                    >
                                    <span class="u-desc" v-if="o.BeginAttrib15"
                                        ><em>{{ o.BeginAttrib15 }}</em
                                        >{{ o.BeginValue15A }} ／
                                        {{ o.BeginValue15B }}</span
                                    >

                                    <span class="u-desc" v-if="o.ActiveAttrib1"
                                        ><em>{{ o.ActiveAttrib1 }}</em
                                        >{{ o.ActiveValue1A }} ／
                                        {{ o.ActiveValue1B }}</span
                                    >
                                    <span class="u-desc" v-if="o.ActiveAttrib2"
                                        ><em>{{ o.ActiveAttrib2 }}</em
                                        >{{ o.ActiveValue2A }} ／
                                        {{ o.ActiveValue2B }}</span
                                    >

                                    <span class="u-desc" v-if="o.EndTimeAttrib1"
                                        ><em>{{ o.EndTimeAttrib1 }}</em
                                        >{{ o.EndTimeValue1A }} ／
                                        {{ o.EndTimeValue1B }}</span
                                    >
                                    <span class="u-desc" v-if="o.EndTimeAttrib2"
                                        ><em>{{ o.EndTimeAttrib2 }}</em
                                        >{{ o.EndTimeValue2A }} ／
                                        {{ o.EndTimeValue2B }}</span
                                    >

                                    <span
                                        class="u-desc"
                                        title="每跳增幅"
                                        v-if="o.ActiveCoefficient"
                                        ><em>ActiveCoefficient</em
                                        >{{ o.ActiveCoefficient }}</span
                                    >
                                    <span class="u-desc" v-if="o.ScriptFile"
                                        ><em>ScriptFile</em
                                        >{{ o.ScriptFile }}</span
                                    >
                                </div>
                            </li>
                        </ul>
                        <el-alert
                            v-if="!buff.length && done"
                            title="没有找到相关条目"
                            type="info"
                            show-icon
                        >
                        </el-alert>
                    </el-tab-pane>
                    <el-tab-pane label="技能" name="skill">
                        <span slot="label">
                            <img
                                class="u-icon"
                                svg-inline
                                src="../../assets/img/database/skill4.svg"
                            />
                            <b>技能</b>
                            <em class="u-count">{{ stat.skill }}</em>
                        </span>
                        <p v-if="skill.length && done" class="m-resource-count">
                            <i class="el-icon-s-data"></i> 共找到
                            <b>{{ skill.length }}</b> 条记录
                        </p>
                        <ul class="m-resource-list">
                            <li v-for="(o, i) in skill" class="u-item u-cantoggle" :key="i" >
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
                                    <span class="u-content">{{
                                        o.Desc | filterRaw
                                    }}</span>
                                    <div class="u-remarks">
                                        <span class="u-remark"
                                            >Level : {{ o.Level }}</span
                                        >
                                        <span class="u-remark"
                                            >Remark : {{ o.Remark }}</span
                                        >
                                        <span v-if="o.HelpDesc" class="u-remark"
                                            >HelpDesc : {{ o.HelpDesc }}</span
                                        >
                                        <span
                                            v-if="o.SimpleDesc"
                                            class="u-remark"
                                            >SimpleDesc :
                                            {{ o.SimpleDesc }}</span
                                        >
                                        <span
                                            v-if="o.SpecialDesc"
                                            class="u-remark"
                                            >SpecialDesc :
                                            {{ o.SpecialDesc }}</span
                                        >
                                    </div>
                                    <el-button
                                        class="u-raw"
                                        :class="{on : o.isopen}"
                                        icon="el-icon-view"
                                        plain
                                        size="mini"
                                        @click="toggleProps(o)"
                                        >{{
                                            o.isopen ? "收起详情" : "展开详情"
                                        }}</el-button
                                    >
                                </div>
                                <div class="u-props" :class="{ on: o.isopen }">
                                    <span
                                        class="u-desc"
                                        title="区分物理或魔法等"
                                        ><em>类型</em>{{ o.KindType }}</span
                                    >
                                    <span
                                        class="u-desc"
                                        title="区分眩晕或伤害等"
                                        ><em>功能</em>{{ o.FunctionType }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>效果</em
                                        >{{ o.Design_Effect }}</span
                                    >
                                    <span
                                        class="u-desc"
                                        title="范围或指定目标等"
                                        ><em>释放方式</em>{{ o.CastMode }}</span
                                    >
                                    <span class="u-desc" title="是否为被动"
                                        ><em>被动</em
                                        >{{ o.IsPassiveSkill }}</span
                                    >
                                    <span
                                        class="u-desc"
                                        title="是否为通道/引导技能"
                                        ><em>通道</em
                                        >{{ o.IsChannelSkill }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>可否打断</em
                                        >{{ o.CauseBeatBreak }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>可否打退</em
                                        >{{ o.CauseBeatBack }}</span
                                    >
                                    <span class="u-desc" title="是否受障碍影响"
                                        ><em>3D碰撞</em
                                        >{{ o.Use3DObstacle }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>对玩家生效</em
                                        >{{ o.TargetTypePlayer }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>对NPC生效</em
                                        >{{ o.TargetTypeNpc }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>小队生效</em
                                        >{{ o.TargetRelationParty }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>团队生效</em
                                        >{{ o.TargetRelationRaid }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>无视增益</em
                                        >{{ o.IgnorePositiveShield }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>无视减益</em
                                        >{{ o.IgnoreNegativeShield }}</span
                                    >

                                    <span class="u-desc"
                                        ><em>所属门派</em
                                        >{{ o.BelongSchool }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>所属套路</em
                                        >{{ o.BelongKungfu }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>最高等级</em>{{ o.MaxLevel }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>是否需求武器</em
                                        >{{ o.WeaponRequest }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>是否需要上马</em
                                        >{{ o.SelfHorseStateRequest }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>需要脱战释放</em
                                        >{{ o.NeedOutOfFight }}</span
                                    >
                                    <span class="u-desc"
                                        ><em>ScriptFile</em
                                        >{{ o.ScriptFile }}</span
                                    >
                                </div>
                            </li>
                        </ul>
                        <el-alert
                            v-if="!skill.length && done"
                            title="没有找到相关条目"
                            type="info"
                            show-icon
                        >
                        </el-alert>
                    </el-tab-pane>
                    <el-tab-pane label="NPC" name="npc">
                        <span slot="label">
                            <img
                                class="u-icon"
                                svg-inline
                                src="../../assets/img/logos/skull.svg"
                            />
                            <b>NPC</b>
                            <em class="u-count">{{ stat.npc }}</em>
                        </span>
                        <p v-if="npc.length && done" class="m-resource-count">
                            <i class="el-icon-s-data"></i> 共找到
                            <b>{{ npc.length }}</b> 条记录
                        </p>
                        <ul class="m-npc-list" v-if="npc.length">
                            <li
                                v-for="(o, i) in npc"
                                class="u-item"
                                :key="o + i"
                            >
                                <Mark
                                    class="u-id"
                                    BGL="#333"
                                    :value="'ID:' + o.ID"
                                    :key="o + ''"
                                    v-clipboard:copy="o.ID"
                                    v-clipboard:success="onCopy"
                                    v-clipboard:error="onError"
                                />
                                <div class="u-title">
                                    <span class="u-name">{{ o.Name }}</span>
                                    <span class="u-name-add">
                                        <span v-if="o.Title || o.Level"
                                            >&lt;</span
                                        >
                                        <span class="u-nick" v-if="o.Title">{{
                                            o.Title
                                        }}</span>
                                        <span v-if="o.Title && o.Level">·</span>
                                        <b class="u-level" v-if="o.Level">{{
                                            o.Level
                                        }}</b>
                                        <span v-if="o.Title || o.Level"
                                            >&gt;</span
                                        >
                                    </span>
                                    <div class="u-base">
                                        <span class="u-atmap" v-if="o.MapName">
                                            <em>MapName</em>
                                            {{ o.MapName }}
                                        </span>
                                        <span
                                            class="u-totation"
                                            v-if="o._Notation"
                                        >
                                            <em>_Notation</em>
                                            {{ o._Notation }}
                                        </span>
                                        <span
                                            class="u-intensity"
                                            v-if="o.Intensity"
                                        >
                                            强度
                                            <em>Intensity</em>
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
                                    <div
                                        class="u-speed"
                                        v-if="o.RunSpeed || o.WalkSpeed"
                                    >
                                        <img
                                            class="u-descicon u-descicon-speed"
                                            svg-inline
                                            src="../../assets/img/database/speed.svg"
                                        />
                                        <b>跑速</b>
                                        <em>RunSpeed</em>
                                        <strong>{{
                                            o.RunSpeed || o.WalkSpeed
                                        }}</strong>
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
                                            <span class="u-value">{{
                                                o.PhysicsShieldBase
                                            }}</span>
                                        </span>
                                        <span class="u-sitem">
                                            混元防御
                                            <em>NeutralMagicDefence</em>
                                            <span class="u-value">{{
                                                o.NeutralMagicDefence
                                            }}</span>
                                        </span>
                                        <span class="u-sitem">
                                            阳性防御
                                            <em>SolarMagicDefence</em>
                                            <span class="u-value">{{
                                                o.SolarMagicDefence
                                            }}</span>
                                        </span>
                                        <span class="u-sitem">
                                            阴性防御
                                            <em>LunarMagicDefence</em>
                                            <span class="u-value">{{
                                                o.LunarMagicDefence
                                            }}</span>
                                        </span>
                                        <span class="u-sitem">
                                            毒性防御
                                            <em>PoisonMagicDefence</em>
                                            <span class="u-value">{{
                                                o.PoisonMagicDefence
                                            }}</span>
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
                                            <span class="u-value">{{
                                                o.PhysicsCriticalStrike
                                            }}</span>
                                        </span>
                                        <span class="u-sitem">
                                            混元会心
                                            <em>NeutralCriticalStrike</em>
                                            <span class="u-value">{{
                                                o.NeutralCriticalStrike
                                            }}</span>
                                        </span>
                                        <span class="u-sitem">
                                            阳性会心
                                            <em>SolarCriticalStrike</em>
                                            <span class="u-value">{{
                                                o.SolarCriticalStrike
                                            }}</span>
                                        </span>
                                        <span class="u-sitem">
                                            阴性会心
                                            <em>LunarCriticalStrike</em>
                                            <span class="u-value">{{
                                                o.LunarCriticalStrike
                                            }}</span>
                                        </span>
                                        <span class="u-sitem">
                                            毒性会心
                                            <em>PoisonCriticalStrike</em>
                                            <span class="u-value">{{
                                                o.PoisonCriticalStrike
                                            }}</span>
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
                                            <span class="u-value">{{
                                                o.PhysicsAttackHit
                                            }}</span>
                                        </span>
                                        <span class="u-sitem">
                                            混元命中
                                            <em>NeutralMagicHit</em>
                                            <span class="u-value">{{
                                                o.NeutralMagicHit
                                            }}</span>
                                        </span>
                                        <span class="u-sitem">
                                            阳性命中
                                            <em>SolarMagicHit</em>
                                            <span class="u-value">{{
                                                o.SolarMagicHit
                                            }}</span>
                                        </span>
                                        <span class="u-sitem">
                                            阴性命中
                                            <em>LunarMagicHit</em>
                                            <span class="u-value">{{
                                                o.LunarMagicHit
                                            }}</span>
                                        </span>
                                        <span class="u-sitem">
                                            毒性命中
                                            <em>PoisonMagicHit</em>
                                            <span class="u-value">{{
                                                o.PoisonMagicHit
                                            }}</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="u-misc" v-if="isSuperAuthor">
                                    <span class="u-remark">
                                        CanSeeLifeBar:
                                        <strong>{{ o.CanSeeLifeBar }}</strong>
                                    </span>
                                    <span class="u-remark">
                                        IsSelectable:
                                        <strong>{{ o.IsSelectable }}</strong>
                                    </span>

                                    <span class="u-remark">
                                        ReviveTime:
                                        <strong>{{ o.ReviveTime }}</strong>
                                    </span>
                                    <span class="u-remark">
                                        ImmunityMask:
                                        <strong>{{ o.ImmunityMask }}</strong>
                                    </span>
                                    <span class="u-remark">
                                        ScriptName:
                                        <strong>{{ o.ScriptName }}</strong>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <el-alert
                            v-if="!npc.length && done"
                            title="没有找到相关条目"
                            type="info"
                            show-icon
                        >
                        </el-alert>
                    </el-tab-pane>
                    <el-tab-pane label="交互物件" name="doodad">
                        <span slot="label">
                            <img
                                class="u-icon"
                                svg-inline
                                src="../../assets/img/database/doodad.svg"
                            />
                            <b>交互物件</b>
                            <em class="u-count">{{ stat.doodad }}</em>
                        </span>
                        <p
                            v-if="doodad.length && done"
                            class="m-resource-count"
                        >
                            <i class="el-icon-s-data"></i> 共找到
                            <b>{{ doodad.length }}</b> 条记录
                        </p>
                        <ul class="m-resource-list" v-if="doodad.length">
                            <li
                                v-for="(o, i) in doodad"
                                :key="i"
                                class="u-item"
                            >
                                <span class="u-id">ID:{{ o.ID }}</span>
                                <img
                                    class="u-pic"
                                    :title="'IconID:' + 10909"
                                    :src="10909 | iconURL"
                                />
                                <span class="u-name">{{ o.Name }}</span>
                                <span class="u-desc"
                                    >
                                    <span class="u-doodad-prop"><em>地图</em> {{ o.MapName }}</span>
                                    <span class="u-doodad-prop"><em>说明</em> {{ o.BarText }}</span>
                                    <span class="u-doodad-prop"><em>类型</em> {{ o.Kind }}</span>
                                    </span
                                >
                                <span class="u-remark">{{ o.Script }}</span>
                            </li>
                        </ul>
                        <el-alert
                            v-if="!doodad.length && done"
                            title="没有找到相关条目"
                            type="info"
                            show-icon
                        >
                        </el-alert>
                    </el-tab-pane>
                    <el-tab-pane label="物品" name="item">
                        <span slot="label">
                            <img
                                class="u-icon"
                                svg-inline
                                src="../../assets/img/logos/item.svg"
                            />
                            <b>物品</b>
                            <em class="u-count">{{ stat.item }}</em>
                        </span>
                        <p v-if="item.length && done" class="m-resource-count">
                            <i class="el-icon-s-data"></i> 共找到
                            <b>{{ item.length }}</b> 条记录
                        </p>
                        <ul class="m-resource-list" v-if="item.length">
                            <li v-for="(o, i) in item" :key="i" class="u-item">
                                <a
                                    class="u-link"
                                    :href="o.ItemID | itemURL"
                                    target="_blank"
                                >
                                    <span class="u-id">ID:{{ o.ItemID }}</span>
                                    <img
                                        class="u-pic"
                                        :title="'IconID:' + o.IconID"
                                        :src="o.IconID | iconURL"
                                    />
                                    <span class="u-name">{{ o.Name }}</span>
                                    <span class="u-desc">{{ o.Desc }}</span>
                                    <span class="u-remark">{{
                                        o.Requirement
                                    }}</span>
                                </a>
                            </li>
                        </ul>
                        <el-alert
                            v-if="!item.length && done"
                            title="没有找到相关条目"
                            type="info"
                            show-icon
                        >
                        </el-alert>
                    </el-tab-pane>
                </el-tabs>

                <div class="m-database-tip" v-show="isBlank">
                    ❤ 请指定搜索条件回车
                </div>
            </div>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import { loadResource, loadStat } from "../../service/database";
import { __iconPath, __ossRoot } from "@jx3box/jx3box-common/js/jx3box.json";
import User from "@jx3box/jx3box-common/js/user";
import { school } from "@jx3box/jx3box-data/data/xf/school.json";
export default {
    name: "Database",
    props: [],
    data: function() {
        return {
            type: "buff",
            query: "",
            npc_map: "",
            npc_level: "",
            doodad_level: "",
            strict: false,
            level: "",
            school: "",

            skill: [],
            advskill: [],
            buff: [],
            advbuff: [],
            npc: [],
            item: [],
            doodad: [],

            stat: {
                skill: 0,
                buff: 0,
                item: 0,
                npc: 0,
                doodad: 0,
            },
            done: false,
            loading: false,

            isSuperAuthor: User.isSuperAuthor(),
            schools: school,
        };
    },
    computed: {
        isBlank: function() {
            return !this.query && !this[this.type]["length"];
        },
    },
    methods: {
        getData: function(type) {
            if (!this.query) return;

            this.loading = true;
            this.done = false;
            let query = this.query;

            let params = {
                strict: ~~this.strict,
            };
            if (this.type == "npc") {
                if (this.npc_map) params.map = this.npc_map;
                if (this.npc_level) params.level = this.npc_level;
            }
            if (this.type == "skill" || this.type == "buff") {
                if (this.level) params.level = this.level;
            }
            if (this.type == "skill") {
                if (this.school || this.school == 0)
                    params.school = this.school;
            }
            if(this.type == 'doodad'){
                if(this.doodad_level) params.level = this.doodad_level
            }

            if (isNaN(query)) {
                loadResource(type, "name", query, params)
                    .then((data) => {
                        this[type] = this.transformData(data);
                    })
                    .finally(() => {
                        this.done = true;
                        this.loading = false;
                    });
            } else {
                query = parseInt(query);
                loadResource(type, "id", query, params)
                    .then((data) => {
                        this[type] = this.transformData(data);
                    })
                    .finally(() => {
                        this.done = true;
                        this.loading = false;
                    });
            }
        },
        search: function() {
            this.getData(this.type);
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
        toggleProps: function(o) {
            o.isopen = !o.isopen;
        },
        transformData: function(data) {
            data.forEach((item) => {
                item.isopen = false;
            });
            return data;
        },
    },
    filters: {
        filterRaw: function(str) {
            return str && str.replace(/\\n/g, "\n");
        },
        iconURL: function(id) {
            return __iconPath + "icon/" + id + ".png";
        },
        itemURL: function(id) {
            return "/item/#/view/" + id;
        },
    },
    created: function() {
        loadStat().then((data) => {
            this.stat = data;
        });
    },
    // watch : {
    //     query : function (newval){
    //         this.search()
    //     }  
    // },
    mounted: function() {
        let params = new URLSearchParams(location.search);
        this.type = params.get("type") || 'buff';
        this.query = params.get('query') || ''
        this.level = params.get('level') || ''
        this.search()
    },
    components: {
        Nav,
    },
};
</script>

<style lang="less">
@import "../../assets/css/database.less";
</style>
