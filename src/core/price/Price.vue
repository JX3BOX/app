<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb name="金价走势" slug="price" root="/app/price"><img slot="logo" svg-inline src="../../assets/img/price/price.svg" /></Breadcrumb>
        <LeftSidebar><Nav /></LeftSidebar>
        <Main :withoutRight="false">
            <div class="m-price" v-loading="currentGate === ''">
                <el-row :gutter="10">
                    <el-col :xs="24" :sm="7" :md="6" :xl="4">
                        <div class="server-wrapper">
                            <f-server-node
                                v-for="(server, key) in serverList"
                                :key="key"
                                :server="server"
                                :pinned="pinnedServerName === server.gate"
                                :focused="currentServer === server.serverName"
                                @toogle-server="clickServer"
                            />
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="17" :md="18" :xl="20">
                        <div class="board-wrapper">
                            <div class="title-wrapper">
                                <span class="title-server-name">{{ currentServer !== '' ? currentServer : '请选择一个服务器' }}</span>
                                <el-checkbox v-model="pinnedChecked" label="主页显示此服务器" border size="medium" @change="changePinnedServer"></el-checkbox>
                                <p class="title-origin">
                                    数据来源：
                                    <el-link type="primary" href="https://jx3.seasunwbl.com/" target="_blank">万宝楼</el-link>
                                </p>
                            </div>
                            <div class="hint">
                                <el-divider></el-divider>
                                <el-alert title="♥ 友情提示" type="info" :closable="false">
                                    <span>
                                        请选择正规平台！警惕交易陷阱！部分虚假交易平台会用低价骗取您购买，但充值后又提示该订单已被出售或无货，导致你的钱在一段时间无法及时提现，而且你提现时又要再次收取手续费。
                                        <span style="color: red; font-weight: bolder;">单价越高，表示1元能买到更多的金，也就说明金价越便宜喔！</span>
                                    </span>
                                </el-alert>
                            </div>
                            <el-row :gutter="20" class="card-wrapper card-wrapper-all-servers" v-if="currentGate === 'gate0000'">
                                <el-col :xs="24" :md="8">
                                    <el-card>
                                        <div class="card-price-summary">
                                            <div class="price-summary-title">当前最低</div>
                                            <div class="price-summary-price">{{ allServersPrice.lowest }} 金 / ￥</div>
                                            <div class="price-summary-server">{{ allServersPrice.lowest_server }}</div>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :xs="24" :md="8">
                                    <el-card>
                                        <div class="card-price-summary">
                                            <div class="price-summary-title">当前最高</div>
                                            <div class="price-summary-price">{{ allServersPrice.highest }} 金 / ￥</div>
                                            <div class="price-summary-server">{{ allServersPrice.highest_server }}</div>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :xs="24" :md="8">
                                    <el-card>
                                        <div class="card-price-summary">
                                            <div class="price-summary-title">当前均价</div>
                                            <div class="price-summary-price">{{ allServersPrice.median }} 金 / ￥</div>
                                            <div class="price-summary-server">全区全服</div>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20" class="card-wrapper card-wrapper-single-server" v-else-if="currentGate !== ''">
                                <el-col :xs="24" :md="8">
                                    <el-card>
                                        <div class="card-price-summary">
                                            <div class="price-summary-title">昨日统计 （金/￥）</div>
                                            <div class="price-summary-price">
                                                <div class="price-summary-detail">
                                                    <span class="price-summary-number">{{ singleServerPrice.yesterday_lowest }}</span>
                                                </div>
                                                <div class="price-summary-detail">
                                                    <span class="price-summary-number">{{ singleServerPrice.yesterday_average }}</span>
                                                </div>
                                                <div class="price-summary-detail">
                                                    <span class="price-summary-number">{{ singleServerPrice.yesterday_highest }}</span>
                                                </div>
                                            </div>
                                            <div class="price-summary-price">
                                                <div class="price-summary-detail"><span class="price-summary-mini">最低价</span></div>
                                                <div class="price-summary-detail"><span class="price-summary-mini">均价</span></div>
                                                <div class="price-summary-detail"><span class="price-summary-mini">最高价</span></div>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :xs="24" :md="8">
                                    <el-card>
                                        <div class="card-price-summary">
                                            <div class="price-summary-title">今日数据 （金/￥）</div>
                                            <div class="price-summary-price">
                                                <div class="price-summary-detail">
                                                    <span class="price-summary-number">{{ singleServerPrice.lowest }}</span>
                                                </div>
                                                <div class="price-summary-detail">
                                                    <span class="price-summary-number">{{ singleServerPrice.average }}</span>
                                                </div>
                                                <div class="price-summary-detail">
                                                    <span class="price-summary-number">{{ singleServerPrice.highest }}</span>
                                                </div>
                                            </div>
                                            <div class="price-summary-price">
                                                <div class="price-summary-detail"><span class="price-summary-mini">最低价</span></div>
                                                <div class="price-summary-detail"><span class="price-summary-mini">均价</span></div>
                                                <div class="price-summary-detail"><span class="price-summary-mini">最高价</span></div>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :xs="24" :md="8">
                                    <el-card>
                                        <div class="card-price-summary">
                                            <div class="price-summary-title">当前待售</div>
                                            <div class="price-summary-price">
                                                <div class="price-summary-detail">
                                                    <span
                                                        class="price-summary-number"
                                                        @mouseenter="singleServerDisplayTotalFull = true"
                                                        @mouseleave="singleServerDisplayTotalFull = false"
                                                    >
                                                        {{ singleServerTotalDisplay }}金
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="price-summary-price">
                                                <div class="price-summary-detail">
                                                    <span class="price-summary-mini">共{{ singleServerPrice.count }}笔</span>
                                                </div>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :xs="24" :md="24">
                                    <el-card>
                                        <div class="card-price-summary card-price-recommend">
                                            <div class="price-summary-title">建议成交价</div>
                                            <div class="price-summary-price">{{ singleServerPrice.recommend }} 金 / ￥100</div>
                                            <div class="price-summary-server">建议成交价为近三天平均成交价 在扣除手续费及提现费之前的价格</div>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                            <div class="chart-wrapper">
                                <div class="chart-div chart-scatter" v-show="currentGate === 'gate0000'"><v-chart :options="scatterOption" :autoresize="true" /></div>
                                <div class="chart-div chart-bar" v-show="currentGate === 'gate0000'"><v-chart :options="barOption" :autoresize="true" /></div>
                                <div class="chart-div chart-boxplot" v-show="currentGate !== '' && currentGate !== 'gate0000'">
                                    <v-chart :options="boxplotOption" :autoresize="true" />
                                </div>
                                <div class="chart-div chart-line" v-show="currentGate !== '' && currentGate !== 'gate0000'">
                                    <v-chart :options="lineOption" :autoresize="true" />
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <RightSidebar><div class="m-price-aside"></div><Extend/></RightSidebar>
            <Footer />
        </Main>
    </div>
</template>

<script>
import Info from '@/components/Info.vue';
import Nav from '@/components/Nav.vue';
import FServerNode from '../servers/FServerNode.vue';
import { axios } from '@/service/api.js';
import { JX3BOX, User } from '@jx3box/jx3box-common';
import { dataPath } from '@jx3box/jx3box-common/js/utils';
import { prepareBoxplotData } from 'echarts/extension/dataTool';
import Extend from '@/components/Extend.vue';
export default {
    name: 'Price',
    data: function() {
        return {
            searchServerName: '',
            isShowMainServer: true,
            serverList: {},
            pinnedServerName: 'gate0000',
            currentServer: '',
            currentGate: '',
            pinnedChecked: false,
            allPriceDataRaw: {},
            allServersPrice: {},
            singleServerPrice: {},
            singleServerDisplayTotalFull: false,
            scatterOption: {
                tooltip: {
                    show: true,
                    formatter: (param) => {
                        return `服务器：${param.name}<br />金价：${param.data[0]}金/￥`;
                    }
                },
                grid: {
                    show: true,
                    height: '80%',
                    left: 56,
                    right: 16
                },
                xAxis: {
                    scale: true
                },
                yAxis: {
                    type: 'category',
                    data: [],
                    axisLine: {
                        show: true
                    },
                    boundaryGap: false,
                    axisTick: {
                        show: false,
                        alignWithLabel: false,
                        inside: true
                    },
                    splitLine: {
                        show: true,
                        interval: 0
                    },
                    // axisTick: {
                    //     show: true,
                    //     alignWithLabel: true,
                    //     length: 2000,
                    //     inside: true,
                    //     lineStyle: {
                    //         color: '#ccc'
                    //     }
                    // },
                    // boundaryGap: true
                },
                series: [
                    {
                        symbolSize: 10,
                        data: [],
                        itemStyle: {
                            color: 'rgba(64,158,255, 0.5)'
                        },
                        type: 'scatter'
                    }
                ]
            },
            barOption: {
                tooltip: {
                    show: true,
                    formatter: '{b}<br />均价 {c}金/￥'
                },
                grid: {
                    height: '80%',
                    left: 38,
                    right: 8
                },
                xAxis: {
                    type: 'category',
                    data: [],
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        fontSize: 10
                    }
                },
                yAxis: {
                    type: 'value',
                    name: '均价',
                    nameLocation: 'end',
                    nameGap: 10,
                    scale: true
                },
                series: [
                    {
                        data: [],
                        type: 'bar',
                        itemStyle: {
                            color: 'rgb(64,158,255)'
                        }
                    }
                ]
            },
            boxplotOption: {
                tooltip: {
                    trigger: 'item',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: 12,
                    right: 16,
                    bottom: '20%'
                },
                yAxis: {
                    type: 'category',
                    data: [],
                    show: false
                },
                xAxis: {
                    type: 'value',
                    splitArea: {
                        show: false
                    },
                    scale: true,
                    nameTextStyle: {
                        // fontSize: 20
                    },
                    axisLabel: {
                        // fontSize: 20
                    }
                },
                series: [
                    {
                        name: 'boxplot',
                        type: 'boxplot',
                        data: [],
                        tooltip: {
                            formatter: (param) => {
                                return [
                                    '可靠最高价：' + param.data[5],
                                    '上四分位价：' + param.data[4],
                                    '较可靠均价：' + param.data[3],
                                    '下四分位价：' + param.data[2],
                                    '可靠最低价：' + param.data[1]
                                ].join('<br/>');
                            }
                        },
                        itemStyle: {
                            borderColor: 'rgb(255, 70, 131)'
                        }
                    },
                    {
                        name: 'outlier',
                        type: 'scatter',
                        data: [],
                        itemStyle: {
                            color: 'rgba(64,158,255, 0)'
                        },
                        tooltip: {
                            formatter: (param) => {
                                return '极端价：' + param.data[0];
                            }
                        }
                    },
                    {
                        symbolSize: 10,
                        data: [],
                        type: 'scatter',
                        encode: {
                            x: 1,
                            y: 2
                        },
                        silent: true,
                        itemStyle: {
                            color: 'rgba(64,158,255, 0.5)'
                        }
                    }
                ]
            },
            lineOption: {
                tooltip: {
                    trigger: 'item',
                    axisPointer: {
                        type: 'cross'
                    },
                    formatter: (param) => {
                        if (param.name === '均价') {
                            return `均价：${param.data.value}`
                        }
                        return `${param.name}<br />金价：${param.data}金/￥`
                    }
                },
                grid: {
                    bottom: 60,
                    top: 50,
                    left: 38,
                    right: 38
                },
                xAxis: {
                    type: 'category',
                    data: [],
                    axisTick: {
                        show: true,
                        alignWithLabel: true,
                    },
                    boundaryGap: ['10%','10%'],
                    inverse: true
                },
                yAxis: {
                    type: 'value',
                    scale: true,
                    axisPointer: {
                        label: {
                            precision: 0
                        }
                    }
                },
                dataZoom: [
                    {
                        start: 0,
                        end: 100,
                        bottom: 0
                    }
                ],
                series: [
                    {
                        type: 'line',
                        smooth: false,
                        symbol: 'circle',
                        symbolSize: 10,
                        sampling: 'average',
                        itemStyle: {
                            color: 'rgb(64,158,255)'
                        },
                        data: [], // data
                        markPoint: {
                            data: [{ type: 'max', name: '最大值' }, { type: 'min', name: '最小值' }],
                            itemStyle: {
                                color: 'rgb(255, 70, 131)'
                            },
                            symbolOffset: [0, '-10%']
                        },
                        markLine: {
                            data: [
                                {
                                    type: 'median',
                                    label: {
                                        position: 'start',
                                        formatter: '均价\n{c}'
                                    },
                                    name: '均价'
                                }
                            ],
                            lineStyle: {
                                color: 'rgb(255, 70, 131)',
                                width: 3,
                                type: 'dotted'
                            },
                            symbol: 'none',
                        }
                    },
                    {
                        type: 'line',
                        smooth: false,
                        symbol: 'none',
                        symbolSize: 0,
                        sampling: 'average',
                        itemStyle: {
                            color: 'rgb(64,158,255)'
                        },
                        data: [],
                        connectNulls: true,
                        lineStyle: {
                            type: 'dashed'
                        },
                        silent: true
                    }
                ]
            }
        };
    },
    computed: {
        singleServerTotalDisplay() {
            let total = this.singleServerPrice.total;
            if (total && parseInt(total) >= 10000 && !this.singleServerDisplayTotalFull) {
                return Math.floor(total / 10000) + '万';
            } else {
                return total;
            }
        }
    },
    methods: {
        async prepareMounted() {
            let tmpdict = {
                gate0000: {
                    serverName: '全区全服',
                    isPinned: false,
                    gate: 'gate0000'
                }
            };
            let serverUrl = dataPath('server/server.json');
            let getAllServers = axios(serverUrl, 'GET');

            let priceUrl = JX3BOX.__spider + 'jx3price';
            let getAllPriceData = axios(priceUrl, 'GET');

            let getUserServerSaved = null;
            if (this.uid) {
                let userUrl = JX3BOX.__server + 'user/meta';
                getUserServerSaved = axios(userUrl, 'GET', true, {}, {}, { uid: this.uid, key: 'jx3price' });
            } else {
                getUserServerSaved = this.getFromLocal();
            }
            let axiosSuccess = false;
            Promise.all([getAllServers, getUserServerSaved, getAllPriceData])
                .then(result => {
                    let serverData = result[0];
                    if (serverData && serverData.server_dict) {
                        for (let gate in serverData.server_dict) {
                            tmpdict[gate] = {
                                serverName: serverData.server_dict[gate],
                                isPinned: false,
                                gate: gate
                            };
                        }
                    }
                    this.serverList = tmpdict;

                    if (result[1].code == 10050) {
                        let serverValue = result[1].data.value;
                        if (serverValue) {
                            this.pinnedServerName = serverValue;
                        } else {
                            this.pinnedServerName = 'gate0000';
                        }
                    }

                    let priceData = result[2];
                    if ('gate0000' in priceData) {
                        this.allPriceDataRaw = priceData;
                    }
                    this.currentGate = this.pinnedServerName;
                    axiosSuccess = true;
                })
                .catch(e => {
                    switch (e.code) {
                        case -1:
                            // 网络异常
                            this.$message.error(e.msg);
                            break;
                        case 9999:
                            this.$message.error('登录失效, 请重新登录');
                            //1.注销
                            User.destroy();
                            //2.保存未提交成功的信息
                            //请保存至IndexedDB,勿占用localstorage
                            //3.跳转至登录页携带redirect
                            setTimeout(() => {
                                User.toLogin();
                            }, 2000);
                            //不指定url时则自动跳回当前所在页面
                            break;
                        default:
                            // 服务器错误
                            console.log(e);
                            this.$message.error(`[${e.code}]${e.msg}`);
                    }
                })
                .then(() => {
                    if (axiosSuccess) {
                        this.pinnedChecked = this.currentGate === this.pinnedServerName
                        this.parsePriceData();
                        this.showServer();
                    }
                });
        },
        changePinnedServer(value) {
            if (value) {
                this.pinnedServerName = this.currentGate
                this.setSavedServers()
            } else {
                this.pinnedServerName = null
                this.setSavedServers()
            }
        },
        median(_arr) {
            const mid = Math.floor(_arr.length / 2),
                nums = [..._arr].sort((a, b) => a - b);
            return _arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
        },
        calcRecommend() {
            let threeDaysSum = parseInt(this.singleServerPrice.average)
            let count = 1
            for (let price of this.singleServerPrice.trends.split(',')) {
                threeDaysSum += parseInt(price)
                count += 1
                if (count >= 3) {
                    break
                }
            }
            return Math.floor(threeDaysSum/count/0.9405*100)
        },
        clickServer(serverName, gate) {
            if (this.currentGate === gate) {
                return
            }
            this.currentGate = gate;
            this.pinnedChecked = this.currentGate === this.pinnedServerName
            this.showServer();
            this.parsePriceData();
        },
        showServer() {
            this.currentServer = this.serverList[this.currentGate].serverName;
        },
        loadAllServers() {
            // const API = JX3BOX.__spider + 'jx3servers'
            let url = 'https://spider.jx3box.com/jx3servers';
            axios(url, 'GET')
                .then(response => {
                    if (response.msg === 'success') {
                    }
                })
                .catch(e => {
                    console.log(e);
                })
                .then(() => {});
        },
        parsePriceData() {
            // 基于当前的服务器
            if (this.currentGate === 'gate0000') {
                this.parseAllServersData();
            } else {
                this.parseSingleServerData();
            }
        },
        parseAllServersData() {
            let data = this.allPriceDataRaw['gate0000'];
            // this.allServersPrice.median = this.median(data.average_arr.split(','))
            this.allServersPrice = {
                median: this.median(data.average_arr.split(',')),
                highest: data.highest,
                highest_server: this.serverList[data.highest_server].serverName,
                lowest: data.lowest,
                lowest_server: this.serverList[data.lowest_server].serverName
            };
            this.drawScatterChart();
            this.drawBarChart();
        },
        drawScatterChart() {
            if (this.scatterOption.series[0].data.length > 0) {
                // 如果已经加载过数据，就不重复加载
                return;
            }

            let serverArr = [];
            for (const [key, value] of Object.entries(this.serverList)) {
                serverArr.push(value.serverName);
            }
            serverArr.push('');
            this.scatterOption.yAxis.data = serverArr;

            let dataArr = [];
            for (const [gate, value] of Object.entries(this.allPriceDataRaw)) {
                if (gate === 'gate0000') {
                    continue;
                }
                value.current.split(',').forEach(value => {
                    dataArr.push([parseInt(value), this.serverList[gate].serverName]);
                });
            }
            this.scatterOption.series[0].data = dataArr;
        },
        drawBarChart() {
            if (this.barOption.series[0].data.length > 0) {
                // 如果已经加载过数据，就不重复加载
                return;
            }

            let serverArr = [];
            let dataArr = [];
            for (const [gate, value] of Object.entries(this.allPriceDataRaw)) {
                if (gate === 'gate0000') {
                    continue;
                }
                serverArr.push(this.serverList[gate].serverName);
                dataArr.push(parseInt(value.average));
            }
            this.barOption.xAxis.data = serverArr;
            this.barOption.series[0].data = dataArr;
        },
        parseSingleServerData() {
            this.singleServerPrice = this.allPriceDataRaw[this.currentGate];
            this.drawBoxplotChart();
            this.drawLineChart();
            this.singleServerPrice.recommend = this.calcRecommend()
        },
        drawBoxplotChart() {
            let currentRawArr = this.singleServerPrice.current.split(',');
            let data = prepareBoxplotData([currentRawArr], {
                layout: 'vertical'
            });
            this.boxplotOption.yAxis.data = data.axisData;
            this.boxplotOption.series[0].data = data.boxData;
            this.boxplotOption.series[1].data = data.outliers;
            let scatterData = currentRawArr.map(value => {
                return [1, parseInt(value)];
            });
            this.boxplotOption.series[2].data = scatterData;
        },
        drawLineChart() {
            let hasNullValue = false
            let trendsRawArr = this.singleServerPrice.trends.split(',')
            let trendsArr = trendsRawArr.map((value) => {
                if (value == '0') {
                    hasNullValue = true
                    return null
                }
                return parseInt(value)
            })
            this.lineOption.series[0].data = trendsArr
            if (hasNullValue) {
                this.lineOption.series[1].data = trendsArr
            } else {
                this.lineOption.series[1].data = []
            }  
            this.lineOption.xAxis.data = this.getThirtyDaysArr()
        },
        getThirtyDaysArr() {
            let date = new Date()
            let dateArr = []
            for (let delta = 1; delta <= 30; ++delta) {
                date = new Date()
                date.setDate(date.getDate()-delta)
                dateArr.push(`${date.getMonth()+1}-${date.getDate()}`)
            }
            return dateArr
        },
        getUserId() {
            if (User.isLogin()) {
                this.uid = User.getInfo().uid;
            }
        },
        // getSavedServers() {
        //     // 获取用户储存的服务器列表
        //     if (this.uid) {
        //         // 从服务器读取
        //         let url = JX3BOX.__server + 'user/meta';
        //         axios(url, 'GET', true, {}, {}, { uid: this.uid, key: 'jx3price' })
        //             .then(response => {
        //                 if (response.code == 10050) {
        //                     let serverValue = response.data.value;
        //                     if (serverValue) {
        //                         this.pinnedServerName = serverValue;
        //                     } else {
        //                         this.pinnedServerName = [];
        //                     }
        //                 }
        //             })
        //             .catch(e => {
        //                 switch (e.code) {
        //                     case -1:
        //                         // 网络异常
        //                         this.$message.error(e.msg);
        //                         this.getFromLocal();
        //                         break;
        //                     case 9999:
        //                         this.$message.error('登录失效, 请重新登录');
        //                         //1.注销
        //                         User.destroy();
        //                         //2.保存未提交成功的信息
        //                         //请保存至IndexedDB,勿占用localstorage
        //                         //3.跳转至登录页携带redirect
        //                         setTimeout(() => {
        //                             User.toLogin();
        //                         }, 2000);
        //                         //不指定url时则自动跳回当前所在页面
        //                         break;
        //                     default:
        //                         // 服务器错误
        //                         this.$message.error(`[${e.code}]${e.msg}`);
        //                         this.getFromLocal();
        //                 }
        //             })
        //             .then(() => {});
        //     } else {
        //         // 本地读取
        //         this.getFromLocal();
        //     }
        // },
        getFromLocal() {
            return new Promise((resolve, reject) => {
                if (window.localStorage) {
                    let current = localStorage.getItem('jx3_price');
                    if (current && current !== 'null') {
                        resolve({ code: 10050, data: { value: current } });
                    }
                }
                resolve({ code: 10050, data: { value: 'gate0000' } });
            });
        },
        setSavedServers() {
            if (this.uid) {
                // 保存到服务器
                let url = JX3BOX.__server + 'user/meta';
                axios(url, 'POST', true, {
                    uid: this.uid,
                    key: 'jx3price',
                    value: this.pinnedServerName
                })
                    .then(response => {
                        if (response.code == 10052) {
                            // 成功
                        }
                    })
                    .catch(e => {
                        switch (e.code) {
                            case -1:
                                // 网络异常
                                this.$message.error(e.msg);
                                this.setToLocal();
                                break;
                            case 9999:
                                this.$message.error('登录失效, 请重新登录');
                                //1.注销
                                User.destroy();
                                //2.保存未提交成功的信息
                                //请保存至IndexedDB,勿占用localstorage
                                //3.跳转至登录页携带redirect
                                setTimeout(() => {
                                    User.toLogin();
                                }, 2000);
                                //不指定url时则自动跳回当前所在页面
                                break;
                            default:
                                // 服务器错误
                                this.$message.error(`[${e.code}]${e.msg}`);
                                this.setToLocal();
                        }
                    })
                    .then(() => {});
            } else {
                // 储存在本地
                this.setToLocal();
            }
        },
        setToLocal() {
            if (window.localStorage) {
                let names = this.pinnedServerName;
                localStorage.setItem('jx3_price', names);
            }
        }
    },
    filters: {},
    mounted: function() {
        this.getUserId();
        this.prepareMounted();
        // this.loadPriceData();
        // this.getUserId();
        // this.getSavedServers();
        // this.loadAllServers();
    },
    components: {
        Nav,
        FServerNode,
        Extend
    }
};
</script>

<style lang="less" scoped>
.m-price {
    padding: 10px;
}
.m-price::after {
    content: '';
    display: table;
    clear: both;
}
.server-wrapper {
    margin-top: 60px;
    margin-left: 10px;
    background: rgba(239, 239, 239, 1);
    border-radius: 8px;
    border: 1px solid rgba(222, 222, 222, 1);
    padding: 20px 10px;
    min-height: 500px;
}
.server-node {
    margin-bottom: 0;
}
.server-wrapper::after {
    content: '';
    display: table;
    clear: both;
}
/deep/.server-button:hover::after {
    visibility: hidden;
    filter: none;
}
/deep/.server-pinned:hover::after {
    filter: url(../../assets/img/servers/pin.svg#change);
    opacity: 1;
    visibility: visible;
}

.title-wrapper {
    position: relative;
    .title-server-name {
        float: left;
        font-size: 24px;
        line-height: 46px;
        font-weight: 500;
    }
    .el-checkbox {
        float: left;
        margin-top: 6px;
        margin-left: 20px;
    }
    .title-origin {
        float: right;
        .el-link {
            font-size: 1em;
            padding-bottom: 5px;
        }
        margin-bottom: 0;
    }
}
.title-wrapper::after {
    content: '';
    display: table;
    clear: both;
}

.el-divider--horizontal {
    margin: 8px 0;
}
.card-wrapper {
    margin-top: 20px;
    /deep/.el-card__body {
        padding: 0;
    }
    .card-price-summary {
        height: 112px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .price-summary-title,
    .price-summary-server {
        font-size: 14px;
        color: #91949a;
    }
    .price-summary-price {
        font-size: 18px;
        color: #303133;
        font-weight: bolder;
        width: 100%;
        display: flex;
        justify-content: space-around;
        .price-summary-detail {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            align-content: center;
        }
    }
    .price-summary-mini {
        font-size: 12px;
        color: #999999;
    }
    .el-col-md-24 {
        margin-top: 20px;
    }
}
// .card-wrapper-single-server.card-wrapper {
//     .card-price-summary {
//         height: 150px;
//     }
//     .price-summary-price {
//         height: 40%;
//     }
// }
.chart-wrapper {
    margin-top: 20px;
}
.chart-div {
    height: 500px;
    width: 100%;
}
.chart-boxplot {
    height: 150px;
}
.echarts {
    width: 100%;
    height: 100%;
}
@media only screen and (max-width: 991px) {
    .card-wrapper > .el-col-24 {
        margin-top: 10px;
    }
}
@media only screen and (max-width: 767px) {
    .el-col-xs-24 > .server-wrapper {
        margin-left: auto;
        margin-top: 10px;
    }
    .el-col-xs-24 > .board-wrapper {
        margin-top: 30px;
    }
    .card-wrapper {
        margin-top: 0;
    }
}
</style>
