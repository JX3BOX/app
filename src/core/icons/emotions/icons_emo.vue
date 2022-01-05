<template>
    <div class="m-icons-emo">
        <div class="m-icons-nav">
            <div class="u-btn" :class="i == index ? 'active' : ''" v-for="(item, i) in emoList" :key="i" @click="toChangeEmo(i)">
                <span>
                    {{ item.name }} <b>（{{ item.total }}）</b>
                </span>
            </div>
        </div>
        <div class="m-icons-list" v-if="emoList.length > 0">
            <el-image class="u-img" v-for="(emoji, i) in emoList[index].total" :key="emoji" :src="`${EmojiPath}${emoList[index].name}/${i}.gif`">
                <!-- 这里要用index, 因为这里for遍历的是数字，emoji值会从1开始，而index还是从0开始 -->
                <div slot="placeholder" class="image-slot">
                    <i class="el-icon-loading"></i>
                </div>
                <div slot="error" class="image-slot">
                    <i class="el-icon-warning-outline"></i>
                </div>
            </el-image>
        </div>
        <el-button :loading="isDownloadingEmoji" type="primary" plain @click.native.stop="handleDownloadEmoji" icon="el-icon-download" class="btn-download-emoji">
            <div class="m-emotion-down">
                <b>立即下载</b>
            </div>
        </el-button>
    </div>
</template>
<script>
import { getEmoList } from "@/service/icons.js";
import { __iconPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "emo",
    props: ["list"],
    data: function() {
        return {
            emoList: "",
            index: 0,
            EmojiPath: __iconPath + "emotion/emotions/",
            isDownloadingEmoji: false,
        };
    },
    computed: {},
    watch: {},
    methods: {
        getData() {
            getEmoList().then((res) => {
                this.emoList = res;
            });
        },
        toChangeEmo(i) {
            this.index = i;
        },
        handleDownloadEmoji() {
            this.isDownloadingEmoji = true;
            let link = document.createElement("a");
            link.href = `${this.EmojiPath}${this.emoList[this.index].name}.zip`;
            link.download = `${this.emoList[this.index].name}.zip`;
            link.click();
            this.isDownloadingEmoji = false;
        },
    },
    filters: {},
    created: function() {
        this.getData();
    },
    mounted: function() {},
};
</script>
