<template>
    <div class="jinmai qixue" style>
        <h3>经外奇穴</h3>
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
    name: "qixue",
    data() {
        return {
            jingmai: [
                { name: "督脉·睛中", id: 43, lnLevel: 0 },
                { name: "带脉·龙玄", id: 45, lnLevel: 0 },
                { name: "督脉·抬肩", id: 42, lnLevel: 0 },
                { name: "冲脉·极泉", id: 46, lnLevel: 0 },
                { name: "任脉·崇骨", id: 35, lnLevel: 0 },
                { name: "任脉·下极俞", id: 9, lnLevel: 0 },
                { name: "督脉·腰眼", id: 41, lnLevel: 0},
                { name: "带脉·曲泉", id: 44, lnLevel: 0},
                { name: "冲脉·合阳", id: 170, lnLevel: 0},
                { name: "任脉·气端", id: 40, lnLevel: 0},
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