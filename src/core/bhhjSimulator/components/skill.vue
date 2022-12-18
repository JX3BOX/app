<template>
    <div class="m-bahuang-skill">
        <!-- 技能图标及描述-->
        <div class="m-bahuang-icon m-shape" :class="[select?'bhhjSelect':'',!skillType?'m-bahuang-icon-y':'']"  @mouseover="popStatus(true)" @mouseleave="popStatus(false)" v-if="noPop">
            <img class="u-bahuang-img" :src="info.IconID|skillIcon(info.IconID)" />
        </div>
        <div class="m-bahuang-icon" :class="[select?'bhhjSelect':'',!skillType?'m-bahuang-icon-y':'']" v-else>
            <img class="u-bahuang-img" :src="info.IconID|skillIcon(info.IconID)" />
        </div>
        <!-- 弹窗描述 -->
        <span class="m-bahuang-pop" :class="showPop ? 'on' : ''">
                <b class="m-bahuang-name">
                    <span>{{ info.Name }}<small class="u-bahuang-id" >(ID: {{ info.IdKey }})</small></span>
                </b>
                <b class="m-bahuang-type">
                {{skillType?'主动技能':'被动招式'}}
                </b>
                <span class=" m-bahuang-desc">
                    {{ info.Desc }}
                </span>
            </span>
    </div>
</template>

<script>

import {iconLink} from "@jx3box/jx3box-common/js/utils";

export default {
    name: "sill",
    components: {},
    props: {
        info: {
            type: Object,
            default: function() {
                return {}
            }
        },
        select:{
            type:Boolean,
            default:false
        },
        skillType:{
            type:Boolean, //技能类型，true 主动 false 被动
            default:false
        },
        noPop:{
            type:Boolean,
            default:true
        }
    },
    data: function() {
        return {
            showPop:false
        };
    },
    filters: {
        skillIcon: function(id) {
            if(!id) return  '';
            return iconLink(id, 'origin');
        },

    },
    methods:{
        popStatus(status){
            this.showPop=status
        }
    }
}
</script>

<style scoped lang="less">
@import "../../../assets/css/bhhjSimulator/skill.less";
</style>
