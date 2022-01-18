<template>
    <div class="u-icons-item">
        <div class="u-pic">
            <el-image class="u-img" :src="iconPath(icon)">
                <i slot="error" class="el-icon-warning-outline u-error"></i>
            </el-image>
            <div class="u-mark" @click="setFav(icon)" v-if="!isFav">
                <el-tooltip class="u-love" :disabled="!icon.id" :content="iconName(icon)" placement="top-start">
                    <i class="w-heart" :class="{ 'w-heart-animation': onFav(icon) }"></i>
                </el-tooltip>
            </div>
            <span class="u-remove" v-else @click="removeFav(icon)"></span>
        </div>

        <span class="u-copy" v-if="!isFav" v-clipboard:copy="icon" v-clipboard:success="onCopy" v-clipboard:error="onError" title="点击快速复制">{{ iconId(icon) }}</span>
        <span v-else>{{ iconId(icon) }}</span>
    </div>
</template>

<script>
import { __iconPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { setMyFavIcons } from "@/service/icons.js";
import User from "@jx3box/jx3box-common/js/user.js";
export default {
    name: 'iconItem',
    props: {
        icon: {
            type: [Object, String, Number],
            default: () => {}
        },
        // 是否为收藏图标
        isFav: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        client: function () {
			return this.$store.state.client;
		},
        favList: function (){
            return this.$store.state.favList || []
        },
        uid: function () {
			return User.isLogin() ? User.getInfo().uid : 0;
		},
    },
    methods: {
        // 收藏
        setFav(icon) {
            const favList = [...this.favList];

            const _icon = this.iconId(icon)

            if (!favList.includes(_icon)) {
                favList.push(_icon);
            }

            this.postFav(favList)
        },
        // 取消收藏
        removeFav(icon) {
            let favList = [...this.favList]

            favList = favList.filter(item => item !== this.iconId(icon))

            this.postFav(favList)
        },
        async postFav(favList) {
            const icons = favList.join(',')
            try {
                if (this.uid) {
                    await setMyFavIcons(icons,  this.client)
                }
            } catch(e) {
                console.error(e)
            } finally {
                localStorage.setItem('favList', JSON.stringify(favList))

                this.$store.commit('storeFav', favList)
            }
        },
        // icon名称
        iconName(val) {
            return val?.name || String(val)
        },
        onFav(val) {
            val = (val?.id) || val
			return this.favList.includes(String(val));
        },
        iconPath(val) {
			val = val?.id || val;
			return this.client === "origin" ? `${__iconPath}origin_icon/${val}.png` : `${__iconPath}icon/${val}.png`;
		},
        iconId(icon) {
            return typeof icon == "object" ? String(icon.id) : String(icon);
        },
        onCopy: function(val) {
            val = this.iconId(val.value);
            this.$notify({
                title: "复制成功",
                message: "复制内容 : " + val,
                type: "success",
            });
        },
        onError: function() {
            this.$notify.error({
                title: "复制失败",
                message: "请手动复制",
            });
        },
    },
    filters: {
        
    }
}
</script>