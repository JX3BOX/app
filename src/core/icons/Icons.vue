<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb name="图标大全" slug="icons" root="/app/icons"><img slot="logo" svg-inline src="../../assets/img/icons/icons.svg" /></Breadcrumb>
        <LeftSidebar><Nav /></LeftSidebar>
        <Main :withoutRight="false">
            <div class="m-icons">
                <el-tabs v-model="activeTabName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="图标库" name="icon" lazy>
                        <div class="searchbar-wrapper">
                            <el-input placeholder="输入图标ID" v-model="searchIconInput" class="input-with-select" @keyup.enter.native="handleSearchIcon">
                                <el-button slot="append" icon="el-icon-search" @click="handleSearchIcon"></el-button>
                            </el-input>
                            <el-alert title="搜索条件" type="info" :closable="false">
                                <ul>
                                    <li>输入单个数字，例如1，返回IconID为1的图标；</li>
                                    <li>输入多个数字，例如2,4,6（支持中英文逗号“,”,顿号“、”,斜杠“/”,竖杠“|”），返回IconID分别为2,4,6的三个图标；</li>
                                    <li>输入范围区间，例如1~100或1-100，返回IconID从1至100的100个图标；</li>
                                    <li>可以同时输入多个数字和多个范围，例如2,3,11-14,17，返回IconID分别为2,3,11,12,13,14,17的7个图标；</li>
                                    <li>每次上限500个；</li>
                                    <li>输入单个图标名称，可以根据名称模糊搜索相关图标，例如：幽月。</li>
                                    <li>
                                        批量图标下载：
                                        <el-link type="primary" href="https://www.jx3box.com/tool/643/" target="_blank">剑三图标下载器</el-link>
                                    </li>
                                </ul>
                            </el-alert>
                        </div>
                        <ul class="m-icon-list" v-loading="isSearchingByName">
                            <el-alert title="以下为部分图标展示，请在上方自定义搜索范围。点击图标即可收藏。" type="warning" close-text="知道了" center show-icon></el-alert>
                            <li v-for="(icon, index) in iconsList" :key="index" @click="handleAddFavorite(index, icon)" @mouseleave="handleMouseLeaveIcon">
                                <i class="u-pic">
                                    <el-image :src="`${JX3BOXIconPath}${icon}.png`" class="u-img" lazy>
                                        <div slot="placeholder" class="image-slot"><i class="el-icon-loading"></i></div>
                                        <div slot="error" class="image-slot"><i class="el-icon-warning-outline"></i></div>
                                    </el-image>
                                    <span class="u-love"><i class="w-heart" :class="{ 'w-heart-animation': index == clickedIndex }"></i></span>
                                </i>
                                <span class="u-iconid">{{ icon }}</span>
                            </li>
                            <div class="loading-placeholder" v-if="isSearchingByName && iconsList.length === 0"></div>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="收藏图标" name="favicon" lazy :loading="isSynchronizing">
                        <ul class="m-icon-list" v-if="activeTabName === 'favicon'">
                            <el-alert title="本地有收藏图标未同步到服务器" type="info" center show-icon v-if="faviconNeedsSync">
                                <el-button type="text" @click="syncFavicon">点此同步未登录收藏数据</el-button>
                            </el-alert>
                            <transition-group name="el-fade-in">
                                <li v-for="(icon, index) in faviconsList" :key="icon">
                                    <i class="u-pic">
                                        <el-image :src="`${JX3BOXIconPath}${icon}.png`" class="u-img" lazy>
                                            <div slot="placeholder" class="image-slot"><i class="el-icon-loading"></i></div>
                                            <div slot="error" class="image-slot"><i class="el-icon-warning-outline"></i></div>
                                        </el-image>
                                        <span class="u-remove" @click="handleRemoveFavorite(index, icon)"></span>
                                    </i>
                                    <span class="u-iconid">{{ icon }}</span>
                                </li>
                            </transition-group>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="表情包" name="emoji" lazy>
                        <ul class="m-emotion-nav">
                            <li
                                v-for="(category, index) in emojiCategoryOptions"
                                :key="category.name"
                                :class="{ active: index === emojiSelection }"
                                @click="handleSelectEmojiCategory(index)"
                            >
                                {{ category.name }}
                                <span>({{ category.total }})</span>
                            </li>
                        </ul>
                        <el-select v-model="emojiSelection" placeholder="请选择" class="m-emotion-selection">
                            <el-option v-for="(category, index) in emojiCategoryOptions" :key="category.name" :value="index" :label="category.name">
                                <span style="float: left">{{ category.name }}</span>
                                <span style="float: right; color: #8492a6; font-size: 13px">共{{ category.total }}个</span>
                            </el-option>
                        </el-select>
                        <template v-if="emojiCategoryOptions.length > 0">
                            <ul class="m-emotion-list">
                                <li v-for="(emoji, index) in emojiCategoryOptions[emojiSelection].total" :key="emoji">
                                    <el-image :src="`${JX3BOXEmojiPath}${emojiCategoryOptions[emojiSelection].name}/${index}.gif`" lazy>
                                        <!-- 这里要用index, 因为这里for遍历的是数字，emoji值会从1开始，而index还是从0开始 -->
                                        <div slot="placeholder" class="image-slot"><i class="el-icon-loading"></i></div>
                                        <div slot="error" class="image-slot"><i class="el-icon-warning-outline"></i></div>
                                    </el-image>
                                </li>
                            </ul>
                            <!-- <a class="m-emotion-down" href="" download=""></a> -->

                            <el-button :loading="isDownloadingEmoji" plain @click.native.stop="handleDownloadEmoji" icon="el-icon-download" class="btn-download-emoji">
                                <div class="m-emotion-down">
                                    <b>下载</b>
                                    <span>Download</span>
                                </div>
                            </el-button>
                        </template>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <RightSidebar><div class="m-icons-aside"></div></RightSidebar>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Info from '@/components/Info.vue';
import Nav from '@/components/Nav.vue';
import { axios } from '@/service/api.js';
import { JX3BOX, User } from '@jx3box/jx3box-common';

export default {
    name: 'Icons',
    data: function() {
        return {
            activeTabName: 'icon',
            searchIconInput: '',
            iconsList: [],
            clickedIndex: -1,
            JX3BOXIconPath: JX3BOX.__iconPath + 'icon/',
            JX3BOXEmojiPath: JX3BOX.__iconPath + 'emotion/official_mini/',
            faviconsList: null,
            localFaviconsList: [],
            isSynchronizing: false,
            total: {},
            emojiCategoryOptions: [],
            emojiSelection: 0,
            isDownloadingEmoji: false,
            isSearchingByName: false
        };
    },
    computed: {
        faviconNeedsSync() {
            if (!this.localFaviconsList || !this.faviconsList || this.localFaviconsList.length === 0) {
                return false;
            }
            if (this.localFaviconsList.length !== this.faviconsList.length) {
                return true;
            }
            for (let each of this.localFaviconsList) {
                if (!this.faviconsList.includes(each)) {
                    return true;
                }
            }
            return false;
        }
    },
    methods: {
        async prepareMounted() {
            let defaultList = [
                13,
                316,
                109,
                245,
                889,
                2178,
                2179,
                2180,
                2588,
                2589,
                2646,
                2647,
                2648,
                2789,
                3089,
                3111,
                3112,
                3113,
                3114,
                3115,
                3116,
                3117,
                3118,
                3119,
                3120,
                3121,
                3122,
                3123,
                3137,
                3138,
                3139,
                3140,
                3321,
                4704,
                4707,
                4708,
                4709,
                4710,
                4835,
                4853,
                5389,
                8848,
                10451,
                10452,
                10909
            ];
            this.iconsList = defaultList;

            // 这里先读取一次存在本地的收藏图标
            this.getFromLocal();

            let allIconsListUrl = JX3BOX.__staticPath.jsdelivr + 'jx3-icon@1.1.0/icon.json';
            let getAllIconsList = axios(allIconsListUrl, 'GET');

            let allEmojiListUrl = JX3BOX.__staticPath.jsdelivr + 'jx3-icon@1.1.0/emotion.json';
            let getAllEmojiList = axios(allEmojiListUrl, 'GET');

            let getUserServerSaved = null;
            if (this.uid) {
                getUserServerSaved = this.getSavedIcons();
            } else {
                getUserServerSaved = this.getFromLocal();
            }
            let axiosSuccess = false;
            Promise.all([getAllIconsList, getAllEmojiList])
                .then(result => {
                    this.total.icons = result[0].icon;
                    this.emojiCategoryOptions = result[1];
                })
                .catch(e => {
                    switch (e.code) {
                        case -1:
                            // 网络异常
                            this.$message.error(e.msg);
                            break;
                        case 9999:
                            this.$message.error('登录失效, 请重新登录');
                            User.destroy();
                            setTimeout(() => {
                                User.toLogin();
                            }, 2000);
                            break;
                        default:
                            // 服务器错误
                            console.log(e);
                            this.$message.error(`[${e.code}]${e.msg}`);
                    }
                })
        },
        syncFavicon() {
            this.isSynchronizing = true;
            //创建一个并集
            let union = this.faviconsList.concat(this.localFaviconsList);
            union = new Set(union);
            this.faviconsList = Array.from(union);
            this.setSavedIcons();
            if (window.localStorage) {
                localStorage.removeItem('favicons');
                this.localFaviconsList = null;
            }
        },
        handleDownloadEmoji() {
            this.isDownloadingEmoji = true;
            let link = document.createElement('a');
            link.href = `${this.JX3BOXEmojiPath}${this.emojiCategoryOptions[this.emojiSelection].name}.zip`;
            link.download = `${this.emojiCategoryOptions[this.emojiSelection].name}.zip`;
            link.click();
            this.isDownloadingEmoji = false;
        },
        handleSelectEmojiCategory(index) {
            this.emojiSelection = index;
        },
        handleClick(tab, event) {
            // console.log(tab)
        },
        handleAddFavorite(index, iconid) {
            this.clickedIndex = index;
            let id = iconid + '';
            if (this.faviconsList.includes(id)) {
                return;
            }
            this.faviconsList.push(id);
            this.setSavedIcons();
        },
        handleRemoveFavorite(index, iconid) {
            let iconidIndex = this.faviconsList.indexOf(iconid);
            if (iconidIndex !== -1) {
                this.faviconsList.splice(iconidIndex, 1);
                this.setSavedIcons();
            }
        },
        handleMouseLeaveIcon() {
            this.clickedIndex = -1;
        },
        async handleSearchIcon() {
            // 初始化变量
            //每次加载限制
            let limit = 500;
            let min = 0;
            let max = 1;
            let range = [];

            let query = this.searchIconInput.replace(/\ /g, '');
            if (query === '') {
                return;
            }
            let searchList = [];
            let tmpList = [];
            //如果出现全角逗号、顿号、斜杠、飘键进行替换
            query = query.replace(/，|、|\/|\||\\/g, ',');
            query = query.replace(/~/g, '-');

            // 如果没有分隔符，先判断是不是按照名字搜索的文字
            let numberReg = /^[0-9]+$/;
            if (!query.includes(',') && !query.includes('-') && !numberReg.test(query)) {
                // 按照名称搜索
                this.isSearchingByName = true;
                let results = await this.searchIconByName(query);
                this.isSearchingByName = false;
                return;
            }

            // 如果同时出现逗号和杠，先拆逗号，再拆杠
            let bothExist = query.includes(',') && query.includes('-');
            if (query.includes(',')) {
                tmpList = query.split(',');
            }
            if (tmpList.length === 0) {
                tmpList = [query];
            }
            tmpList.forEach(value => {
                if (value.includes('-')) {
                    range = value.split('-');
                    min = parseInt(range[0]);
                    max = parseInt(range[range.length - 1]);
                    if (!isNaN(min) && !isNaN(max)) {
                        if (min > max) {
                            for (let i = max; i <= min; ++i) {
                                if (!searchList.includes(i)) {
                                    searchList.push(i);
                                }
                            }
                        } else {
                            for (let i = min; i <= max; ++i) {
                                if (!searchList.includes(i)) {
                                    searchList.push(i);
                                }
                            }
                        }
                    }
                } else {
                    if (!isNaN(parseInt(value))) {
                        searchList.push(parseInt(value));
                    }
                }
            });

            this.iconsList = searchList.slice(0, 500);
        },
        async searchIconByName(name) {
            let url = JX3BOX.__node + 'icon/name/' + name;
            return axios(url, 'GET')
                .then(response => {
                    if (response) {
                        let tmpList = [];
                        for (const [key, value] of Object.entries(response)) {
                            value.forEach(value => {
                                let iconid = value.IconID + '';
                                if (!tmpList.includes(iconid)) {
                                    tmpList.push(iconid);
                                }
                            });
                        }
                        this.iconsList = tmpList;
                    }
                })
                .catch(e => {
                    switch (e.code) {
                        case -1:
                            // 网络异常
                            this.$message.error(e.msg);
                            this.getFromLocal();
                            break;
                        default:
                            // 服务器错误
                            this.$message.error(`[${e.code}]${e.msg}`);
                            this.getFromLocal();
                    }
                });
        },

        // 分割线
        getUserId() {
            if (User.isLogin()) {
                this.uid = User.getInfo().uid;
            }
        },
        getSavedIcons() {
            // 获取用户储存的服务器列表
            let url = JX3BOX.__server + 'user/meta';
            if (this.uid) {
                // 从服务器读取
                // 旧版数据格式 ’["109","3118","3119","13","316","2179","245","889","2178","5389"]‘
                axios(url, 'GET', true, {}, {}, { uid: this.uid, key: 'favicons' })
                    .then(response => {
                        if (response.code == 10050) {
                            let serverValue = response.data.value;
                            if (serverValue) {
                                // 判断是否是旧版数据
                                if (serverValue.includes('[')) {
                                    this.faviconsList = JSON.parse(serverValue);
                                } else {
                                    this.faviconsList = serverValue.split(',');
                                }
                            } else {
                                this.faviconsList = [];
                            }
                        }
                    })
                    .catch(e => {
                        switch (e.code) {
                            case -1:
                                // 网络异常
                                this.$message.error(e.msg);
                                this.faviconsList = this.localFaviconsList;
                                break;
                            case 9999:
                                this.$message.error('登录失效, 请重新登录');
                                User.destroy();
                                setTimeout(() => {
                                    User.toLogin();
                                }, 2000);
                                //不指定url时则自动跳回当前所在页面
                                break;
                            default:
                                // 服务器错误
                                this.$message.error(`[${e.code}]${e.msg}`);
                                this.faviconsList = this.localFaviconsList;
                        }
                    })
                    .then(() => {});
            } else {
                // 本地读取
                this.faviconsList = this.localFaviconsList;
            }
        },
        getFromLocal() {
            if (window.localStorage) {
                let current = localStorage.getItem('favicons');
                if (current) {
                    this.localFaviconsList = current.split(',');
                }
            }
        },
        setSavedIcons() {
            if (this.uid) {
                // 保存到服务器
                let url = JX3BOX.__server + 'user/meta';
                axios(url, 'POST', true, {
                    uid: this.uid,
                    key: 'favicons',
                    value: this.faviconsList.join(',')
                })
                    .then(response => {
                        if (response.code == 10052) {
                            //
                        }
                    })
                    .catch(e => {
                        // 如果出问题，先存本地
                        //创建一个并集
                        let union = this.faviconsList
                        if (this.localFaviconsList && this.localFaviconsList.length > 0) {
                            union = this.localFaviconsList.concat(this.faviconsList);
                        }
                        union = new Set(union);
                        this.faviconsList = Array.from(union);
                        this.setToLocal()
                        switch (e.code) {
                            case -1:
                                // 网络异常
                                this.$message.error(e.msg);
                                break;
                            case 9999:
                                this.$message.error('登录失效, 请重新登录');
                                User.destroy();
                                setTimeout(() => {
                                    User.toLogin();
                                }, 2000);
                                //不指定url时则自动跳回当前所在页面
                                break;
                            default:
                                // 服务器错误
                                this.$message.error(`[${e.code}]${e.msg}`);
                        }
                    })
                    .then(() => {
                        this.isSynchronizing = false;
                    });
            } else {
                // 储存在本地
                this.setToLocal();
                this.isSynchronizing = false;
            }
        },
        setToLocal() {
            if (window.localStorage) {
                let names = this.faviconsList.join(',');
                localStorage.setItem('favicons', names);
                this.localFaviconsList = this.faviconsList;
            }
        }
    },
    filters: {},
    mounted: function() {
        this.getUserId();
        this.prepareMounted();
        this.getSavedIcons();
        // this.loadAllServers();
    },
    components: {
        Nav
    }
};
</script>

<style lang="less">
ul,
ul li {
    margin: 0;
    padding: 0;
}
.el-tabs--top {
    .mt(10px);
}
.searchbar-wrapper {
    .el-alert--info {
        margin: 10px auto;
    }
}
.loading-placeholder {
    height: 50px;
}
.m-icon-list {
    .mt(10px);
    .clearfix;
    .el-alert--warning {
        margin: 20px auto;
    }
    li {
        list-style: none;
        .fl;
        margin: 0 10px 5px 0;

        .u-pic {
            .pr;
            .size(50px);
            .db;
            border: 1px solid #eee;
            .r(6px);
        }
        .u-img {
            .ml(1px);
            .mt(1px);
            .size(48px);
            .db;
            .r(6px);
            .image-slot {
                display: flex;
                .full;
                justify-content: center;
                align-items: center;
                .ml(-1px);
                .mt(-1px);
            }
        }
        .u-love {
            .pa;
            .lt(0);
            .size(50px);
            background-color: rgba(255, 255, 255, 0.8);
            .r(6px);
            .pointer;
            i {
                .db;
            }
            .none;
        }
        .u-remove {
            .pa;
            .rt(0);
            .u-icon;
            .u-icon-close;
            .size(16px);
            .pointer;
        }
        &:hover {
            .u-love {
                .db;
            }
        }
        .u-iconid {
            .db;
            .x;
            padding: 5px 0;
        }
    }
}

// emoji
.m-emotion-nav {
    .mt(10px);
    list-style: none;
    .clearfix;
    li {
        border: 1px solid #eee;
        .r(4px);
        .fz(15px, 30px);
        padding: 0 20px;
        .fl;
        .w(140px);
        .x;
        span {
            color: #777;
            .fz(13px);
            .ml(5px);
        }
        .pointer;
        .mr(10px);
        .mb(10px);

        &.active,
        &:hover {
            background-color: #fafafa;
        }
    }
}
@media screen and (max-width: @ipad) {
    .m-emotion-nav {
        .none;
    }
}
.m-emotion-selection {
    .mt(10px);
    .none;
}
@media screen and (max-width: @ipad) {
    .m-emotion-selection {
        .db;
    }
}
.m-emotion-list {
    list-style: none;
    .clearfix;
    li {
        padding: 10px;
        .fl;
    }
}
.btn-download-emoji {
    .pr;
    .db;
    .auto(x);
    i {
        .pa;
        .fz(22px);
        top: 50%;
        transform: translateY(-50%);
    }
    .el-icon-loading {
        top: 30%;
    }
}
.btn-download-emoji:hover {
    b,
    span {
        color: rgb(64, 158, 255);
    }
}
.m-emotion-down {
    .dbi;
    .x;
    .ml(28px);
    .el-icon-cownload {
        font-size: 22px;
    }
    b,
    span {
        .db;
    }
    b {
        .fz(18px);
        color: #444;
    }
    span {
        .fz(14px);
        color: #888;
    }
}

// 分割线
// 公共
.el-link {
    font-size: 12px;
    vertical-align: top;
}
.el-button--text {
    padding: 0;
    font-size: 12px;
}
.u-icon {
    .dbi;
    .y;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 0;
}
.u-icon-close {
    background-image: url(../../assets/img/icons/close.svg);
}
/* 爆炸心心-------------------------- */
.w-heart {
    background: url(../../assets/img/icons/web_heart_animation.png);
    background-position: left;
    background-repeat: no-repeat;
    height: 50px;
    width: 50px;
    cursor: pointer;
    background-size: 1450px; //实际背景图片尺寸2900px
}
.w-heart:hover {
    background-position: left; //显示最后一个红心帧
    // background-position: right; //显示第一个红心帧
}
@-webkit-keyframes heartBlast {
    0% {
        background-position: left;
    }
    100% {
        background-position: right;
    }
}
@keyframes heartBlast {
    0% {
        background-position: left;
    }
    100% {
        background-position: right;
    }
}
.w-heart-animation {
    -webkit-animation-name: heartBlast; //webkit内核浏览器
    animation-name: heartBlast;
    -webkit-animation-duration: 0.8s;
    animation-duration: 0.8s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-timing-function: steps(28); //共28个背景图片帧
    animation-timing-function: steps(28);
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    background-position: right;
}

//  分割线
.m-icons {
    padding: 10px;
}
.m-icons::after {
    content: '';
    display: table;
    clear: both;
}
</style>
