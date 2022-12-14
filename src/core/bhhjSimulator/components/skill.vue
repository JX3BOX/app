<template>
    <div class="m-bhhj-skill">
        <!--        技能图标及描述-->
        <div class="m-bhhj-icon m-shape" :class="[select?'bhhjSelect':'',!skillType?'m-bhhj-icon-y':'']"  @mouseover="popStatus(true)" @mouseleave="popStatus(false)" v-if="noPop">
            <img class="u-bhhj-img" :src="info.IconID|skillIcon(info.IconID)" />
        </div>
        <div class="m-bhhj-icon" :class="[select?'bhhjSelect':'',!skillType?'m-bhhj-icon-y':'']" v-else>
            <img class="u-bhhj-img" :src="info.IconID|skillIcon(info.IconID)" />
        </div>
        <!-- 弹窗描述 -->
        <span class="m-bhhj-pop" :class="showPop ? 'on' : ''">
                <b class="m-bhhj-name">
                    <span>{{ info.Name }}<small class="u-bhhj-id" >(ID: {{ info.IdKey }})</small></span>
                </b>
                <b class="m-bhhj-type">
                {{skillType?'主动技能':'被动招式'}}
                </b>
                <span class=" m-bhhj-desc">
                    {{ info.Desc }}
                </span>
            </span>
        <!--        方形秘技-->
<!--        <div class="m-bhhj-icon">-->
<!--            <img src="https://icon.jx3box.com/icon/22.png" />-->
<!--        </div>-->
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
    created() {

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
