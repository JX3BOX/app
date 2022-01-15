<template>
    <div class="m-icons-search">
        <!-- 搜索框 -->
        <el-input placeholder="输入搜索条件，例如：3089、1-100、幽月乱花" v-model="search" class="input-with-select" @keyup.enter.native="onSearch" @change.once="useSearchIcon">
            <el-button slot="append" icon="el-icon-search" @click="onSearch"></el-button>
        </el-input>
        <!-- 如何搜索图片（文字） -->
        <div class="m-icon-search-tip">
            <ul>
                <li>输入单个数字，例如1，返回IconID为1的图标；</li>
                <li>输入多个数字，例如2,4,6（支持中英文逗号“,”,顿号“、”,斜杠“/”,竖杠“|”），返回IconID分别为2,4,6的三个图标；</li>
                <li>输入范围区间，例如1~100或1-100，返回IconID从1至100的100个图标；</li>
                <li>可以同时输入多个数字和多个范围，例如2,3,11-14,17，返回IconID分别为2,3,11,12,13,14,17的7个图标；</li>
                <li>输入单个图标名称，可以根据名称模糊搜索相关图标，例如：幽月、幽月乱花。</li>
                <li>每次上限500个</li>
            </ul>
        </div>

        <!-- 展示图标 -->
        <el-alert class="m-icons-tips" v-if="isNewbie" title="以下为部分图标展示，请在上方自定义搜索范围，点击图标即可收藏。" type="warning" center show-icon></el-alert>
        <el-alert class="m-icons-tips" v-if="!searchList.length" title="没有找到对应的图标，请重新输入关键词搜索图标。" type="info" center show-icon></el-alert>

        <div class="m-icons-matrix">
            <icon-item v-for="(icon, index) in searchList" :icon="icon" :isFav="false" :key="index"></icon-item>
        </div>

    </div>
</template>
<script>
import iconItem from './iconItem.vue';
import { getIconsByName } from "@/service/icons.js";
import default_list from "../default.json";
export default {
    name: "search",
    props: [],
    components: {
        iconItem
    },
    data: function() {
        return {
            search: "",
            searchList: [],
            isNewbie: true,
        };
    },
    computed: {
        client: function() {
            return this.$store.state.client;
        },
        favList: function() {
            return this.$store.state.favList || [];
        },
    },
    methods: {
        useSearchIcon() {
            this.isNewbie = false;
        },
        onSearch() {
            if (!this.search) return;
            this.getSearchData(this.search);
        },
        async getSearchData(query) {
            if (query == this.searchKey) return;
            // 如果出现空格、全角逗号、顿号、斜杠、飘键进行替换
            query = query.replace(/\s/g, "").replace(/，|、|\/|\||\\/g, ",").replace(/~/g, "-");

            // 如果没有分隔符，先判断是不是按照名字搜索的文字
            let numberReg = /^[0-9]+$/;

            // 按照名称搜索 请求接口
            if (!query.includes(",") && !query.includes("-") && !numberReg.test(query)) {
                this.searchList = await this.searchIconByName(query);
                return;
            }

            let searchList = [];
            let iconTmp = [];

            // 如果同时出现逗号和杠，先拆逗号，再拆杠
            if (query.includes(',')) {
                iconTmp = query.split(',');
            }
            if (!iconTmp.length) {
                iconTmp = [query]
            }

            iconTmp.forEach(item => {
                if (item.includes('-')) {
                    const [min, max] = item.split('-').map(Number).sort();

                    if (!isNaN(min) && !isNaN(max)) {
                        for (let i = min; i <= max; i++) {
                            if (!searchList.includes(i)) {
                                searchList.push(i)
                            }
                        }
                    }

                } else {
                    if (!isNaN(parseInt(item))) {
                        searchList.push(parseInt(item));
                    }
                }
            })

            this.searchList = searchList.slice(0, 500);
        },
        async searchIconByName(name) {
            return getIconsByName(name, this.client)
                .then((res) => {
                    const { item, skill, buff } = res

                    const list = [...item, ...skill, ...buff];
                    const idList = [];
                    const tmpList = [];

                    list.forEach((item) => {

                        if (item.iconID) {
                            let iconId = String(item.iconID);
    
                            if (!idList.includes(iconId)) {
                                idList.push(iconId);
                                tmpList.push({ id: iconId, name: item.Name });
                            }
                        }
                        
                    });

                    return tmpList
                })
                .catch((e) => {
                    console.log("Error:", e);
                });
        },
    },
    created: function() {
        this.searchList = default_list;
    },
};
</script>
