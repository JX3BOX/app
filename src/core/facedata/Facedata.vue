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
            <img
                slot="logo"
                svg-inline
                src="../../assets/img/logos/mirror.svg"
            />
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-facedata">
                <div class="m-face-parse">
                    <h1 class="m-face-parse-title">捏脸数据解析器</h1>
                    

                    <div class="m-face-parse-preview">
                        <result v-if="facedata" :data="facedata" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import result from "@jx3box/jx3box-facedat/src/Facedat.vue"
const { parse } = require("lua-json");

export default {
    name: "Facedata",
    props: [],
    data: function() {
        return {
            data: "",
            support: !!FileReader,
            facedata: "",
        };
    },
    computed: {},
    methods: {
        // 上传数据
        selectData: function(i) {
            let fileInput = document.getElementById("face_file");
            fileInput.dispatchEvent(new MouseEvent("click"));
        },
        uploadData: function(e) {
            // let formdata = new FormData();
            let file = e.target.files[0];
            this.data = file;
            this.parseData(file);
        },
        // 解析数据
        parseData: function(facedata) {
            const vm = this;

            let fr = new FileReader();
            fr.readAsText(facedata);
            fr.onload = function(e) {
                console.log("读取成功...开始执行分析...");

                let data = e.target.result;
                data = "return" + data.slice(data.indexOf("{"));

                try {
                    vm.facedata = JSON.stringify(parse(data));
                    vm.$notify({
                        title: "成功",
                        message: "脸型数据解析成功",
                        type: "success",
                    });
                } catch (e) {
                    vm.$notify.error({
                        title: "错误",
                        message: "无法解析脸型数据",
                    });
                }
            };
            fr.onerror = function(e) {
                vm.$notify.error({
                    title: "错误",
                    message: "无法解析脸型数据",
                });
            };
        },
    },
    filters: {},
    created: function() {},
    components: {
        result,
        Nav,
    },
};
</script>

<style lang="less">
@import "../../assets/css/facedata.less";
</style>
