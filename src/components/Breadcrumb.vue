<template>
    <div class="c-breadcrumb">
        <!-- TODO:修改链接地址 -->
        <a class="u-channel" href="/">
            <!-- img class="u-channel-logo" svg-inline src="../assets/img/cj.svg" / -->
            <span class="u-title">栏目</span>
        </a>
        <!-- 统计数据 -->
        <div class="u-stat">
        </div>
        <!-- 发布按钮 -->
        <el-button
            class="u-publish"
            type="primary"
            icon="el-icon-edit"
        >发布</el-button>
    </div>
</template>
<script>
export default {
    name: "Breadcrumb",
    props: [],
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    mounted: function() {}
};
</script>

<style lang="less">
.c-breadcrumb {
    .u-stat {
        // // .x;
        // .fz(14px);

        // em {
        //     .mr(10px);
        //     // .bold;
        //     font-style: normal;
        // }
        // b {
        //     font-style: italic;
        //     color: @light-blue;

        //     &:after {
        //         content: "|";
        //         font-weight: 300;
        //         color: #999;
        //         .ml(10px);
        //         font-family: Georgia, "Times New Roman", Times, serif;
        //     }
        // }
        // span {
        //     .mr(10px);
        //     &:last-child b {
        //         &:after {
        //             .none;
        //         }
        //     }
        // }
    }
}
@media screen and (max-width:@ipad){
    .c-breadcrumb{
        .u-stat{
            white-space:nowrap;
            overflow:auto;
        }
    }
}
</style>
