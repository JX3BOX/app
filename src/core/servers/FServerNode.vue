<template>
    <el-col class="server-node" :span="3">
        <div class="button-wrapper">
            <el-tooltip
                class="item"
                effect="dark"
                :content="`${server.ipAddress}:${server.ipPort}`"
                placement="bottom"
                popper-class="tooltip-ipaddress"
                :disabled="!server.ipAddress || server.ipAddress === ''"
            >
                <el-button
                    :plain="!focused"
                    type="plain"
                    class="server-button"
                    :class="{ 'server-online': server.connectState, 'server-offline': server.connectState === false, 'server-pinned': pinned }"
                    @click="$emit('toogle-server', server.serverName, server.gate)"
                    ref="button"
                >
                    <!-- <i class="u-server-icon"><img svg-inline src="../../assets/img/servers/open.svg" /></i> -->
                    <i class="u-server-icon"></i>
                    {{ server.serverName }}
                    <span class="u-server-ismain" v-if="server.serverName === server.mainServer">[主]</span>
                </el-button>
            </el-tooltip>
        </div>
        <div class="text-wrapper" v-if="server.zoneName && server.zoneName !== ''">
            <span>{{ server.zoneName }} | {{ server.mainServer }}</span>
        </div>
    </el-col>
</template>

<script>
export default {
    name: "FServerNode",
    components: {},
    props: {
        width: {
            type: String,
            default: "auto",
        },
        server: {
            type: Object,
            default: () => {
                return {
                    connectState: null,
                    ipAddress: "",
                    ipPort: "",
                    mainServer: "",
                    serverName: "双剑合璧",
                    zoneName: "",
                };
            },
        },
        pinned: {
            type: Boolean,
            default: false,
        },
        focused: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            key: 1,
        };
    },
    computed: {},
    methods: {},
};
</script>
