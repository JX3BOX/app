<template>
  <div class="jinmai dahe" style="">
        <h3>冲脉</h3>
        <div v-for="(item, index) in jingmai" :key="index" :class="'ap ap' + item.id">
            <em :class="'level' + item.nowLevel"></em>
            <a href="javascript:void(0)" 
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
    name: 'dahe',
    data(){
        return {
            jingmai: [
                {name: '冲脉·大赫', id: 163, lnLevel: 3},
                {name: '冲脉·商曲', id: 158, lnLevel: 2},
                {name: '冲脉·阴都', id: 165, lnLevel: 1},
                {name: '冲脉·幽门', id: 167, lnLevel: 1},
                {name: '冲脉·太乙', id: 169, lnLevel: 0},
            ],
            mouseData: {},
            hover: ''
        }
    },
    computed: {
    },
    created() {
        this.init()
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
                this.hover = item.id
            }
            let style = window.getComputedStyle(this.$refs.detail[index], null)
            let data = {}
            data.left = parseInt(style.left) + 430
            data.top = parseInt(style.top) + 60
            data = Object.assign(data, item)
            this.mouseData = data
            this.$emit('showDetail', data)
        },
        outDetail() {
            this.hover = ''
            this.$emit('outDetail',  {})
        },
        action() {
            this.$emit('action', this.mouseData)
        },
        setHover() {
            this.hover = ''
        },
        reduce(item) {
            this.$emit('reduce', item)
        },
    }
}
</script>

<style lang='less'>
//@import "../../../assets/css/meridians.less";
</style>