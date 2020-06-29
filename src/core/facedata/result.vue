<template>
    <div class="m-facedat-preview" v-if="data">
        <el-tabs v-model="active" type="card">
            <el-tab-pane label="眼部轮廓" name="eye"
                ><div class="m-facedat-group">
                    <ul class="u-list">
                        <li v-for="(eye, i) in eyes" :key="eye + i">
                            <label>{{ eye.desc }}</label>
                            <span>{{ eye.value }}</span>
                            <input
                                type="range"
                                v-bind:min="eye.min"
                                v-bind:max="eye.max"
                                v-bind:value="eye.value"
                                disabled
                            />
                        </li>
                    </ul>
                </div></el-tab-pane
            >
            <el-tab-pane label="嘴部轮廓" name="mouth"
                ><div class="m-facedat-group">
                    <ul class="u-list">
                        <li v-for="(mouth, i) in mouthes" :key="mouth + i">
                            <label>{{ mouth.desc }}</label>
                            <span>{{ mouth.value }}</span>
                            <input
                                type="range"
                                v-bind:min="mouth.min"
                                v-bind:max="mouth.max"
                                v-bind:value="mouth.value"
                                disabled
                            />
                        </li>
                    </ul>
                </div></el-tab-pane
            >
            <el-tab-pane label="鼻子轮廓" name="nose"
                ><div class="m-facedat-group">
                    <ul class="u-list">
                        <li v-for="(nose, i) in noses" :key="nose + i">
                            <label>{{ nose.desc }}</label>
                            <span>{{ nose.value }}</span>
                            <input
                                type="range"
                                v-bind:min="nose.min"
                                v-bind:max="nose.max"
                                v-bind:value="nose.value"
                                disabled
                            />
                        </li>
                    </ul>
                </div></el-tab-pane
            >
            <el-tab-pane label="脸部轮廓" name="face"
                ><div class="m-facedat-group">
                    <ul class="u-list">
                        <li v-for="(face, i) in faces" :key="face + i">
                            <label>{{ face.desc }}</label>
                            <span>{{ face.value }}</span>
                            <input
                                type="range"
                                v-bind:min="face.min"
                                v-bind:max="face.max"
                                v-bind:value="face.value"
                                disabled
                            />
                        </li>
                    </ul>
                </div></el-tab-pane
            >
            <el-tab-pane label="贴花" name="decal"
                ><div class="m-facedat-decals nav-content" id="decals">
                    <div
                        class="m-facedat-group"
                        v-for="(decal,i) in decals"
                        :key="decal + i"
                    >
                        <h2 class="u-title">{{ decal.desc }}</h2>
                        <ul class="u-decals">
                            <li>
                                <img
                                    class="u-pic"
                                    :src="iconUrl(decal.icon)"
                                    :title="decal.dname"
                                    :alt="decal.dname"
                                />
                                <span class="u-dname">{{ decal.dname }}</span>
                            </li>
                        </ul>
                    </div>
                </div></el-tab-pane
            >
        </el-tabs>
    </div>
</template>

<script>
import { __ossMirror,__iconPath } from "@jx3box/jx3box-common/js/jx3box.json";
export default {
    name: "facedata",
    props: ["data"],
    data: function() {
        return {
            active: "eye",
            eyes: [],
            mouthes: [],
            noses: [],
            faces: [],
            decals: [],
        };
    },
    computed: {},
    methods: {
        iconUrl: function(id) {
            return __iconPath + "icon/" + id + ".png";
        },
    },
    filters: {},
    mounted: function() {
        if (this.data) {
            try {
                let facedata = JSON.parse(this.data);
                this.eyes = facedata.eye;
                this.mouthes = facedata.mouth;
                this.noses = facedata.nose;
                this.faces = facedata.face;
                this.decals = facedata.decal;
            } catch (e) {
                this.$notify.error({
                    title: "错误",
                    message: "脸型数据无法解析",
                });
            }
        }
    },
    components: {},
};
</script>
