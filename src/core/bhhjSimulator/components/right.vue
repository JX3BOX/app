<template>
<div class="m-bahuang-rightBox">
    <div class="u-bahuang-r-title">
        <span>心决</span> 
        <div class="m-bahuang-r-citta">
            <div class="u-bahuang-citta">
                <el-select v-model="selectOptions.citta" placeholder="请选择门派" @change="cittaChange">
                    <el-option v-for="item in selectOptions.cittaArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
            </div>
        </div>
    </div>
<!--    心决-->
    
<!--    心决效果-->
    <span class="u-tips" v-show="!cittaEffect">
        尚未选择
    </span>
    <div class="m-citta" v-show="cittaEffect.length>0">
        <div class="m-citta-box" v-for="(item,i) in cittaEffect" :key="'xj'+i">
            <img class="u-bahuang-img" :src="item.IconID|skillIcon(item.IconID)" />
            <div class="u-content">
                <div class="u-name">{{item.Name}}</div>
                <div class="u-desc">{{item.Desc}}</div>
            </div>
        </div>
    </div>
<!--秘术-->
    <div class="u-bahuang-r-title">秘术<br/>
        <span class="u-tip">(左键选择激活，右键可删除秘术)</span>
    </div>
<!--    秘术区域-->
    <div class="m-bahuang-r-arcane" :class="isLogin?'m-r-arcane-box':''">
<!--       秘术展示-->
        <span class="u-tips" v-show="selectOptions.arcane.length===0">
            尚未选择
        </span>
        <div class="u-skill" v-for="(item,i) in selectOptions.arcane" :key="'a'+i" @contextmenu.prevent.capture='rightCancel(item,i,1)'>
            <skill :info="item.info" :select="item.select_r" :skillType="false" class="u-skill" @click.native="skillClick(item,i)"/><br/>
            <span>{{item.info.Name}}</span>
        </div>

    </div>
    <!--    激活秘术信息展示区域-->
    <div class="u-bahuang-r-title">已激活秘术</div>
    <div class="m-arcane-active">

        <div v-for="(item,i) in selectOptions.arcane" :key="'aa'+i" :class="item.select_r?'u-arcane-active':''">
            <div class="u-content" v-if="item.select_r">
                <span class="u-name">
                    {{item.info.Name}}:
                    <span class="u-desc">{{item.info.Desc}}</span>
                </span>
            </div>
        </div>
    </div>
    <!--    秘技4个-->
    <div class="u-bahuang-r-title">秘技
        <br/>
        <span class="u-tip">(右键可删除秘技)</span></div>
    <div class="m-bahuang-r-cheats">
        <span class="u-tips" v-show="selectOptions.cheats.length===0">
            尚未选择
        </span>
        <div class="u-bahuang-cheats" v-for="(item,i) in selectOptions.cheats" :key="'c'+i"  @contextmenu.prevent.capture='rightCancel(item,i,2)'>
            <skill  :info="item.info" :select="item.info.select" :skillType="true" class="u-skill" />
        </div>

    </div>

    <!--    绝技1个-->
    <div class="u-bahuang-r-title">绝技</div>
    <div class="m-bahuang-r-stunt">
        <span class="u-tips" v-show="selectOptions.stunt.length===0">
            尚未选择
        </span>
        <skill v-for="(item,i) in selectOptions.stunt" :key="'s'+i" :info="item.info" :select="item.info.select" :skillType="true" class="u-skill" />
    </div>
    <div class="m-btn">
        <el-button class="u-btn" type="primary" icon="el-icon-document-add" v-if="isLogin" @click="saveScheme(1)">保存为预设</el-button>
        <el-button class="u-btn" type="primary" icon="el-icon-document-add" v-if="isLogin && isEdit" @click="saveScheme(2)">另存为</el-button>
    </div>


</div>
</template>

<script>
import {iconLink} from "@jx3box/jx3box-common/js/utils";
import skill from './skill'
import User from "@jx3box/jx3box-common/js/user";
export default {
    name: "right",
    components: {
        skill
    },
    props:{
        selectOptions:{
            type:Object,
            default:function(){
                return {
                        arcane:[],
                        cheats:[],
                        stunt:[]
                }
            }
        },
        isEdit:{
            type:Boolean,
            default:false
        }
    },
    watch:{
        selectOptions: { // 对对象进行深度监听
            handler(n,o) {
               if(n.citta !== null){
                   this.cittaEffect=n.cittaArr[n.citta].content
               }
            },
            immediate: true,
            deep: true
        },
    },
    data: function() {
        return {
            cittaEffect:[],
            visible:false,
            isLogin: User.isLogin(),
        };
    },
    computed:{
        uid: function () {
            return this.$store.state.uid;
        },
    },
    filters: {
        skillIcon: function(id) {
            if(!id) return  '';
            return iconLink(id, 'origin');
        },
    },
    created() {

    },
    methods:{
        cittaChange(val){
            this.cittaEffect=this.selectOptions.cittaArr[val].content
        },
        skillClick(item,i){
            this.$emit('skillClick',{info:item,index:i})
        },
        // getActiveArcane(arcane){
        //     let arr=[]
        //     for(let i=0;i<arcane.length;i++){
        //         if(arcane[i].select_r){
        //             arr.push(arcane[i])
        //         }
        //     }
        //     return arr;
        // },
        openScheme(){
            this.$emit("update-drawer", true);
        },
        /**
         * 保存
         * @param type 1 保存 2编辑状态另存为
         */
        saveScheme(type){
            this.$emit('saveScheme',{type:type})
        },
        rightCancel(item,i,type){
            this.$emit('icoRemove',{item:item,index:i,type:type})
        }
    }
}
</script>

<style scoped lang="less">
@import "../../../assets/css/bhhjSimulator/right.less";
</style>
