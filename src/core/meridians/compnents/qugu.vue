<template>
    <div class="jinmai qugu" style>
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
                :class="item.id == hover ? 'jm_mouse' : item.nowLevel == item.maxLevel ? 'jm_full' : item.requireSuccess ? 'jm_opened' :  ''"
            ></a>
            <div v-if="item.nowLevel >= item.lnLevel" :class="'ln ln' + item.id"></div>
        </div>
    </div>
</template>

<script>
import store from "@/store/meridians";
export default {
    name: "qugu",
    data() {
        return {
            jingmai: [
                { name: "任脉·曲骨", id: 62, lnLevel: 2 },
                { name: "任脉·中极", id: 63, lnLevel: 1 },
                { name: "任脉·关元", id: 64, lnLevel: 1 },
                { name: "任脉·石门", id: 65, lnLevel: 1 },
                { name: "任脉·阴交", id: 66, lnLevel: 1 },
                { name: "任脉·神阙", id: 67, lnLevel: 1 },
                { name: "任脉·水分", id: 68, lnLevel: 1 },
                { name: "任脉·下脘", id: 69, lnLevel: 1 },
                { name: "任脉·建里", id: 70, lnLevel: 2 },
                { name: "任脉·中脘", id: 71, lnLevel: 2 },
                { name: "任脉·上脘", id: 72, lnLevel: 1 },
                { name: "任脉·巨阙", id: 73, lnLevel: 3 },
                { name: "任脉·鸠尾", id: 74, lnLevel: 1 },
                { name: "任脉·中庭", id: 75, lnLevel: 0 },
                { name: "任脉·膻中", id: 76, lnLevel: 0 },
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
            let select = store.state.selectMeridians
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