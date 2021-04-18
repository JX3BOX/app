<template>
    <div class="jinmai yaoshu" style="">
        <h3>督脉</h3>
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
import store from "../../../store";
export default {
    name: 'yaoshu',
    data(){
        return {
            jingmai: [
                {name: '督脉·腰俞', id: 92, lnLevel: 2},
                {name: '督脉·脊中', id: 95, lnLevel: 2},
                {name: '督脉·灵台', id: 99, lnLevel: 2},
                {name: '督脉·大椎', id: 112, lnLevel: 2},
                {name: '督脉·脑户', id: 115, lnLevel: 0},
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
            let define = store.state.defineMeridians
            let jingmai = JSON.parse(JSON.stringify(this.jingmai))
            jingmai.forEach(item => {
                for (let def of define) {
                    if (item.name == def.name) {
                        item = Object.assign(item, def)
                    }
                }
            })
            this.jingmai = jingmai
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