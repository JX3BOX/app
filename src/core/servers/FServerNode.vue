<template>
    <div class="server-node" :style="{ width: `${width}px`, '--leftVar': pseudoElementLeft, '--rightVar': pseudoElementRight }">
        <div class="button-wrapper">
            <el-tooltip class="item" effect="dark" :content="`${server.ipAddress}:${server.ipPort}`" placement="top" popper-class="tooltip-ipaddress">
                <el-button
                    plain
                    style="width: 100%;"
                    class="server-button"
                    :class="{ 'server-online': server.connectState, 'server-offline': !server.connectState, 'server-pinned': pinned }"
                    @click="$emit('toogle-server', server.serverName)"
                >
                    {{ server.serverName }}
                    <span style="color:red" v-if="server.serverName === server.mainServer">[主]</span>
                </el-button>
            </el-tooltip>
        </div>
        <div class="text-wrapper">
            <span>{{ server.zoneName }} | {{ server.mainServer }}</span>
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
        server: {
            type: Object,
            default: () => {
                return {
                    connectState: true,
                    ipAddress: '120.92.176.35',
                    ipPort: '3724',
                    mainServer: '天鹅坪',
                    serverName: '双剑合璧',
                    zoneName: '双线一区'
                };
            }
        },
        pinned: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            key: 1
        };
    },
    computed: {
        pseudoElementLeft() {
            if (this.server.serverName === this.server.mainServer) {
                return `calc((${this.width}px - ${this.server.serverName.length+2}em) / 4)`;
            }
            return `calc((${this.width}px - ${this.server.serverName.length}em) / 4)`;
        },
        pseudoElementRight() {
            return `calc((3 * ${this.width}px + ${this.server.serverName.length+2}em) / 4 - 16px)`;
        },
    },
    methods: {}
};
</script>

<style scoped lang="less">
.server-node {
    margin: 0 10px 20px 10px;
}
.text-wrapper {
    text-align: center;
    font-size: 12px;
    color: #999;
}
.server-button {
    position: relative;
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
    background: url('../../assets/img/servers/pin.svg') no-repeat center center;
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
}
.server-button:hover::after {
    visibility: visible;
    filter: url(../../assets/img/servers/pin.svg#change);
}
.server-online::before {
    visibility: visible;
    background-color: rgb(0,200,0);
}
.server-offline::before {
    visibility: visible;
    background-color: #aaa;
}
.server-pinned::after {
    visibility: visible;
    filter: url(../../assets/img/servers/pin.svg#change);
}
.server-pinned:hover::after {
    filter: blur(1px);
    opacity: 0.5;
}
</style>
<style lang="less">
.tooltip-ipaddress {
    font-size: 14px !important;
    line-height: 0.8;
}
</style>
