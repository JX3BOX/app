<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="家具大全"
            slug="furniture"
            root="/app/furniture"
            :feedbackEnable="true"
        >
            <img slot="logo" svg-inline src="../../assets/img/logos/f1.svg" />
            <div class="m-info"></div>
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-furniture">
                <h1 class="m-furniture-title">家具大全</h1>
                <el-divider class="m-furniture-desc">PV邑好帮手</el-divider>

                <div class="m-furniture-search">
                    <el-input placeholder="请输入家具名称" v-model="name">
                        <template slot="prepend">名称</template>
                        <el-button
                            slot="append"
                            icon="el-icon-search"
                        ></el-button>
                    </el-input>
                </div>

                <!-- 筛选面板开关 -->
                <!-- <el-button
                    icon="el-icon-set-up"
                    type="primary"
                    plain
                    class="m-furniture-filter-switch"
                    @click="toggleFilter"
                >
                    <span v-if="filter_open">关闭筛选面板</span>
                    <span v-else>打开筛选面板</span>
                </el-button> -->

                <!-- 筛选面板 -->
                <div class="m-furniture-filter">
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <div class="note">来源</div>
                            <el-select
                                v-model="source"
                                placeholder="请选择"
                                size="medium"
                            >
                                <el-option
                                    v-for="item in sourceList"
                                    :key="item"
                                    :label="item"
                                    :value="item"
                                >
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="3">
                            <div class="note">最大家园等级</div>
                            <el-select
                                v-model="maxLevel"
                                placeholder="请选择"
                                size="medium"
                            >
                                <el-option
                                    v-for="level in levels"
                                    :key="level"
                                    :label="level + '级'"
                                    :value="level"
                                >
                                </el-option>
                            </el-select>
                        </el-col>

                        <el-col :span="3">
                            <div class="note">其他特性</div>
                            <el-checkbox v-model="interactable"
                                >可交互</el-checkbox
                            >
                        </el-col>

                        <el-col :span="3">
                            <div class="note">风水</div>
                            <el-input
                                v-model="environment"
                                placeholder="大于风水值"
                                size="medium"
                            ></el-input>
                        </el-col>

                        <el-col :span="3">
                            <div class="note">观赏</div>
                            <el-input
                                v-model="beauty"
                                placeholder="大于观赏值"
                                size="medium"
                            ></el-input>
                        </el-col>

                        <el-col :span="3">
                            <div class="note">坚固</div>
                            <el-input
                                v-model="robustness"
                                placeholder="大于坚固值"
                                size="medium"
                            ></el-input>
                        </el-col>

                        <el-col :span="3">
                            <div class="note">实用</div>
                            <el-input
                                v-model="practicality"
                                placeholder="大于实用值"
                                size="medium"
                            ></el-input>
                        </el-col>

                        <el-col :span="3">
                            <div class="note">趣味</div>
                            <el-input
                                v-model="fun"
                                placeholder="大于趣味值"
                                size="medium"
                            ></el-input>
                        </el-col>

                        <!-- <el-button
                        class="m-furniture-filter-button"
                        type="primary"
                        @click="toggleFilter"
                        >确定</el-button
                    > -->
                    </el-row>
                </div>

                <!-- 父大类 -->
                <el-tabs
                    class="m-furniture-type"
                    v-model="type"
                    type="card"
                    @tab-click="handleTabChange"
                >
                    <el-tab-pane label="全部" name="0"></el-tab-pane>
                    <el-tab-pane label="建筑" name="1"></el-tab-pane>
                    <el-tab-pane label="家具" name="2"></el-tab-pane>
                    <el-tab-pane label="景观" name="3"></el-tab-pane>
                    <el-tab-pane label="收藏" name="4"></el-tab-pane>
                </el-tabs>

                <!-- 子类型，若干个ul组 -->
                <div class="m-furniture-subtype">
                    <ul class="subctg" v-if="subCtgData.length">
                        <li
                            v-for="subctg of subCtgData"
                            :key="subctg.name"
                            @mouseenter="handleHoverSubCtg($event, subctg)"
                            @mouseleave="handleLeaveSubCtg($event, subctg)"
                            @click="handleSelectSubCtg($event, subctg)"
                        >
                            <div v-bind:class="subCtgClass(subctg)"></div>
                            <!-- <img :src="`${imgurl}building/TY/TY_Base_M_pool01_AB200.png`" alt=""> -->
                            <span>{{ subctg.name }}</span>
                        </li>
                    </ul>
                    <p
                        class="u-all"
                        v-else
                        @click="handleSelectSubCtg($event, '')"
                    >
                        <img src="../../assets/img/furniture/home.png" />
                        <span>全部</span>
                    </p>
                </div>

                <!-- 内容列表区 :max-height="tableMaxHeight" -->
                <el-table
                    class="m-furniture-list"
                    :data="listData"
                    style="width: 100%"
                    @sort-change="handleSort"
                    v-loading="loading"
                >
                    <el-table-column fixed prop="icon" label="预览">
                        <template slot-scope="prop">
                            <!-- <el-image -->
                            <img
                                class="u-img"
                                v-photoswipe:single
                                style="height: 80px"
                                :src="getUrl(prop.row.attributes.img)"
                                fit="contain"
                                v-if="prop.row.attributes.img"
                            />
                            <!-- </el-image> -->
                            <div class="u-img-null" v-else>无</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="name" label="名称">
                        <template slot-scope="prop">
                            <el-popover
                                placement="top-start"
                                width="200"
                                trigger="hover"
                                class="u-haspop"
                                :content="prop.row.attributes.desc"
                                v-if="
                                    prop.row.attributes.desc &&
                                        prop.row.attributes.desc !== ''
                                "
                                :close-delay="20"
                                :open-delay="20"
                            >
                                <span
                                    slot="reference"
                                    style="border-bottom: 1px solid gray"
                                    class="furniture-name"
                                    :class="
                                        `quality-${prop.row.attributes.quality}`
                                    "
                                    >{{ prop.row.attributes.name }}</span
                                >
                            </el-popover>
                            <span
                                class="furniture-name"
                                :class="
                                    `quality-${prop.row.attributes.quality}`
                                "
                                v-else
                                >{{ prop.row.attributes.name }}</span
                            >

                            <el-tooltip
                                effect="dark"
                                content="可交互"
                                placement="top"
                                v-if="prop.row.attributes.interact"
                            >
                                <span
                                    class="furniture-indicator interactable"
                                ></span>
                            </el-tooltip>
                            <el-tooltip
                                effect="dark"
                                content="可缩放"
                                placement="top"
                                v-if="prop.row.attributes.scaleRange"
                            >
                                <span
                                    class="furniture-indicator scaleable"
                                ></span>
                            </el-tooltip>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="attributes.level"
                        label="品质"
                        sortable="custom"
                    ></el-table-column>
                    <el-table-column
                        prop="attributes.limit"
                        label="宅邸等级"
                        sortable="custom"
                    ></el-table-column>
                    <el-table-column
                        prop="attributes.beauty"
                        label="观赏"
                        sortable="custom"
                    ></el-table-column>
                    <el-table-column
                        prop="attributes.practicality"
                        label="实用"
                        sortable="custom"
                    ></el-table-column>
                    <el-table-column
                        prop="attributes.robustness"
                        label="坚固"
                        sortable="custom"
                    ></el-table-column>
                    <el-table-column
                        prop="attributes.environment"
                        label="风水"
                        sortable="custom"
                    ></el-table-column>
                    <el-table-column
                        prop="attributes.fun"
                        label="趣味"
                        sortable="custom"
                    ></el-table-column>
                    <el-table-column
                        prop="attributes.price"
                        label="价格"
                        sortable="custom"
                    ></el-table-column>
                    <el-table-column
                        prop="attributes.source"
                        label="获取方式"
                    ></el-table-column>
                </el-table>
                <el-button
                    class="m-archive-more"
                    :class="{ show: hasNextPage }"
                    type="primary"
                    :loading="loading"
                    @click="appendPage"
                    >加载更多</el-button
                >
                <el-pagination
                    class="m-archive-pages"
                    :page-size="15"
                    background
                    :hide-on-single-page="true"
                    @current-change="changePage"
                    :current-page.sync="page"
                    layout="total, prev, pager, next, jumper"
                    :total="total"
                >
                </el-pagination>

                <!-- 预览器 -->
                <el-image-viewer
                    v-if="showViewer"
                    :on-close="closeViewer"
                    :url-list="srcList"
                />
            </div>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import { __ossMirror ,__iconPath,__ossRoot} from "@jx3box/jx3box-common/js/jx3box.json";
// import ElImageViewer from "element-ui/packages/image/src/image-viewer";
import typedata from "./furniture_types.json";
import { getFurnitures } from "../../service/furniture";

export default {
    name: "Furniture",
    props: [],
    data: function() {
        return {
            type: "0", // 默认全部
            subCtg: undefined, // 默认全部
            hover: 0,
            typeData: [],
            listData: [],
            loading: false,
            // tableMaxHeight: window.innerHeight - 371,

            // 图片
            imgurl: __ossMirror + "pic/furniture/",
            // imgurl: __iconPath + "furniture/",
            showViewer: false,
            srcList: [],

            // 筛选
            source: "全部",
            sourceList: [
                "全部",
                "园宅币",
                "活动",
                "园宅会赛",
                "隐藏",
                "生活技能",
                "声望",
                "奇遇",
                "侠义值",
                "飞沙令",
                "名剑大会",
                "战阶",
                "师徒值",
                "管家",
                "宠物游历",
                "小区",
                "监本印文",
                "雀神点数",
                "江湖贡献值",
                "入住家园赠送",
                "商城",
                "副本",
                "未知",
            ],
            maxLevel: 15,
            levels: Array.from({ length: 15 }).map((_, i) => i + 1),
            interactable: false,
            environment: "",
            beauty: "",
            robustness: "",
            practicality: "",
            fun: "",
            name: "", //家具名称
            filter_open: false,

            // 排序分页
            orderBy: undefined,
            order: undefined,
            page: 1,
            size: 15,
            total: 0,
        };
    },
    watch: {
        filterableProperties() {
            this.update();
        },
        name: function() {
            if (this.name) {
                this.type = "0";
                this.subCtg = undefined;
                this.update();
            }
        },
    },
    computed: {
        filterableProperties() {
            return `${this.maxLevel},${this.source},${this.interactable},${this.environment},${this.beauty},${this.robustness},${this.practicality},${this.fun}`;
        },
        subCtgData() {
            return typedata[this.type] || [];
        },
        subCtgClass() {
            return (subctg) => {
                const category = +this.type * 10000 + subctg.id * 100;
                const tmpClass = {
                    "bg-1":
                        subctg.attr.icon === "homelandbuildingfiltericon.png",
                    "bg-2":
                        subctg.attr.icon === "homelandbuildingfiltericon2.png",
                };
                const type =
                    category === this.subCtg
                        ? "checked"
                        : category === this.hover
                        ? "hover"
                        : "normal";
                const x = subctg.attr[type] % 19;
                const y = Math.floor(subctg.attr[type] / 19);
                tmpClass[`sprite-${x}-${y}`] = true;
                return tmpClass;
            };
        },
        hasNextPage() {
            return this.page * this.size < this.total;
        },
    },
    methods: {
        handleHoverSubCtg(e, subctg) {
            this.hover = +this.type * 10000 + subctg.id * 100;
        },
        handleLeaveSubCtg(e, subctg) {
            // 调整图标
            this.hover = 0;
        },
        handleTabChange(tab) {
            if (tab.name === "0") {
                this.subCtg = undefined;
                this.update();
            }
        },
        handleSelectSubCtg(e, subctg) {
            // 调整图标
            this.subCtg = +this.type * 10000 + subctg.id * 100;
            this.update();
        },
        handleSort({ prop, order }) {
            // 后端排序
            if (order) {
                this.orderBy = prop.replace("attributes.", "");
                this.order = order === "ascending" ? 1 : 0;
            } else {
                this.orderBy = undefined;
                this.order = undefined;
            }
            this.update();
        },
        loadData(append = false) {
            this.loading = true;
            return getFurnitures({
                category: this.subCtg,
                source: this.source === "全部" ? undefined : this.source,
                limit: this.maxLevel,
                order: this.order,
                orderBy: this.orderBy,
                size: this.size,
                page: this.page,
                interactable: this.interactable === true ? "1" : undefined,
                environment: this.environment,
                beauty: this.beauty,
                robustness: this.robustness,
                practicality: this.practicality,
                fun: this.fun,
                name: this.name,
            })
                .then((res) => {
                    if (append) {
                        this.listData.push(...res.data.data);
                    } else {
                        this.listData = res.data.data;
                    }
                    this.total = res.data.meta.total;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        update() {
            this.page = 1;
            this.loadData();
        },
        getUrl(rawUrl) {
            return this.imgurl + rawUrl.replace("home/", "");
        },
        appendPage() {
            this.page += 1;
            this.loadData(true);
        },
        changePage() {
            this.loadData().then(() => {
                window.scrollTo(0, 0);
            });
        },
        onPreview(url) {
            this.srcList = [url.replace("home", __ossMirror + "pic/furniture")];
            this.showViewer = true;
        },
        closeViewer() {
            this.showViewer = false;
        },
        toggleFilter() {
            this.filter_open = !this.filter_open;
        },
    },
    mounted: function() {
        this.loadData();
    },
    components: {
        // ElImageViewer,
        Nav,
    },
};
</script>

<style lang="less">
@import "../../assets/css/furniture.less";
</style>
