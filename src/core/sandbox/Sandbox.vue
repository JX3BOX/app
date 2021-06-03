<template>
  <div id="app">
    <Header></Header>
    <Breadcrumb name="阵营沙盘" slug="sandbox" root="/app/sandbox" :feedbackEnable="true" :crumbEnable="true">
      <img slot="logo" svg-inline src="../../assets/img/logos/sandbox.svg" />
    </Breadcrumb>
    <LeftSidebar :open="false">
      <Nav />
    </LeftSidebar>
    <Main :withoutRight="true" :withoutLeft="true">
      <div class="m-sandbox">
        <h1 class="m-sandbox-title">阵营沙盘</h1>
        <!-- 服务器 -->
        <el-tabs v-model="activeName" type="card" @tab-click="changeServers">
          <el-tab-pane v-for="item in servers" :key="item.id" :label="item.server" :name="item.server"></el-tab-pane>
        </el-tabs>
        <!-- 选择 -->
        <div class="m-sandbox-change">
          <div class="m-alert el-alert el-alert--info is-light">
            <span> <i class="el-icon-star-on"></i>测试版本欢迎反馈 <i class="el-icon-star-on"></i>招募各个区服维护沙盘数据的小伙伴 </span>
            <span>问题反馈&区服维护申请：QQ1416956452</span>
          </div>
          <div class="m-change">
            <div class="m-item">
              <div class="m-title">选择阵营：</div>
              <el-radio-group v-model="camp" @change="changeCamp">
                <el-radio-button label="恶人谷"></el-radio-button>
                <el-radio-button label="浩气盟"></el-radio-button>
              </el-radio-group>
            </div>
            <div class="m-item">
              <div class="m-title">查看进攻路线：</div>
              <el-switch v-model="route"> </el-switch>
            </div>
            <div class="m-item">
              <span class="m-title">维护人员：</span>
              <span class="u-name">{{ this.maintain }}</span>
            </div>
          </div>
        </div>

        <!-- 地图 -->
        <div class="m-sandbox-box" :style="{ background: `url(${imgbg})` }">
          <div class="m-line" :style="{ background: `url(${imgline})` }"></div>
          <div class="m-box">
            <!-- 据点分割&图 -->
            <div class="m-box-img">
              <span class="u-img" :style="'eren' | placeImg">
                <img :src="27 | eImgPath" />
              </span>
              <span class="u-img" :style="'haoqi' | placeImg">
                <img :src="25 | hImgPath" />
              </span>
              <span v-for="camp in maplist" :key="camp.id" :style="camp.name_pinyin | placeImg" class="u-img">
                <img :src="camp.camp | campmap(camp.id)" />
              </span>
            </div>

            <!-- 进攻路线 -->
            <div class="m-box-arr">
              <span v-for="item in attacks" :key="item.name" :class="item.name_pinyin">
                <template v-if="item.attacks.length > 0">
                  <img class="u-img" v-for="c in item.attacks" :key="c.id" :class="c.name_pinyin" :style="item.name_pinyin | placeAttacks(c.name_pinyin)" :src="camparr" />
                </template>
                <i v-for="a in item.castles" :key="a.name" :class="a.name_pinyin">
                  <template v-if="a.attacks.length > 0">
                    <img class="u-img" v-for="c in a.attacks" :key="c.id" :class="c.name_pinyin" :style="a.name_pinyin | placeArr(c.name_pinyin)" :src="camparr" />
                  </template>
                </i>
              </span>
            </div>
            <!-- 地区名称 -->
            <div class="m-box-camp">
              <span v-for="item in place.list" :key="item.id" class="u-img" :style="item.name_pinyin | placeCamp">
                <img :src="item.name_pinyin | campimg" />
              </span>
            </div>
            <!-- 据点名称&历史记录 -->
            <div class="m-box-name">
              <div class="u-img eren" :style="'eren' | placeName">
                <img :src="`${imgPath}/image/camp/erengu.png`" />
                <span>恶人谷</span>
              </div>
              <div class="u-img haoqi" :style="'haoqi' | placeName">
                <img :src="`${imgPath}/image/camp/haoqimeng.png`" />
                <span>浩气盟</span>
              </div>
              <el-popover v-for="(item, o) in maplist" :key="o" placement="top-start" width="240" trigger="hover">
                <div class="u-box">
                  <img :src="item.name_pinyin | campimg" />
                  <div class="u-txt">
                    <div class="u-line">
                      <span class="u-camp">{{ item.name }}</span>
                    </div>
                    <div class="u-line">
                      <span>占领势力：</span>
                      <span :class="item.camp">【{{ item.camp | campname }}】</span>
                    </div>
                    <div class="u-line u-gang">
                      <span>占领帮会：</span>
                      <span :class="item.camp">- {{ item.gang }} -</span>
                    </div>
                  </div>
                  <div class="u-log" @click="showlog(item.id, item.name, item.name_pinyin, item.description, item.link)"><i class="el-icon-date"></i></div>
                </div>
                <div slot="reference" :class="item.name_pinyin" :style="item.name_pinyin | placeName" class="u-img" @click="showlog(item.id, item.name, item.name_pinyin, item.description, item.link)">
                  <img :src="item.camp | camptype(item.id) | iconImg(item.id)" />
                  <span>{{ item.name }}</span>
                </div>
              </el-popover>
              <div v-if="show" class="m-bgmark" @click="offshow"></div>
            </div>
          </div>
          <div v-if="show" class="m-box-txt">
            <div class="m-box-info">
              <img class="u-img" :src="camplist.img | campimg" />
              <div class="u-box">
                <span class="u-title">{{ camplist.name }}</span>
                <span class="u-desc">{{ camplist.desc | campdesc }}</span>
                <a class="u-baike" :href="camplist.link" target="_blank">查看百科 &raquo;</a>
              </div>
            </div>
            <ul class="u-cont" style="overflow:auto" v-if="camplist.list.length > 0">
              <li v-for="(item, i) in camplist.list" :key="i">
                <div class="u-line">
                  <span class="u-time">{{ item.date }}</span>
                </div>
                <div class="u-line">
                  <span>占领势力：</span> <span :class="item.camp">[{{ item.camp | campname }}]</span>
                </div>
                <div class="u-line">
                  <span>占领帮会：</span> <span :class="item.camp">{{ item.gang }}</span>
                </div>
              </li>
            </ul>
            <div class="u-cont" v-else>
              <div class="u-nonedata">暂无数据</div>
            </div>
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
import place from './place.json'
import { placeimg, placename, placecamp, placeattacks, placearr } from './place'
import { __imgPath } from '@jx3box/jx3box-common/data/jx3box.json'
import { getCamplist, getCampServers, getCampLog, getCampDetail } from '@/service/camp'

export default {
  name: 'Sandbox',
  props: [],
  data: function() {
    return {
      servers: [],
      camp: '恶人谷',
      campId: 1,
      campName: '',
      maintain: '',
      route: false,
      time: '',
      place,
      show: false,
      activeName: '斗转星移',
      maplist: [],
      maplists: [],
      imgPath: __imgPath,
      camplist: {
        namme: '',
        img: '',
        desc: '',
        link: '',
        list: [],
      },
      elist: [],
      hlist: [],
      attack: {
        eren: [],
        haoqi: [],
      },
    }
  },
  computed: {
    imgbg() {
      return __imgPath + 'image/camp/backgroud.png'
    },
    imgline() {
      return __imgPath + 'image/camp/line.png'
    },
    camps() {
      if (this.camp == '恶人谷') {
        return 'eren'
      } else {
        return 'haoqi'
      }
    },
    camparr() {
      if (this.camp == '恶人谷') {
        return __imgPath + 'image/camp/cearr.png'
      } else {
        return __imgPath + 'image/camp/charr.png'
      }
    },
    attacks() {
      if (this.camp == '恶人谷') {
        return this.attack.eren
      } else {
        return this.attack.haoqi
      }
    },
  },
  methods: {
    //获取沙盘数据（无线路）
    getcamp() {
      let data = this.$route.query
      let parms = {
        sandmap_id: '',
        camp: '',
      }
      if (data.id) {
        this.campId = data.id
        this.activeName = data.name
      }
      this.getservername(this.activeName)
      parms.sandmap_id = this.campId
      parms.camp = this.camps
      this.maplist = []
      getCamplist(parms).then((res) => {
        this.maplist = res.data.sandmap.castles
        this.maplists.push({ id: this.campId, camp: this.camps, list: res.data.sandmap.castles })
      })
    },
    //沙盘数据缓存
    getcamps(camp = this.maplists) {
      let a = false
      for (let i = 0; i < camp.length; i++) {
        if (camp[i].id == this.campId && camp[i].camp == this.camps) {
          a = true
        }
      }
      if (a == true) {
        this.maplist = []
        for (let i = 0; i < camp.length; i++) {
          if (camp[i].id == this.campId) {
            this.maplist = camp[i].list
          }
        }
      } else {
        this.getcamp()
      }
    },
    //获取沙盘数据（有线路）
    getcampdetail() {
      let parms = {
        sandmap_id: this.campId,
        camp: this.camps,
      }
      getCampDetail(parms).then((res) => {
        if (this.camps == 'eren') {
          this.elist.push({ id: res.sandmap.id, list: res.sandmap.maps })
          this.attack.eren = res.sandmap.maps
        } else {
          this.hattack = []
          this.hlist.push({ id: res.sandmap.id, list: res.sandmap.maps })
          this.attack.haoqi = res.sandmap.maps
        }
      })
    },
    //沙盘线路缓存
    getdetaillist(camp) {
      let a = false
      for (let i = 0; i < camp.length; i++) {
        if (camp[i].id == this.campId) {
          a = true
        }
      }
      if (a == true) {
        this.attacks = []
        for (let i = 0; i < camp.length; i++) {
          if (camp[i].id == this.campId) {
            if (this.camps == 'eren') {
              this.attack.eren = camp[i].list
            } else {
              this.attack.haoqi = camp[i].list
            }
          }
        }
      } else {
        this.getcampdetail()
      }
    },
    //切换势力
    changeCamp(val) {
      this.camp = val
      if (this.route == true) {
        if (this.camps == 'eren') {
          this.getdetaillist(this.elist)
        } else {
          this.getdetaillist(this.hlist)
        }
      }
    },
    //切换服务器
    changeServers(tab, event) {
      let name = event.target.getAttribute('id').slice(4)
      this.getservername(name)
      this.$router.push({
        name: 'index',
        query: { id: this.campId, name: this.campName },
      })
      this.getcamps()
      this.attack = {
        eren: [],
        haoqi: [],
      }
      if (this.route == true) {
        if (this.camps == 'eren') {
          this.getdetaillist(this.elist)
        } else {
          this.getdetaillist(this.hlist)
        }
      }
    },
    //服务id,名字和维护人员
    getservername(name) {
      for (let i = 0; i < this.servers.length; i++) {
        if (this.servers[i].server == name) {
          this.campId = this.servers[i].id
          this.campName = this.servers[i].server
          this.maintain = this.servers[i].maintainer_name
        }
      }
    },
    //展示据点日志
    showlog(id, name, img, desc, link) {
      this.show = true
      this.camplist.name = name
      this.camplist.img = img
      this.camplist.desc = desc
      this.camplist.link = link
      getCampLog(this.campId, id).then((res) => {
        this.camplist.list = res.data.data
      })
    },
    //关闭据点日志
    offshow() {
      this.show = false
    },
  },
  mounted: function() {
    //获取服务器
    getCampServers().then((res) => {
      for (let i = 0; i < res.data.sandmaps.length; i++) {
        res.data.sandmaps[i].id = res.data.sandmaps[i].id + ''
        this.campName = res.data.sandmaps[0].server
        this.maintain = res.data.sandmaps[0].maintainer_name
      }
      this.servers = res.data.sandmaps
      this.route = false
      this.camp = '恶人谷'
      this.maplist = []
      //获取沙盘数据
      this.getcamp()
    })
  },
  filters: {
    hImgPath: function(val) {
      return __imgPath + 'image/camp/h' + val + '.png'
    },
    eImgPath: function(val) {
      return __imgPath + 'image/camp/e' + val + '.png'
    },
    //初始势力色块
    camptype: function(camp, id) {
      if (id == 301) {
        if (camp == 'haoqi') return __imgPath + 'image/camp/h_1.png'
        return __imgPath + 'image/camp/e_1.png'
      } else if (id == 221) {
        if (camp == 'eren') return __imgPath + 'image/camp/e_1.png'
        return __imgPath + 'image/camp/h_1.png'
      } else {
        if (camp == 'eren') {
          return __imgPath + 'image/camp/e01.png'
        } else if (camp == 'haoqi') {
          return __imgPath + 'image/camp/h01.png'
        } else {
          return __imgPath + 'image/camp/z01.png'
        }
      }
    },
    //过滤势力色块 img
    campmap: function(camp, id) {
      if (camp !== 'neutral') {
        if (camp == 'eren') {
          return __imgPath + 'image/camp/e' + id + '.png'
        } else {
          return __imgPath + 'image/camp/h' + id + '.png'
        }
      } else {
        if (id == 301) {
          return __imgPath + 'image/camp/e' + id + '.png'
        }
        if (id == 221) {
          return __imgPath + 'image/camp/h' + id + '.png'
        }
        return __imgPath + 'image/camp/tm.png'
      }
    },
    //过滤势力据点图片 img
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
    campimg: function(val) {
      return __imgPath + 'image/camp/' + val + '.png'
    },
    campname: function(val) {
      if (val == 'eren') return '恶人谷'
      if (val == 'haoqi') return '浩气盟'
      return '中立'
    },
    campdesc: function(val) {
      if (val) {
        return val
      } else {
        return '暂无介绍'
      }
    },
    //势力色块绝对定位
    placeImg: function(val) {
      return placeimg()[val]
    },
    //据点名绝对定位
    placeName: function(val) {
      return placename()[val]
    },
    //地名绝对定位
    placeCamp: function(val) {
      return placecamp()[val]
    },
    //地区箭头指向绝对定位
    placeAttacks: function(val1, val2) {
      return placeattacks()[val1][val2]
    },
    //区域内箭头指向绝对定位
    placeArr: function(val1, val2) {
      return placearr()[val1][val2]
    },
  },
  watch: {
    route: {
      handler: function(val) {
        if (val == true) {
          if (this.camps == 'eren') {
            this.getdetaillist(this.elist)
          } else {
            this.getdetaillist(this.hlist)
          }
        } else {
          this.attacks = []
        }
      },
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
