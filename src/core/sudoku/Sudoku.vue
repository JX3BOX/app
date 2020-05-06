<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb name="频道名称" slug="slug" root="/slug">
            <img slot="logo" svg-inline src="../../assets/img/logo.svg" />
            <Info />
        </Breadcrumb>
        <LeftSidebar>
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="false">
            primary content
            <RightSidebar>
                <Extend/>
            </RightSidebar>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Info from '@/components/Info.vue';
import Nav from '@/components/Nav.vue';
import Extend from '@/components/Extend.vue';

    export default {
        name : 'Sudoku',
        props:[],
        data : function(){
            return {
                
            }
        },
        computed:{},
        methods:{},
        mounted:function(){},
        components:{
            Info,
            Nav,
            Extend,
        }
    }
</script>