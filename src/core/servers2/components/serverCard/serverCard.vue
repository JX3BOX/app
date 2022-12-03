<template>
    <el-card class="m-server-card">
        <div class="m-server-card__header" slot="header">
            <b class="u-title">{{ data.main_server }}</b>
            <el-button class="u-action" @click="favHandle" plain size="mini" :type="isSaved ? 'info' : ''"
                >{{ isSaved ? "取消" : "" }}收藏</el-button
            >
        </div>
        <div class="m-server-card__content">
            <div class="u-item u-status">
                <span>当前状态:</span>
                <b :class="data.connect_state ? 'isOpen' : 'isClose'">{{ data.connect_state_name }}</b>
            </div>
            <div class="u-item u-ip"><span>IP:</span>{{ data.ip_address }}</div>
            <div class="u-item u-time"><span>最近维护时间:</span>{{ getTime(data.maintain_time) }}</div>
        </div>
    </el-card>
</template>

<script>
export default {
    props: ["data", "isSaved"],
    computed: {
        getTime() {
            return (time) => {
                const date = new Date(time * 1000);
                const Y = date.getFullYear();
                const M = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                const D = date.getDate();
                const H = date.getHours();
                const m = date.getMinutes();
                return `${Y}-${M}-${D} ${H}:${m}`;
            };
        },
    },
    methods: {
        favHandle() {
            this.$emit("clickServer", this.data);
        },
    },
};
</script>

<style lang="less">
.m-server-card {
    .w(240px);
}
.m-server-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .u-title {
        .fz(15px);
        .bold;
    }
}
.m-server-card__content {
    .u-status {
        .fz(12px);
        b{
            .bold;
        }
        .isOpen {
            color: #70b603;
        }

        .isClose {
            color: #aaa;
        }
    }
    .u-item{
        span{
            .mr(5px);
        }
    }
}
</style>
