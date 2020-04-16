<template>
    <main class="c-main m-$channel-post">
        Post
        <Help />
    </main>
</template>

<script>
import Help from '@/components/Help.vue';
    export default {
        name : 'Post',
        props:[],
        data : function(){
            return {
                
            }
        },
        computed:{},
        methods:{},
        mounted:function(){},
        components:{
            Help
        }
    }
</script>