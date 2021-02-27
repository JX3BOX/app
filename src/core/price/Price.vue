<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="金价走势"
            slug="price"
            root="/app/price"
            :feedbackEnable="true"
            :crumbEnable="true"
        >
            <img
                slot="logo"
                svg-inline
                src="../../assets/img/logos/price.svg"
            />
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-price">
                <!-- 标题 -->
                <h1 class="m-price-title">剑三全区服金价走势</h1>

                <!-- 内容 -->
                <div class="m-price-box" v-loading="currentGate === ''">
                    <div class="m-price-board board-wrapper">
                        <!-- 头部 -->
                        <div class="m-price-header title-wrapper">
                            <span class="title-server-name">
                                {{
                                    currentServer !== ""
                                        ? currentServer
                                        : "请选择一个服务器"
                                }}
                            </span>
                            <p class="title-origin">
                                数据来源：
                                <el-link
                                    type="primary"
                                    href="https://jx3.seasunwbl.com/"
                                    target="_blank"
                                    >万宝楼</el-link
                                >
                            </p>
                        </div>

                        <!-- 服务器导航 -->
                        <div class="m-price-nav">
                            <el-tabs
                                tab-position="top"
                                v-model="currentGate"
                                @tab-click="changeServer"
                            >
                                <el-tab-pane
                                    v-for="(server, key) in serverList"
                                    :key="key"
                                    :label="server.serverName"
                                    :name="server.serverName"
                                ></el-tab-pane>
                            </el-tabs>
                        </div>

                        <!-- 警告 -->
                        <div class="m-price-notice hint">
                            ♥
                            请选择正规平台！警惕交易陷阱！部分虚假交易平台会用低价骗取您购买，但充值后又提示该订单已被出售或无货，导致你的钱在一段时间无法及时提现，而且你提现时又要再次收取手续费。
                            <span style="color: #c00; font-weight: bold"
                                >单价越高，表示1元能买到更多的金，也就说明金价越便宜喔！</span
                            >
                        </div>

                        <!-- 概览 -->
                        <div
                            class="m-price-overview"
                            v-if="singleServerPrice.today"
                        >
                            <el-row
                                :gutter="20"
                                class="card-wrapper card-wrapper-single-server"
                            >
                                <el-col :xs="24" :md="8">
                                    <el-card>
                                        <div
                                            class="card-price-summary u-lowest"
                                        >
                                            <div class="price-summary-title">
                                                昨日统计 （金/￥）
                                            </div>
                                            <div class="price-summary-price">
                                                <div
                                                    class="price-summary-detail"
                                                >
                                                    <span
                                                        class="price-summary-number"
                                                    >
                                                        {{
                                                            singleServerPrice
                                                                .yesterday[
                                                                "official"
                                                            ]
                                                        }}
                                                    </span>
                                                </div>
                                                <div
                                                    class="price-summary-detail"
                                                >
                                                    <span
                                                        class="price-summary-number"
                                                    >
                                                        {{
                                                            singleServerPrice
                                                                .yesterday[
                                                                "5173"
                                                            ]
                                                        }}
                                                    </span>
                                                </div>
                                                <div
                                                    class="price-summary-detail"
                                                >
                                                    <span
                                                        class="price-summary-number"
                                                    >
                                                        {{
                                                            singleServerPrice
                                                                .yesterday[
                                                                "post"
                                                            ]
                                                        }}
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="price-summary-price">
                                                <div
                                                    class="price-summary-detail"
                                                >
                                                    <span
                                                        class="price-summary-mini"
                                                        >万宝楼</span
                                                    >
                                                </div>
                                                <div
                                                    class="price-summary-detail"
                                                >
                                                    <span
                                                        class="price-summary-mini"
                                                        >5173</span
                                                    >
                                                </div>
                                                <div
                                                    class="price-summary-detail"
                                                >
                                                    <span
                                                        class="price-summary-mini"
                                                        >贴吧</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :xs="24" :md="8">
                                    <el-card>
                                        <div
                                            class="card-price-summary u-highest"
                                        >
                                            <div class="price-summary-title">
                                                今日数据 （金/￥）
                                            </div>
                                            <div class="price-summary-price">
                                                <div
                                                    class="price-summary-detail"
                                                >
                                                    <span
                                                        class="price-summary-number"
                                                    >
                                                        {{
                                                            mean(
                                                                singleServerPrice
                                                                    .today[
                                                                    "official"
                                                                ]
                                                            )
                                                        }}
                                                    </span>
                                                </div>
                                                <div
                                                    class="price-summary-detail"
                                                >
                                                    <span
                                                        class="price-summary-number"
                                                    >
                                                        {{
                                                            mean(
                                                                singleServerPrice
                                                                    .today[
                                                                    "5173"
                                                                ]
                                                            )
                                                        }}
                                                    </span>
                                                </div>
                                                <div
                                                    class="price-summary-detail"
                                                >
                                                    <span
                                                        class="price-summary-number"
                                                    >
                                                        {{
                                                            mean(
                                                                singleServerPrice
                                                                    .today[
                                                                    "post"
                                                                ]
                                                            )
                                                        }}
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="price-summary-price">
                                                <div
                                                    class="price-summary-detail"
                                                >
                                                    <span
                                                        class="price-summary-mini"
                                                        >万宝楼</span
                                                    >
                                                </div>
                                                <div
                                                    class="price-summary-detail"
                                                >
                                                    <span
                                                        class="price-summary-mini"
                                                        >5173</span
                                                    >
                                                </div>
                                                <div
                                                    class="price-summary-detail"
                                                >
                                                    <span
                                                        class="price-summary-mini"
                                                        >贴吧</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :xs="24" :md="8">
                                    <el-card>
                                        <div
                                            class="card-price-summary card-price-recommend"
                                        >
                                            <div class="price-summary-title">
                                                建议成交价
                                            </div>
                                            <div class="price-summary-price">
                                                <b>
                                                    {{
                                                        singleServerPrice.recommend
                                                    }}
                                                </b>
                                                金 / ￥100
                                            </div>
                                            <div class="price-summary-server">
                                                近三天平均成交价
                                                在扣除手续费及提现费之前的价格
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </div>

                        <!-- 图表 -->
                        <div class="m-price-chart chart-wrapper">
                            <!-- <div
                                class="chart-div chart-boxplot"
                                v-show="
                                    currentGate !== ''
                                "
                            >
                                <v-chart
                                    :options="boxplotOption"
                                    :autoresize="true"
                                />
              </div>-->
                            <div
                                class="chart-div chart-line"
                                v-show="currentGate !== ''"
                            >
                                <v-chart
                                    :options="lineOption"
                                    :autoresize="true"
                                    @legendselectchanged="
                                        onLineChartLegendselectchanged
                                    "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <RightSidebar
                ><div class="m-price-aside"></div>
                <Extend
      /></RightSidebar>-->
            <Footer />
        </Main>
    </div>
</template>

<script>
// import Info from "@/components/Info.vue";
import md5 from "js-md5";
import Nav from "@/components/Nav.vue";
// import FServerNode from "../servers/FServerNode.vue";
import { axios, realUrl } from "@/service/api.js";
import { JX3BOX } from "@jx3box/jx3box-common";
import User from "@jx3box/jx3box-common/js/user";
import { prepareBoxplotData } from "echarts/extension/dataTool";
// import Extend from "@/components/Extend.vue";
import serverData from "@jx3box/jx3box-data/data/server/server.json";
export default {
    name: "Price",
    data: function() {
        return {
            searchServerName: "",
            isShowMainServer: true,
            serverList: {},
            pinnedServerName: "gate0000",
            currentServer: "",
            currentGate: "",
            // pinnedChecked: false,
            allPriceDataRaw: {},
            allServersPrice: {},
            singleServerPrice: {},
            singleServerDisplayTotalFull: false,
            scatterOption: {
                tooltip: {
                    show: true,
                    formatter: (param) => {
                        return `服务器：${param.name}<br />金价：${param.data[0]}金/￥`;
                    },
                },
                grid: {
                    show: true,
                    height: "80%",
                    left: 56,
                    right: 16,
                },
                xAxis: {
                    scale: true,
                },
                yAxis: {
                    type: "category",
                    data: [],
                    axisLine: {
                        show: true,
                    },
                    boundaryGap: false,
                    axisTick: {
                        show: false,
                        alignWithLabel: false,
                        inside: true,
                    },
                    splitLine: {
                        show: true,
                        interval: 0,
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
                            color: "rgba(64,158,255, 0.5)",
                        },
                        type: "scatter",
                    },
                ],
            },
            barOption: {
                tooltip: {
                    show: true,
                    formatter: "{b}<br />均价 {c}金/￥",
                },
                grid: {
                    height: "80%",
                    left: 38,
                    right: 8,
                },
                xAxis: {
                    type: "category",
                    data: [],
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        fontSize: 10,
                    },
                },
                yAxis: {
                    type: "value",
                    name: "均价",
                    nameLocation: "end",
                    nameGap: 10,
                    scale: true,
                },
                series: [
                    {
                        data: [],
                        type: "bar",
                        itemStyle: {
                            color: "rgb(64,158,255)",
                        },
                    },
                ],
            },
            boxplotOption: {
                tooltip: {
                    trigger: "item",
                    axisPointer: {
                        type: "shadow",
                    },
                },
                grid: {
                    left: 12,
                    right: 16,
                    bottom: "20%",
                },
                yAxis: {
                    type: "category",
                    data: [],
                    show: false,
                },
                xAxis: {
                    type: "value",
                    splitArea: {
                        show: false,
                    },
                    scale: true,
                    nameTextStyle: {
                        // fontSize: 20
                    },
                    axisLabel: {
                        // fontSize: 20
                    },
                },
                series: [
                    {
                        name: "boxplot",
                        type: "boxplot",
                        data: [],
                        tooltip: {
                            formatter: (param) => {
                                return [
                                    "可靠最高价：" + param.data[5],
                                    "上四分位价：" + param.data[4],
                                    "较可靠均价：" + param.data[3],
                                    "下四分位价：" + param.data[2],
                                    "可靠最低价：" + param.data[1],
                                ].join("<br/>");
                            },
                        },
                        itemStyle: {
                            borderColor: "rgb(255, 70, 131)",
                        },
                    },
                    {
                        name: "outlier",
                        type: "scatter",
                        data: [],
                        itemStyle: {
                            color: "rgba(64,158,255, 0)",
                        },
                        tooltip: {
                            formatter: (param) => {
                                return "极端价：" + param.data[0];
                            },
                        },
                    },
                    {
                        symbolSize: 10,
                        data: [],
                        type: "scatter",
                        encode: {
                            x: 1,
                            y: 2,
                        },
                        silent: true,
                        itemStyle: {
                            color: "rgba(64,158,255, 0.5)",
                        },
                    },
                ],
            },
            lineOption: {
                legend: {
                    show: true,
                    top: 0,
                },
                tooltip: {
                    trigger: "item",
                    axisPointer: {
                        type: "cross",
                    },
                    formatter: (param) => {
                        // if (param.name === "均价") {
                        //     return `均价：${param.data.value}金/￥`;
                        // }
                        // return `${param.name}<br />金价：${param.data}金/￥`;
                        if (!param.seriesName) {
                            // 给标记点和标记线用
                            return `${param.name}<br />${param.value}金/￥`;
                        }
                        return `[${param.seriesName}]<br />${param.name}<br />${param.value}金/￥`;
                    },
                },
                grid: {
                    bottom: 60,
                    top: 50,
                    left: 38,
                    right: 50,
                },
                xAxis: {
                    type: "category",
                    data: [],
                    axisTick: {
                        show: true,
                        alignWithLabel: true,
                    },
                    boundaryGap: ["10%", "10%"],
                    inverse: true,
                },
                yAxis: {
                    type: "value",
                    scale: true,
                    axisPointer: {
                        label: {
                            precision: 0,
                        },
                    },
                },
                dataZoom: [
                    {
                        start: 0,
                        end: 100,
                        bottom: 0,
                    },
                ],
                series: [
                    // 5173
                    {
                        type: "line",
                        name: "5173",
                        animationDuration: 300,
                        smooth: false,
                        symbol: "circle",
                        symbolSize: 10,
                        sampling: "average",
                        itemStyle: {
                            color: "rgb(255, 70, 131)",
                        },
                        data: [], // data
                        markPoint: {
                            data: [
                                { type: "max", name: "[5173]最大值" },
                                { type: "min", name: "[5173]最小值" },
                            ],
                            itemStyle: {
                                color: "rgb(255, 70, 131)",
                            },
                            symbolOffset: [0, "-10%"],
                        },
                        markLine: {
                            data: [
                                {
                                    type: "median",
                                    label: {
                                        position: "start",
                                        formatter: "[5173]\n均价\n{c}",
                                    },
                                    name: "[5173]均价",
                                },
                            ],
                            lineStyle: {
                                color: "rgb(255, 70, 131)",
                                width: 3,
                                type: "dotted",
                            },
                            symbol: "none",
                        },
                    },
                    {
                        type: "line",
                        animationDuration: 300,
                        smooth: false,
                        symbol: "none",
                        symbolSize: 0,
                        sampling: "average",
                        itemStyle: {
                            color: "rgb(255, 70, 131)",
                        },
                        data: [],
                        connectNulls: true,
                        lineStyle: {
                            type: "dashed",
                        },
                        silent: true,
                    },
                    // 官方
                    {
                        type: "line",
                        name: "万宝楼",
                        animationDuration: 300,
                        smooth: false,
                        symbol: "circle",
                        symbolSize: 10,
                        sampling: "average",
                        itemStyle: {
                            color: "rgb(64,158,255)",
                        },
                        data: [], // data
                        markPoint: {
                            data: [
                                { type: "max", name: "[万宝楼]最大值" },
                                { type: "min", name: "[万宝楼]最小值" },
                            ],
                            itemStyle: {
                                color: "rgb(64,158,255)",
                            },
                            symbolOffset: [0, "-10%"],
                        },
                        markLine: {
                            data: [
                                {
                                    type: "median",
                                    label: {
                                        position: "start",
                                        formatter: "[万宝楼]\n均价\n{c}",
                                    },
                                    name: "[万宝楼]均价",
                                },
                            ],
                            lineStyle: {
                                color: "rgb(64,158,255)",
                                width: 3,
                                type: "dotted",
                            },
                            symbol: "none",
                        },
                    },
                    {
                        type: "line",
                        animationDuration: 300,
                        smooth: false,
                        symbol: "none",
                        symbolSize: 0,
                        sampling: "average",
                        itemStyle: {
                            color: "rgb(64,158,255)",
                        },
                        data: [],
                        connectNulls: true,
                        lineStyle: {
                            type: "dashed",
                        },
                        silent: true,
                    },
                    // 贴吧
                    {
                        type: "line",
                        name: "贴吧",
                        animationDuration: 300,
                        smooth: false,
                        symbol: "circle",
                        symbolSize: 10,
                        sampling: "average",
                        itemStyle: {
                            color: "#22c3aa",
                        },
                        data: [], // data
                        markPoint: {
                            data: [
                                { type: "max", name: "[贴吧]最大值" },
                                { type: "min", name: "[贴吧]最小值" },
                            ],
                            itemStyle: {
                                color: "#22c3aa",
                            },
                            symbolOffset: [0, "-10%"],
                        },
                        markLine: {
                            data: [
                                {
                                    type: "median",
                                    label: {
                                        position: "start",
                                        formatter: "[贴吧]\n均价\n{c}",
                                    },
                                    name: "[贴吧]均价",
                                },
                            ],
                            lineStyle: {
                                color: "#22c3aa",
                                width: 3,
                                type: "dotted",
                            },
                            symbol: "none",
                        },
                    },
                    {
                        type: "line",
                        animationDuration: 300,
                        smooth: false,
                        symbol: "none",
                        symbolSize: 0,
                        sampling: "average",
                        itemStyle: {
                            color: "#22c3aa",
                        },
                        data: [],
                        connectNulls: true,
                        lineStyle: {
                            type: "dashed",
                        },
                        silent: true,
                    },
                ],
            },
        };
    },
    computed: {},
    methods: {
        async prepareMounted() {
            let tmpdict = {};
            // let serverUrl = dataPath('server/server.json');
            // let getAllServers = axios(serverUrl, 'GET');

            let priceUrl = "https://box.arkwish.com/api/gold";
            // 准备参数
            let ts = Math.round(new Date().getTime() / 1000);
            let access_token = md5(`${ts}secret`);
            let params = {
                ts: ts,
                access_token: access_token,
            };
            let getAllPriceData = axios(priceUrl, "GET", false, {}, {}, params);

            let getUserServerSaved = null;
            if (this.uid) {
                let userUrl = realUrl(JX3BOX.__server, "user/me");
                getUserServerSaved = axios(userUrl, "GET", true);
            } else {
                getUserServerSaved = this.getFromLocal();
            }
            // 默认蝶恋花
            let serverName = "蝶恋花";
            let axiosSuccess = false;
            Promise.all([getUserServerSaved, getAllPriceData])
                .then((result) => {
                    if (serverData && serverData.server_dict) {
                        for (let gate in serverData.server_dict) {
                            tmpdict[gate] = {
                                serverName: serverData.server_dict[gate],
                                isPinned: false,
                                gate: gate,
                            };
                        }
                    }
                    this.serverList = tmpdict;

                    if (result[0].code === 0) {
                        serverName = result[0].data.jx3_server;
                        // // 这个时候serverValue是区服的名字 比如”蝶恋花“
                        // let serverValue = "gate0126"; // 默认
                        // for (const [gate, value] of Object.entries(
                        //     serverData.server_dict
                        // )) {
                        //     if (value === serverName) {
                        //         serverValue = gate;
                        //         break;
                        //     }
                        // }
                        // // this.pinnedServerName = serverValue;
                        // this.pinnedServerName = serverName;
                    }

                    let priceData = result[1];
                    if (priceData.code !== undefined && priceData.code === 0) {
                        this.allPriceDataRaw = priceData.data;
                    }
                    this.currentGate = serverName;
                    axiosSuccess = true;
                })
                .catch((e) => {
                    switch (e.code) {
                        case -1:
                            // 网络异常
                            this.$message.error(e.msg);
                            break;
                        case 9999:
                            this.$message.error("登录失效, 请重新登录");
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
                        // this.pinnedChecked = this.currentGate === this.pinnedServerName;
                        this.parsePriceData();
                        this.showServer();
                    }
                });
        },
        median(_arr) {
            const mid = Math.floor(_arr.length / 2),
                nums = [..._arr].sort((a, b) => a - b);
            return _arr.length % 2 !== 0
                ? nums[mid]
                : (nums[mid - 1] + nums[mid]) / 2;
        },
        mean(_arr) {
            let sum = 0;
            let valid_count = 0;
            for (let index = 0; index < _arr.length; index++) {
                const element = _arr[index];
                if (!element || element == 0) {
                    continue;
                } else {
                    sum += element;
                    ++valid_count;
                }
            }
            return valid_count === 0
                ? "无数据"
                : (Math.floor((sum / valid_count) * 100) / 100).toFixed(2);
        },
        calcRecommend() {
            let threeDaysSum = 0;
            for (let count = 0; count < 3; ++count) {
                let singleDay = this.singleServerPrice.trend[count];
                let maxPrice = Math.max(
                    singleDay["5173"],
                    singleDay["post"],
                    singleDay["official"] / 0.9405
                );
                threeDaysSum += maxPrice;
            }
            return Math.floor((threeDaysSum / 3) * 100);
        },
        clickServer(serverName, gate) {
            if (this.currentGate === gate) {
                return;
            }
            this.currentGate = gate;
            // this.pinnedChecked = this.currentGate === this.pinnedServerName;
            this.showServer();
            this.parsePriceData();
        },
        changeServer: function(tab, event) {
            // this.currentGate = gate;
            // this.pinnedChecked = this.currentGate === this.pinnedServerName;
            this.showServer();
            this.parsePriceData();
        },
        showServer() {
            this.currentServer = this.currentGate;
        },
        loadAllServers() {
            let url = JX3BOX.__spider + "jx3servers";
            axios(url, "GET")
                .then((response) => {
                    if (response.msg === "success") {
                    }
                })
                .catch((e) => {
                    console.log(e);
                })
                .then(() => {});
        },
        parsePriceData() {
            // 基于当前的服务器
            // if (this.currentGate === "gate0000") {
            //     this.parseAllServersData();
            // } else {
            //     this.parseSingleServerData();
            // }
            this.parseSingleServerData();
        },
        parseAllServersData() {
            let data = this.allPriceDataRaw["gate0000"];
            // this.allServersPrice.median = this.median(data.average_arr.split(','))
            this.allServersPrice = {
                median: this.median(data.average_arr.split(",")),
                highest: data.highest,
                highest_server: this.serverList[data.highest_server].serverName,
                lowest: data.lowest,
                lowest_server: this.serverList[data.lowest_server].serverName,
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
            serverArr.push("");
            this.scatterOption.yAxis.data = serverArr;

            let dataArr = [];
            for (const [gate, value] of Object.entries(this.allPriceDataRaw)) {
                if (gate === "gate0000") {
                    continue;
                }
                value.current.split(",").forEach((value) => {
                    dataArr.push([
                        parseInt(value),
                        this.serverList[gate].serverName,
                    ]);
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
                if (gate === "gate0000") {
                    continue;
                }
                serverArr.push(this.serverList[gate].serverName);
                dataArr.push(无parseInt(value.average));
            }
            this.barOption.xAxis.data = serverArr;
            this.barOption.series[0].data = dataArr;
        },
        parseSingleServerData() {
            this.singleServerPrice = this.allPriceDataRaw[this.currentGate];
            // this.drawBoxplotChart();
            this.drawLineChart();
            this.singleServerPrice.recommend = this.calcRecommend();
        },
        drawBoxplotChart() {
            let todayPrice = this.singleServerPrice.today;
            let price5173 = todayPrice["5173"];
            let priceOfficial = todayPrice["official"];
            let priceTieba = todayPrice["post"];
            // let currentRawArr = todayPrice["5173"].concat(todayPrice.official).concat(todayPrice.post).split(",");
            let currentRawArr = todayPrice["5173"]
                .concat(todayPrice.official)
                .concat(todayPrice.post);
            let data = prepareBoxplotData([currentRawArr], {
                layout: "vertical",
            });
            this.boxplotOption.yAxis.data = data.axisData;
            this.boxplotOption.series[0].data = data.boxData;
            this.boxplotOption.series[1].data = data.outliers;
            let scatterData = currentRawArr.map((value) => {
                return [1, parseInt(value)];
            });
            this.boxplotOption.series[2].data = scatterData;
        },
        drawLineChart() {
            let trendsRawArr = this.parseTrend(this.singleServerPrice.trend);
            let trendsArr = {
                5173: [],
                official: [],
                post: [],
            };
            let seriesConter = 0;
            for (const [source, trends] of Object.entries(trendsRawArr)) {
                let hasNullValue = false;
                let trendsArr = trends.map((value) => {
                    if (value == "0") {
                        hasNullValue = true;
                        return null;
                    }
                    return parseInt(value);
                });
                this.lineOption.series[seriesConter].data = trendsArr;
                if (hasNullValue) {
                    this.lineOption.series[seriesConter + 1].data = trendsArr;
                } else {
                    this.lineOption.series[seriesConter + 1].data = [];
                }
                seriesConter += 2;
            }

            this.lineOption.xAxis.data = this.getThirtyDaysArr();
        },
        parseTrend(trend) {
            let trends = {
                5173: [],
                official: [],
                post: [],
            };
            var compareTrend = () => {
                return (a, b) => {
                    return a["date"] < b["date"] ? 1 : -1;
                };
            };
            let sortedTrend = trend.sort(compareTrend());
            for (let singleDay of sortedTrend) {
                trends["5173"].push(singleDay["5173"]);
                trends["official"].push(singleDay["official"]);
                trends["post"].push(singleDay["post"]);
            }

            // 放置昨天的数据
            this.singleServerPrice.yesterday = {
                official:
                    sortedTrend[0]["official"] &&
                    sortedTrend[0]["official"] != 0
                        ? sortedTrend[0]["official"].toFixed(2)
                        : "无数据",
                "5173":
                    sortedTrend[0]["5173"] && sortedTrend[0]["5173"] != 0
                        ? sortedTrend[0]["5173"].toFixed(2)
                        : "无数据",
                post:
                    sortedTrend[0]["post"] && sortedTrend[0]["post"] != 0
                        ? sortedTrend[0]["post"].toFixed(2)
                        : "无数据",
            };

            return trends;
        },
        getThirtyDaysArr() {
            let date = new Date();
            let dateArr = [];
            for (let delta = 1; delta <= 30; ++delta) {
                date = new Date();
                date.setDate(date.getDate() - delta);
                dateArr.push(`${date.getMonth() + 1}-${date.getDate()}`);
            }
            return dateArr;
        },
        getUserId() {
            if (User.isLogin()) {
                this.uid = User.getInfo().uid;
            }
        },
        onLineChartLegendselectchanged(e) {
            switch (e.name) {
                case "5173":
                    if (e.selected["5173"] === false) {
                        this.lineOption.series[1].data = [];
                    } else {
                        this.lineOption.series[1].data = this.lineOption.series[0].data;
                    }
                    break;
                case "万宝楼":
                    if (e.selected["万宝楼"] === false) {
                        this.lineOption.series[3].data = [];
                    } else {
                        this.lineOption.series[3].data = this.lineOption.series[2].data;
                    }
                    break;
                case "贴吧":
                    if (e.selected["贴吧"] === false) {
                        this.lineOption.series[5].data = [];
                    } else {
                        this.lineOption.series[5].data = this.lineOption.series[4].data;
                    }
                    break;
                default:
                    break;
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
                resolve({ code: 0, data: { jx3_server: "蝶恋花" } });
            });
        },
    },
    filters: {},
    mounted: function() {
        this.getUserId();
        this.prepareMounted();
        // this.loadPriceData();
        // this.getUserId();
        // this.getSavedServers();
        // this.loadAllServers();
        // this.line
    },
    components: {
        Nav,
        // Extend,
    },
};
</script>

<style lang="less">
@import "../../assets/css/price.less";
</style>
