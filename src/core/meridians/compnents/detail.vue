<template>
    <div
        :class="detail.maxLevel ? 'detail' : 'detail detailMai'"
        :style="'position: absolute; left: ' + detail.left + 'px; top: ' + detail.top +'px'"
        v-if="showType"
    >
        <div class="title">
            <h3>{{detail.name}}</h3>
            <span v-if="detail.maxLevel">第{{detail.nowLevel}}/{{detail.maxLevel}}重</span>
        </div>
        <div class="now" v-if="detail.nowLevel > 0">
            <p>当前重：</p>
            <span>{{detail.desc[detail.nowLevel - 1]}}</span>
        </div>
        <template v-if="!detail.maxLevel">
            <p>{{detail.content}}</p>
            <p v-if="detail.title == '奇穴'">{{detail.content1}}</p>
        </template>
        <template v-else-if="detail.nowLevel == detail.maxLevel">
            <p>此招式已练到最高境界。</p>
        </template>
        <template v-else>
            <div class="require">
                <p>需要等级：{{detail.requireLevel}}</p>
                <span>消耗修为：{{detail.requirePower[detail.nowLevel]}}</span>
            </div>
            <div class="probability">
                <!-- <p>成功率：{{detail.data[detail.nowLevel].probability}}</p>
                <span v-if="detail.data[detail.nowLevel].probability != '100%'">失败后返还修为：{{detail.data[detail.nowLevel].fail}}</span>-->
            </div>
            <div class="premise" v-if="detail.requireNode.length > 0">
                需要需要已经打通：
                <span
                    v-for="(item, index) in detail.requireNode"
                    :key="index"
                    :style="item.state ? 'color: #fff' : 'color: red'"
                >{{item.name}}第{{item.level}}重</span>
            </div>
            <div class="describe">{{detail.desc[detail.nowLevel]}}</div>
        </template>
    </div>
</template>

<script>
import store from "../../../store";
import define from "../data/v1";
export default {
    name: "detail",
    props: ["detailData"],
    data() {
        return {
            define: define,
            selectedView: {},
            showType: false,
            detail: {},
        };
    },
    computed: {},
    watch: {
        detailData: {
            handler(newValue) {
                if (newValue.name != "") {
                    this.showType = true;
                    this.detail = newValue;
                } else {
                    this.showType = false;
                }
            },
            deep: true,
        },
    },
    created() {},
    medhods: {},
};
</script>

<style>
</style>