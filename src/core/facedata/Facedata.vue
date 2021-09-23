<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="妆容解析"
            slug="facedata"
            root="/app/facedata"
            :feedbackEnable="true"
            :crumbEnable="true"
        >
            <img slot="logo" svg-inline :src="getIcon('facedata')" />
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-facedata">
                <div class="m-face-parse" :class="{on : done}" >
                    <h1 class="m-face-parse-title">捏脸数据解析器</h1>
                    <Upload @success="handleSuccess" />
                    <Facedat class="m-face-parse-preview" :data="json" :lock="false" v-show="done"/>
                </div>
            </div>
            <!-- <Footer></Footer> -->
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Facedat from "@jx3box/jx3box-facedat/src/Facedat";
import Upload from "@jx3box/jx3box-facedat/src/Upload";
import {__imgPath} from '@jx3box/jx3box-common/data/jx3box.json'
export default {
    name: "Facedata",
    props: [],
    data: function () {
        return {
            data: "",
            done: false,
        };
    },
    computed: {
        json: function () {
            return this.data && this.data.json;
        },
    },
    methods: {
        getIcon(key){
            return __imgPath + 'image/box/' + key + '.svg'
        },
        handleSuccess: function (data) {
            this.data = data;
            if(data?.json){
                this.done = true
            }else{
                this.done = false
            }
        },
    },
    mounted: function () {},
    components: {
        Facedat,
        Upload,
        Nav,
    },
};
</script>

<style lang="less">
@import "../../assets/css/facedata.less";
</style>
