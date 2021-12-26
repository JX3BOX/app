<template>
    <div>
        <el-input placeholder="点击自动复制" v-model="code" v-clipboard:copy="code" v-clipboard:success="onCopy" v-clipboard:error="onError">
            <template slot="prepend">{{ config.desc + "·" + config.name }}</template>
            <template slot="append">点击复制</template>
        </el-input>
    </div>
</template>

<script>
export default {
    name: "schema",
    props: ["config", "version", "xf"],
    data: function() {
        return {};
    },
    computed: {
        code: function() {
            let _code = {
                version: this.version,
                xf: this.xf,
                sq: this.config.sq,
            };
            console.log(JSON.stringify(_code));
            return JSON.stringify(_code);
        },
    },
    methods: {
        onCopy: function(val) {
            this.$notify({
                title: "复制成功",
                message: "奇穴编码复制成功",
                type: "success",
            });
        },
        onError: function() {
            this.$notify.error({
                title: "复制失败",
                message: "请手动复制",
            });
        },
    },
    mounted: function() {},
    components: {},
};
</script>
