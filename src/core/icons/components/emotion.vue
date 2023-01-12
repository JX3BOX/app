<template>
    <div class="m-emotion">
        <div class="m-emotion-nav">
            <div
                class="u-btn"
                :class="{ active: item.group_id === active.group_id }"
                v-for="(item, i) in emoList"
                :key="i"
                @click="toChangeEmo(item)"
            >
                <span>
                    {{ item.group_name }} <b>（{{ item.items.length }}）</b>
                </span>
            </div>
        </div>
        <div class="m-emotion-list">
            <el-image
                class="u-img"
                v-for="emoji in active.items"
                :key="emoji.emotion_id"
                v-bind:alt="emoji.key"
                :title="`${emoji.key}`"
                :src="`${EmojiPath}${emoji.filename}`"
            >
                <div slot="placeholder" class="image-slot">
                    <i class="el-icon-loading"></i>
                </div>
                <div slot="error" class="image-slot">
                    <i class="el-icon-warning-outline"></i>
                </div>
            </el-image>
        </div>
        <div class="m-emotion-download">
            <el-button
                class="u-btn"
                :loading="isDownloadingEmoji"
                type="primary"
                @click.native.stop="handleDownloadEmoji('zip')"
                icon="el-icon-download"
            >
                下载压缩包 (.zip)
            </el-button>
            <!-- <el-button
                class="u-btn"
                :loading="isDownloadingEmoji"
                type="primary"
                @click.native.stop="handleDownloadEmoji('eif')"
                icon="el-icon-download"
            >
                下载QQ表情包
            </el-button> -->
        </div>
    </div>
</template>
<script>
import { getEmoList } from "@/service/icons.js";
import { __dataPath, __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "emotion",
    props: ["list"],
    data: function () {
        return {
            emoList: [],
            active: "",
            EmojiPath: __imgPath + "emotion/output/",
            EmotionRoot: __imgPath + "emotion/",
            isDownloadingEmoji: false,
        };
    },
    computed: {},
    methods: {
        getData() {
            getEmoList().then((res) => {
                this.emoList = res;

                const search = new URLSearchParams(location.search);
                const type = search.get("type");

                if (type) {
                    this.active = this.emoList.find((item) => item.group_name == type);
                } else {
                    this.active = res[0];
                }
            });
        },
        toChangeEmo(item) {
            this.active = item;
        },
        handleDownloadEmoji(fileType) {
            this.isDownloadingEmoji = true;

            const { EmotionRoot, active } = this;

            let link = document.createElement("a");
            link.href = `${EmotionRoot}${fileType}/${active.group_name}.${fileType}`;
            link.download = `${active.group_name}.${fileType}`;
            link.click();

            this.isDownloadingEmoji = false;
        },
    },
    filters: {},
    created: function () {
        this.getData();
    },
};
</script>

<style lang="less">
@import "~@/assets/css/icons/emotion.less";
</style>
