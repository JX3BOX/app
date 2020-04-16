<template>
    <main class="c-main m-$channel-list">
        List
        <Info />
    </main>
</template>

<script>
import Info from '@/components/Info.vue';
    export default {
        name : 'List',
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