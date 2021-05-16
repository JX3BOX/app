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
            <!-- 据点分割&图 -->
            <div class="m-box-img">
              <span class="u-img eren"> <img :src="27 | eImgPath"/></span>
              <span class="u-img haoqi"> <img :src="25 | hImgPath"/></span>
              <span v-for="camp in maplist" :key="camp.id" :class="camp.name_pinyin" class="u-img">
                <img v-if="camp.camp == 'haoqi'" :src="camp.id | hImgPath" />
                <img v-else-if="camp.camp == 'eren'" :src="camp.id | eImgPath" />
                <img v-else :src="camp.id | eImgPath" />
              </span>
            </div>
            <!-- 据点名称&历史记录 -->
            <div class="m-box-name">
              <div class="u-img eren">
                <img :src="`${imgPath}/image/camp/erengu.png`" />
                <span>恶人谷</span>
              </div>
              <div class="u-img haoqi">
                <img :src="`${imgPath}/image/camp/haoqimeng.png`" />
                <span>浩气盟</span>
              </div>
              <el-popover v-for="(item, o) in maplist" :key="o" placement="top-start" width="120" trigger="hover">
                <div>
                  <div>{{ item.name }}</div>
                  <div style=" width: 100%;height: 60px;overflow: hidden;">
                    <!-- <img :src="item | imgPath" /> -->
                  </div>
                  <div>当前阵营：{{ item.camp }}</div>
                  <div>当前所属帮会</div>
                  <div>据点占领时长</div>
                </div>
                <div slot="reference" :class="item.name_pinyin" class="u-img">
                  <img :src="item.camp | camptype(item.id) | iconImg(item.id)" />
                  <span>{{ item.name }}</span>
                </div>
              </el-popover>
            </div>
          </div>
          <div v-if="show" class="m-box-txt">
            <h2 class="u-title">据点名</h2>
            <img class="u-img" :src="imgbg" alt="" />
            <ul class="u-cont" style="overflow:auto">
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
import { getCamplist } from '@/service/camp'
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
      show: false,
      activeName: '斗转星移',
      maplist: [],
      imgPath: __imgPath,
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
    getcamp() {
      let data = {
        server: this.activeName,
      }
      getCamplist(data)
        .then((res) => {
          if (res.data.code == 200) {
            this.maplist = res.data.data.sandmap.castles
            console.log(list, '....')
          }
        })
        .catch((err) => {})
    },

    handleClick(e) {
      console.log(e)
    },
    offshow() {
      this.show = false
    },
  },
  mounted: function() {
    this.getcamp()
  },
  filters: {
    hImgPath: function(val) {
      return __imgPath + 'image/camp/h' + val + '.png'
    },
    eImgPath: function(val) {
      return __imgPath + 'image/camp/e' + val + '.png'
    },
    camptype: function(camp, id) {
      if (id == 301) {
        if (camp == 'haoqi') return __imgPath + 'image/camp/h_1.png'
        return __imgPath + 'image/camp/e_1.png'
      } else if (id == 221) {
        if (camp == 'eren') return __imgPath + 'image/camp/e_1.png'
        return __imgPath + 'image/camp/h_1.png'
      } else {
        if (camp == 'eren') {
          return __imgPath + 'image/camp/z01.png'
        } else if (camp == 'haoqi') {
          return __imgPath + 'image/camp/h01.png'
        } else {
          return __imgPath + 'image/camp/z01.png'
        }
      }
    },
    iconImg: function(val, id) {
      let str = val.split('1')
      if (id == 301) return str.join('lingfengbao')
      if (id == 221) return str.join('wuwangcheng')
      if (id == 91 || id == 352 || id == 1532 || id == 1391 || id == 132 || id == 1052 || id == 232 || id == 1011 || id == 1032) {
        return str.join('1')
      } else if (id == 231 || id == 1031 || id == 92 || id == 1002) {
        return str.join('2')
      } else if (id == 1392 || id == 212 || id == 1012 || id == 1001) {
        return str.join('3')
      } else if (id == 131 || id == 1042 || id == 1051 || id == 351) {
        return str.join('4')
      } else {
        return str.join('5')
      }
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
