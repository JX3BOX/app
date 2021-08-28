<template>
    <div>
        <Header></Header>
        <Breadcrumb
            name="加速阈值"
            slug="haste"
            root="/app/haste"
            :feedbackEnable="true"
            :crumbEnable="true"
        >
            <img
                slot="logo"
                svg-inline
                src="../../assets/img/logos/speed.svg"
            />
            <div class="m-info"></div>
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-haste">
                <el-row :gutter="24">
                    <el-col :lg="8" :md="12" :sm="24">
                        <el-card header="技能设定">
                            <el-form label-position="top">
                                <el-form-item>
                                    <div slot="label">
                                        <span>技能时间(秒)</span>
                                        <el-tooltip
                                            content="表示技能正读条时间，或持续性伤害技能的每跳时间，或引导读条的每跳时间"
                                            placement="top"
                                        >
                                            <i class="el-icon-info m-info-icon"></i>
                                        </el-tooltip>
                                    </div>
                                    <el-input-number
                                        v-model="hasteInfo.skillTime"
                                        :min="0.5"
                                        :step="0.1"
                                        step-strictly
                                        controls-position="right"
                                        style="width: 100%"
                                        @change="handleSkillTimeChange"
                                    ></el-input-number>
                                </el-form-item>
                                <el-form-item>
                                    <div slot="label">
                                        <span>跳数</span>
                                        <el-tooltip
                                            content="表示相应技能跳数，正读条为 1 跳，引导读条为造成伤害的次数"
                                            placement="top"
                                        >
                                            <i class="el-icon-info m-info-icon"></i>
                                        </el-tooltip>
                                    </div>
                                    <el-input-number
                                        v-model="hasteInfo.hitTimes"
                                        :min="1"
                                        :step="1"
                                        step-strictly
                                        controls-position="right"
                                        style="width: 100%"
                                        @change="handleHitTimesChange"
                                    ></el-input-number>
                                </el-form-item>
                            </el-form>
                        </el-card>
                        <el-card header="额外加速奇穴" class="m-extra-box">
                            <el-form label-position="top">
                                <el-form-item label="选择可以额外提供加速的奇穴">
                                    <!-- <p>选择可以额外提供加速的奇穴</p> -->
                                    <el-radio-group v-model="hasteInfo.extra">
                                        <el-radio
                                            v-for="item in extraHasteList"
                                            :key="item.name"
                                            :label="item.value"
                                        >{{ item.name }}</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-form>
                        </el-card>
                    </el-col>
                    <el-col :lg="16" :md="12" :sm="24">
                        <el-card header="计算结果">
                            <el-table :data="tableData">
                                <template v-for="header in tableHeader">
                                    <el-table-column
                                        :key="header.value"
                                        :label="header.label"
                                        :prop="header.value"
                                        :align="header.align || 'left'"
                                    ></el-table-column>
                                </template>
                            </el-table>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import extraHasteList from './extraHaste';
export default {
    name: 'haste',
    data() {
        return {

            hasteInfo: {
                skillTime: 1.5,
                hitTimes: 1,
                extra: 0,
            },

            extraHasteList,
            // result
            tableHeader: [
                {
                    label: '读条时间(秒)',
                    value: 'duration'
                },
                {
                    label: '破招伤害时间(秒)',
                    value: 'surplus'
                },
                {
                    label: '所需加速率',
                    value: 'percentage'
                },
                {
                    label: '所需加速等级',
                    value: 'level',
                    align: 'right'
                },
            ],
            tableData: []
        }
    },
    watch: {
        'hasteInfo': {
            deep: true,
            immediate: true,
            handler() {
                this.renderHaste()
            }
        }
    },
    mounted() {
        this.renderHaste()
    },
    methods: {
        handleSkillTimeChange: function (currentVal, OldVal){
            if (!currentVal) {
                this.skillTime = 0.5
            }
        },
        handleHitTimesChange: function (currentVal, OldVal){
            if (!currentVal) {
                this.hitTimes = 1
            }
        },
        renderHaste: function (){
            const results = [];
            const { skillTime, hitTimes, extra } = this.hasteInfo;

            const skillFrame = Math.ceil(skillTime / 0.0625);
            const surplusFrame = Math.ceil(2 / 0.0625);

            let hastePercent = 0;
            let hastePercentLimit = 0;
            let lastTime = (Number(skillTime) + 0.1).toFixed(2);
            let lastSurplusTime = '2.10';
            const hasteCof = 438.5625;

            for (let i = 0; hastePercentLimit < 25; i += 1) {
                
                const baseHaste = (i / hasteCof) * 10.24;
                const totalHaste = Math.floor(baseHaste) + Math.floor(extra);

                const nowFrame = Math.floor((skillFrame * 1024) / (totalHaste + 1024));
                const surplusNowFrame = Math.floor((surplusFrame * 1024) / (totalHaste + 1024));

                hastePercent = i / hasteCof;
                hastePercentLimit = i / hasteCof + extra / 10.24;

                const nowTime = (nowFrame * 0.0625 * Number(hitTimes)).toFixed(2);
                const nowSurplusTime = (surplusNowFrame * 0.0625 * 5).toFixed(2);

                const result = {
                    duration: '',
                    percentage: hastePercent.toFixed(2),
                    surplus: '',
                    level: i,
                };

                let shouldAdd = false;
                if (nowTime !== lastTime) {
                    lastTime = nowTime;
                    result.duration = nowTime;
                    shouldAdd = true;
                }

                if (nowSurplusTime !== lastSurplusTime) {
                    lastSurplusTime = nowSurplusTime;
                    result.surplus = nowSurplusTime;
                    shouldAdd = true;
                }

                if (shouldAdd) {
                    results.push(result);
                }
            }

            this.tableData = results;
        }
    }
}
</script>

<style lang="less">
@import '../../assets/css/haste.less';
</style>