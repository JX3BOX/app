<template>
    <div class="jinmai weidao" style>
        <h3>带脉</h3>
        <div v-for="(item, index) in jingmai" :key="index" :class="'ap ap' + item.id">
            <em :class="'level' + item.nowLevel"></em>
            <a
                href="javascript:void(0)"
                ref="detail"
                @mouseover="showDetail(item, index)"
                @mouseout="outDetail"
                @click="action(item)"
                @contextmenu.prevent="reduce(item)"
                :class="item.id == hover ? 'jm_mouse' : item.nowLevel == item.maxLevel ? 'jm_full' : item.requireSuccess ? 'jm_opened' :  ''"
            ></a>
            <div v-if="item.nowLevel >= item.lnLevel" :class="'ln ln' + item.id"></div>
        </div>
    </div>
</template>

<script>
import store from "../../../store";
export default {
    name: "weidao",
    data() {
        return {
            jingmai: [
                { name: "带脉·维道", id: 127, lnLevel: 2 },
                { name: "带脉·浮白", id: 121, lnLevel: 1 },
                { name: "带脉·阳白", id: 124, lnLevel: 1 },
                { name: "带脉·完骨", id: 122, lnLevel: 1 },
                { name: "带脉·本神", id: 123, lnLevel: 1 },
                { name: "带脉·正营", id: 119, lnLevel: 3 },
                { name: "带脉·脑空", id: 129, lnLevel: 3 },
                { name: "带脉·外丘", id: 154, lnLevel: 0 },
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
            let jingmai = JSON.parse(JSON.stringify(this.jingmai));
            jingmai.forEach((item) => {
                for (let def of define) {
                    if (item.name == def.name) {
                        item = Object.assign(item, def);
                    }
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
        action() {
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