<template>
    <el-card class="m-server-card">
        <div class="m-server-card__header" slot="header">
            <b class="u-title">{{ data.main_server }}</b>
            <el-button class="u-action" @click="favHandle" plain size="mini" :type="isSaved ? 'info' : ''">{{ isSaved ?
                    "取消" : ""
            }}收藏</el-button>
        </div>
        <div class="m-server-card__content">
            <div class="u-item u-status">
                <span>当前状态:</span>
                <b :class="data.connect_state ? 'isOpen' : 'isClose'">{{ data.connect_state_name }}</b>
            </div>
            <div class="u-item u-ip"><span>IP:</span>{{ data.ip_address }}</div>
            <div class="u-item u-time"><span>最近维护时间:</span>{{ dayjs(data.maintain_time * 1000).format('YYYY-MM-DD HH:mm:ss') }}</div>
        </div>
    </el-card>
</template>

<script>
import dayjs from 'dayjs'
export default {
    props: ["data", "favList"],
    computed: {
        isSaved() {
            return this.favList.filter((item) => item.main_server.indexOf(this.data.main_server) !== -1).length > 0
        }
    },
    methods: {
        dayjs,
        favHandle() {
            this.$emit("clickServer", this.data);
        },
    },
};
</script>

<style lang="less">
.m-server-card {
    .w(260px);
}

.m-server-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .u-title {
        .fz(15px);
        .bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
}

.m-server-card__content {
    .u-status {
        .fz(12px);

        b {
            .bold;
        }

        .isOpen {
            color: #70b603;
        }

        .isClose {
            color: #aaa;
        }
    }

    .u-item {
        span {
            .mr(5px);
        }
    }
}
</style>
