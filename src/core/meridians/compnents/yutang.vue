<template>
    <div class="jinmai yutang" style>
        <h3>任脉</h3>
        <div v-for="(item, index) in jingmai" :key="index" :class="'ap ap' + item.id">
            <em :class="'level' + item.nowLevel"></em>
            <a
                href="javascript:void(0)"
                ref="detail"
                @mouseover="showDetail(item, index)"
                @mouseout="outDetail"
                @click="action(item)"
                @contextmenu.prevent="reduce(item)"
                :class="item.id === hover ? 'jm_mouse' : item.nowLevel === item.maxLevel ? 'jm_full' : item.requireSuccess ? 'jm_opened' :  ''"
            ></a>
            <div v-if="item.nowLevel >= item.lnLevel" :class="'ln ln' + item.id"></div>
        </div>
    </div>
</template>

<script>
import store from "../../../store";
export default {
    name: "yutang",
    data() {
        return {
            jingmai: [
                { name: "任脉·玉堂", id: 77, lnLevel: 1 },
                { name: "任脉·紫宫", id: 78, lnLevel: 1 },
                { name: "任脉·华盖", id: 79, lnLevel: 1 },
                { name: "任脉·璇玑", id: 80, lnLevel: 1 },
                { name: "任脉·龈交", id: 81, lnLevel: 1 },
                { name: "任脉·天突", id: 82, lnLevel: 1 },
                { name: "任脉·廉泉", id: 83, lnLevel: 1 },
                { name: "任脉·兑端", id: 84, lnLevel: 1 },
                { name: "任脉·承浆", id: 85, lnLevel: 0 },
                { name: "任脉·水沟", id: 86, lnLevel: 2 },
                { name: "任脉·素髎", id: 87, lnLevel: 2 },
                { name: "任脉·神庭", id: 88, lnLevel: 2 },
                { name: "任脉·上星", id: 89, lnLevel: 2 },
                { name: "任脉·前顶", id: 90, lnLevel: 0 },
            ],
            mouseData: {},
            hover: "",
        };
    },
    computed: {},
    created() {
        this.init();
    },
    methods: {
        init() {
            let define = store.state.defineMeridians;
            let select = store.state.selectMeridians;
            let jingmai = JSON.parse(JSON.stringify(this.jingmai));
            jingmai = jingmai.map((item) => {
                let defItem = define.find(def => def.name === item.name)
                let selItem = select.find(sel => sel.name === item.name)
                if (selItem) {
                    return item = Object.assign(item, selItem);
                } else {
                    item = Object.assign(item, defItem);
                    item.nowLevel = 0
                    return item
                }
            });
            this.jingmai = jingmai;
        },
        showDetail(item, index) {
            if (item.requireSuccess && item.nowLevel < item.maxLevel) {
                this.hover = item.id;
            }
            let style = window.getComputedStyle(this.$refs.detail[index], null);
            let data = {};
            data.left = parseInt(style.left) + 430;
            data.top = parseInt(style.top) + 60;
            data = Object.assign(data, item);
            this.mouseData = data;
            this.$emit("showDetail", data);
        },
        outDetail() {
            this.hover = "";
            this.$emit("outDetail", {});
        },
        action(item) {
            this.$emit("action", this.mouseData);
        },
        setHover() {
            this.hover = "";
        },
        reduce(item) {
            this.$emit("reduce", item);
        },
    },
};
</script>

<style lang='less'>
//@import "../../../assets/css/meridians.less";
</style>