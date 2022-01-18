<template>
    <div class="m-icons-emo">
        <div class="m-icons-nav">
            <div
                class="u-btn"
                :class="i == index ? 'active' : ''"
                v-for="(item, i) in emoList"
                :key="i"
                @click="toChangeEmo(i, item)"
            >
                <span>
                    {{ item.group_name }} <b>（{{ item.items.length }}）</b>
                </span>
            </div>
        </div>
        <div class="m-icons-list">
            <el-image
                class="u-img"
                v-for="emoji in emoList[index].items"
                :key="emoji.emotion_id"
                :title="`${EmojiPath}${emoji.filename}`"
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
        <div class="m-download-btns">
            <el-button
                :loading="isDownloadingEmoji"
                type="primary"
                plain
                @click.native.stop="handleDownloadEmoji('zip')"
                icon="el-icon-download"
            >
                下载zip
            </el-button>
            <el-button
                :loading="isDownloadingEmoji"
                type="primary"
                plain
                @click.native.stop="handleDownloadEmoji('eif')"
                icon="el-icon-download"
            >
                下载QQ表情包
            </el-button>
        </div>
    </div>
</template>
<script>
import { getEmoList } from "@/service/icons.js";
import { __iconPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "emo",
    props: ["list"],
    data: function () {
        return {
            emoList: [],
            index: 0,
            active: '',
            EmojiPath: __iconPath + "emotion/output/",
            isDownloadingEmoji: false,
        };
    },
    computed: {

    },
    watch: {},
    methods: {
        getData() {
            getEmoList().then((res) => {
                this.emoList = res;

                this.active = res[0]
            });
        },
        toChangeEmo(i, item) {
            this.index = i;
            this.active = item;
        },
        handleDownloadEmoji(fileType) {
            this.isDownloadingEmoji = true;

            const { EmojiPath, active } = this

            let link = document.createElement("a");
            link.href = `${EmojiPath}${active.group_name}.${fileType}`;
            link.download = `${active.group_name}.${fileType}`;
            link.click();

            this.isDownloadingEmoji = false;
        },
    },
    filters: {},
    created: function () {
        this.getData();
    },
    mounted: function () {},
};
</script>

style <style lang="less">
.m-download-btns {
    // display: flex;
    // align-content: center;
    text-align: center;
}
</style>
