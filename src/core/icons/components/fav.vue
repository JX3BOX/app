<template>
    <div class="m-icons-fav">
        <el-alert class="m-icons-tips" v-if="!favList.length" title="没有收藏的图标，请搜索图标进行添加。" type="info" center show-icon></el-alert>

        <div class="m-icons-matrix" v-else>
            <icon-item v-for="(icon, index) in favList" :icon="icon" :isFav="true" :key="index"></icon-item>
        </div>
    </div>
</template>

<script>
import { getMyFavIcons } from "@/service/icons.js";
import User from "@jx3box/jx3box-common/js/user.js";
import iconItem from "./item.vue";
export default {
    name: "fav",
    props: [],
    components: {
        iconItem,
    },
    data() {
        return {
            favList: [],
        }
    },
    computed: {
        uid: function() {
            return User.isLogin() ? User.getInfo().uid : 0;
        },
        storeFavList: function() {
            return this.$store.state.favList || [];
        },
    },
    watch: {
        storeFavList: {
            deep: true,
            immediate: true,
            handler() {
                 if (this.storeFavList.length) {
                    this.favList = this.storeFavList;
                } else if (localStorage.getItem("favList")) {
                    try {
                        const favList = localStorage.getItem("favList");
                        this.favList = JSON.parse(favList);
                    } catch(e) {
                        localStorage.setItem('favList', '')
                    }
                }
            }
        }
    },
    methods: {
        async getFavIcons() {
            let favList = [];
            if (this.uid) {
                // 从服务器读取
                await getMyFavIcons(this.client).then((data) => {
                    let serverValue = data;
                    if (serverValue) {
                        // 判断是否是旧版数据
                        if (serverValue.includes("[")) {
                            serverValue = serverValue.replace(/[\[\]"\ ]/g, "");
                        }
                        favList = serverValue.split(",");
                        try {
                            let localFavList = localStorage.getItem("favList");
    
                            if (localFavList) {
                                localFavList = JSON.parse(localFavList);
                                favList = Array.from(new Set([...favList, ...localFavList]));
                            }
                        } catch (e) {}
                    }
                });
            }
            
            localStorage.setItem("favList", JSON.stringify(favList));
            this.$store.commit("storeFav", favList);
        },
    },
    mounted() {
        this.getFavIcons();
    },
};
</script>
