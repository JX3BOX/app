<template>
  <div id="app">
    <Header></Header>
    <Breadcrumb name="阵营沙盘" slug="sandbox" root="/app/sandbox" :feedbackEnable="true" :crumbEnable="true">
      <!-- <img slot="logo" svg-inline src="../../assets/img/logos/sudoku.svg" /> -->
      <i class="el-icon-c-scale-to-original" svg-inline slot="logo"></i>
    </Breadcrumb>
    <LeftSidebar :open="false">
      <Nav />
    </LeftSidebar>
    <Main :withoutRight="true" :withoutLeft="true">
      <div class="m-sandbox">
        <h1 class="m-sandbox-title">阵营沙盘</h1>
        <!-- 服务器 -->
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane v-for="item in servers" :key="item" :label="item" :name="item"></el-tab-pane>
        </el-tabs>
        <!-- 选择 -->
        <div class="m-sandbox-change">
          <div class="m-item">
            <div class="m-title">选择阵营：</div>
            <el-radio-group v-model="camp">
              <el-radio-button label="恶人谷"></el-radio-button>
              <el-radio-button label="浩气盟"></el-radio-button>
            </el-radio-group>
          </div>
          <div class="m-item">
            <div class="m-title">查看进攻路线：</div>
            <el-switch v-model="route"> </el-switch>
          </div>
          <div class="m-item">
            <div class="m-title">选择日期：</div>
            <el-date-picker v-model="time" type="date" placeholder="选择日期"> </el-date-picker>
          </div>
        </div>

        <!-- 地图 -->
        <div class="m-sandbox-box" :style="{ background: `url(${imgbg})` }">
          <div class="m-box">
            <el-popover v-for="(item, o) in Elist" :key="o" placement="top-end" width="120" trigger="hover">
              <div>
                <div>据点{{ o + 1 }}</div>
                <div style=" width: 100%;height: 60px;overflow: hidden;">
                  <img :src="item | imgPath" />
                </div>
                <div>当前阵营：恶人谷</div>
                <div>当前所属帮会</div>
                <div>据点占领时长</div>
              </div>
              <div slot="reference" :class="`img img_${o}`">
                <img :src="item | imgPath" />
              </div>
            </el-popover>
          </div>
          <div v-if="show" class="m-box-txt">
            <h2 class="u-title">据点名</h2>
            <img class="u-img" :src="imgbg" alt="" />
            <ul class="u-cont" v-infinite-scroll="load" style="overflow:auto">
              <li v-for="i in 10" class="infinite-list-item" :key="i">{{ i }}：2020-02-20 恶人谷XXXXXXX</li>
            </ul>
          </div>
        </div>
        <div v-if="show" class="m-bgmark" @click="offshow"></div>
      </div>
      <Footer></Footer>
    </Main>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import { __imgPath } from '@jx3box/jx3box-common/data/jx3box.json'
import servers from '@jx3box/jx3box-data/data/server/server_cn.json'
export default {
  name: 'Sandbox',
  props: [],
  data: function() {
    return {
      servers,
      camp: '恶人谷',
      route: false,
      time: '',
      show:true,
      activeName: '蝶恋花',
      Elist: ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'e10', 'e11', 'e12', 'e13', 'e14', 'e15', 'e16'],
      Zlist: ['z2', 'z3', 'z4', 'z5', 'z6', 'z7', 'z8', 'z9', 'z10', 'z11', 'z12', 'z13', 'z14', 'z15'],
      Hlist: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h12', 'h13', 'h14', 'h15', 'h16'],
    }
  },
  computed: {
    imgbg() {
      return __imgPath + 'image/camp/backgroud.png'
    },
    imglist() {
      let arr = []
      // if(){

      // }
      return arr
    },
  },
  methods: {
    handleClick(e) {
      console.log(e)
    },
    offshow(){
      this.show= false
    }
  },
  mounted: function() {},
  filters: {
    imgPath: function(val) {
      return __imgPath + 'image/camp/' + val + '.png'
    },
  },
  components: {
    Nav,
  },
}
</script>
<style scoped lang="less">
@import '../../assets/css/sandbox.less';
.el-icon-c-scale-to-original {
  .fz(30px);
  .color(#3d454d);
}
.c-breadcrumb:hover {
  .el-icon-c-scale-to-original {
    .color(#359);
  }
}
</style>
