<template>
    <main class="c-main m-$channel-index">
        Index
        <Info />
    </main>
</template>

<script>
import Info from '@/components/Info.vue';
    export default {
        name : 'Index',
        props:[],
        data : function(){
            return {
                
            }
        },
        computed:{},
        methods:{},
        mounted:function(){},
        components:{
            Info
        }
    }
</script>