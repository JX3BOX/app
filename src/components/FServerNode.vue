<template>
    <div
        class="server-node"
        :style="{ width: `${width}px`, '--leftVar': pseudoElementLeft, '--rightVar': pseudoElementRight }"
        @mouseover="serverHovered = true"
        @mouseleave="serverHovered = false"
    >
        <div class="button-wrapper">
            <el-button
                plain
                style="width: 100%;"
                class="server-button"
                :class="{ 'server-online': status === 'online', 'server-offline': status === 'offline', 'server-pinned': pinned }"
                @click="$emit('toogle-server', name)"
            >
                {{ name }}
            </el-button>
        </div>
        <div class="text-wrapper">
            <span>{{ zone }} | {{ main }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FServerNode',
    components: {},
    props: {
        width: {
            type: Number,
            default: 200
        },
        pinned: {
            type: Boolean,
            default: false
        },
        // 服务器状态，'hidden'不显示,'online'开服,'offline'未开服
        status: {
            type: String,
            default: 'online'
        },
        // 服务器名
        name: {
            type: String,
            default: ''
        },
        // 大区
        zone: {
            type: String,
            default: ''
        },
        // 主服务器名
        main: {
            type: String,
            default: ''
        },
        // 服务器地址
        address: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            key: 1
        };
    },
    computed: {
        pseudoElementLeft() {
            return `calc((${this.width}px - ${this.name.length}em) / 4)`;
        },
        pseudoElementRight() {
            return `calc((3 * ${this.width}px + ${this.name.length}em) / 4 - 16px)`;
        }
    },
    methods: {}
};
</script>

<style scoped lang="less">
.text-wrapper {
    text-align: center;
    font-size: 12px;
    color: #999;
}
.server-button::before {
    content: '';
    position: absolute;
    height: 10px;
    width: 10px;
    left: var(--leftVar);
    top: 15px;
    visibility: hidden;
}
.server-button::after {
    content: '';
    position: absolute;
    background: url(https://console.cnyixun.com/img/app/pin.svg) no-repeat center center;
    background-size: contain;
    height: 16px;
    width: 16px;
    left: var(--rightVar);
    top: 12px;
    visibility: hidden;
}
.server-button:focus {
    color: #606266;
    border-color: #c6c9cf;
}
.server-button:hover {
    color: black;
    border-color: #409eff;
    ::after {
        visibility: visible;
    }
}
.server-online::before {
    visibility: visible;
    background-color: lawngreen;
}
.server-offline::before {
    visibility: visible;
    background-color: #aaa;
}
.server-pinned::after {
    visibility: visible;
}
.server-pinned:hover::after {
    filter: saturate(0);
}
</style>
