<template>
    <div class="m-info">
        <!-- logo -->
        <a class="u-channel" :href="APP_INFO.link">
            <slot name="logo"></slot>
            <span class="u-title">{{APP_INFO.name}}</span>
        </a>
        <!-- stat -->
        <div class="u-stat">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Info",
    props: ['APP_INFO'],
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    mounted: function() {}
};
</script>

<style lang="less">
</style>
