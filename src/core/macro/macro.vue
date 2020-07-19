<template>
  <div id="app">
    <Header></Header>
    <Breadcrumb name="宏编辑器" slug="macro" root="/app/macroeditor" :feedbackEnable="true">
      <img slot="logo" svg-inline src="../../assets/img/logos/macroeditor.svg" />
      <div class="m-info"></div>
    </Breadcrumb>
    <LeftSidebar :open="false">
      <Nav />
    </LeftSidebar>
    <Main class="m-macroeditor" :withoutRight="true" :withoutLeft="true">
      <h1 class="m-macroeditor-title">
        智能宏编辑器
        <a
          href="/tool/?pid=265"
          target="_blank"
          class="u-help el-button el-button--success is-plain el-button--mini"
        >
          <i class="el-icon-s-management"></i> 宏语法参考手册
        </a>
      </h1>
      <div class="m-editor">
        <el-row>
          <el-col :span="12">
            <div class="m-col m-col-left">
              <h2 class="u-subtitle">
                <img class svg-inline src="../../assets/img/macro/cube1.svg" />快捷插入
              </h2>
              <el-form class="u-cmds" ref="form" :model="form" label-width="80px">
                <el-form-item label="释放方式">
                  <el-radio-group v-model="castType">
                    <el-radio label="cast">释放(cast)</el-radio>
                    <el-radio label="fcast">强制施放(fcast)</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="技能名">
                  <el-input v-model="skill"></el-input>
                </el-form-item>
                <el-form-item label="条件释放">
                  <el-switch v-model="isConditional"></el-switch>
                  <template v-if="isConditional && conditions.length > 2">
                    <span class="btn-help">
                      <!-- <el-tooltip
                                        content="点击查看实际逻辑关系"
                                        placement="right"
                                        effect="light"
                                        :manual="true"
                                        :value="true"
                                    >
                                        <el-link :underline="false" @click="showRealLogic" style="font-size: 24px;">
                                            💡点击查看实际逻辑关系
                                        </el-link>
                      </el-tooltip>-->
                      <el-button plain icon="el-icon-info" @click="showRealLogic">点击查看实际逻辑关系</el-button>
                    </span>
                    <el-alert title="请注意，此处选择的逻辑将不做处理，直接转换为宏中的 & 和 | " type="warning"></el-alert>
                    <el-dialog
                      title="实际逻辑"
                      :visible.sync="logicDialogVisible"
                      :width="Math.min(640,this.windowInnerWidth * 0.9) + 'px'"
                    >
                      <span>{{ logicDialog }}</span>
                      <span slot="footer" class="dialog-footer">
                        <el-button
                          type="primary"
                          @click="logicDialogVisible = false"
                        >确 定</el-button>
                      </span>
                    </el-dialog>
                  </template>
                </el-form-item>
                <template v-if="isConditional">
                  <el-form-item
                    v-for="(condition, index) of conditions"
                    :key="index"
                    :label="`条件${index + 1}`"
                  >
                    <template v-if="index >= 1">
                      <el-form-item label>
                        <el-radio-group v-model="condition.logic">
                          <el-radio label="&amp;">并且(and)</el-radio>
                          <el-radio label="|">或(or)</el-radio>
                        </el-radio-group>
                      </el-form-item>
                    </template>
                    <el-row :gutter="6">
                      <el-col :span="16">
                        <el-select
                          v-model="condition.name"
                          placeholder="判断项目"
                          @change="onConditionChange(index)"
                        >
                          <el-option label="自身有增减益效果" value="buff"></el-option>
                          <el-option label="自身有增减益效果层数" value="buff_level"></el-option>
                          <el-option label="目标有增减益效果" value="tbuff"></el-option>
                          <el-option label="目标有增减益效果层数" value="tbuff_level"></el-option>
                          <el-option label="自身存在增减益效果持续时间" value="bufftime"></el-option>
                          <el-option label="目标增减益效果持续时间" value="tbufftime"></el-option>
                          <el-option label="自身不存在某增减益效果" value="nobuff"></el-option>
                          <el-option label="目标不存在某增减益效果" value="tnobuff"></el-option>
                          <el-option label="目标NPC强度等级" value="npclevel"></el-option>
                          <el-option label="生命值和最大血量的比值" value="life"></el-option>
                          <el-option label="内力值和最大内力值的比值" value="mana"></el-option>
                          <el-option label="剑气/尘身刀气/战意/怒气值" value="rage"></el-option>
                          <el-option label="纯阳气点/少林禅那/七秀剑舞值" value="qidian"></el-option>
                          <el-option label="神机/竹雾刀气/格挡值" value="energy"></el-option>
                          <el-option label="日灵/金屏刀气值" value="sun"></el-option>
                          <el-option label="月魂值" value="moon"></el-option>
                          <el-option label="满日状态" value="sun_power"></el-option>
                          <el-option label="满月状态" value="moon_power"></el-option>
                          <el-option label="充能技能的当前充能层数" value="skill_energy"></el-option>
                          <el-option label="存在某技能/奇穴ID" value="skill"></el-option>
                          <el-option label="不存在某技能/奇穴ID" value="noskill"></el-option>
                          <el-option label="该宏最后一次释放的技能" value="last_skill"></el-option>
                          <el-option label="周围3尺以内敌人数量" value="nearby_enemy"></el-option>
                          <el-option label="技能调息完成" value="skill_notin_cd"></el-option>
                        </el-select>
                        <el-row :gutter="2">
                          <el-col
                            :span="10"
                            v-if="needsConditionParams.subname.includes(condition.name)"
                          >
                            <el-input
                              v-model="condition.subname"
                              placeholder="名称"
                            ></el-input>
                          </el-col>
                          <el-col
                            :span="7"
                            v-if="needsConditionParams.relation.includes(condition.name)"
                          >
                            <el-select
                              v-model="condition.relation"
                              v-if="!needsConditionParams.relationRestricted.includes(condition.name)"
                            >
                              <el-option label="=" value="="></el-option>
                              <el-option label="＜" value="<"></el-option>
                              <el-option label="＞" value=">"></el-option>
                              <el-option label="≥" value=">="></el-option>
                              <el-option label="≤" value="<="></el-option>
                              <el-option label="≠" value="~="></el-option>
                            </el-select>
                            <el-select
                              v-model="condition.relation"
                              v-else
                            >
                              <el-option label="=" value="="></el-option>
                              <el-option label="≠" value="~="></el-option>
                            </el-select>
                          </el-col>
                          <el-col
                            :span="7"
                            v-if="needsConditionParams.value.includes(condition.name)"
                          >
                            <el-input
                              v-model="condition.value"
                              placeholder="值"
                            ></el-input>
                          </el-col>
                        </el-row>
                      </el-col>
                      <el-col :span="7">
                        <el-button
                          type="danger"
                          plain
                          circle
                          icon="el-icon-minus"
                          @click="clickMinusCondition(index)"
                          v-if="conditions.length > 1"
                        ></el-button>
                        <el-button
                          type="primary"
                          plain
                          circle
                          icon="el-icon-plus"
                          @click="clickPlusCondition"
                          style="margin-left: 2px;"
                          v-if="index === conditions.length - 1"
                        ></el-button>
                      </el-col>
                    </el-row>
                  </el-form-item>
                </template>
              </el-form>
              <div class="u-submit">
                <el-button type="primary" icon="el-icon-right" class="u-btn" @click="insertLine">插入</el-button>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="m-col m-col-right">
              <h2 class="u-subtitle">
                <img class svg-inline src="../../assets/img/macro/cube2.svg" />宏编辑区
              </h2>
              <p class="u-tips">按下Tab键即可自动联想补全</p>
              <codemirror
                v-model="code"
                :options="cmOptions"
                @input="onCmCodeChange"
                ref="cmEditor"
              />
              <div class="u-count">
                <b :class="{ warning: code.length > 128 }">{{ code.length }}</b>
                / 128
                <em>（还可写 {{ 128 - code.length }} 字）</em>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <Footer />
    </Main>
  </div>
</template>

<script>
import Info from "@/components/Info.vue";
import Nav from "@/components/Nav.vue";
// import Extend from "@/components/Extend.vue";
import { codemirror } from "vue-codemirror";
import CodeMirror from "codemirror";
// import base style
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/edit/matchbrackets.js";
import "./z-macro.js";

export default {
  name: "Macro",
  data: function() {
    return {
      windowInnerWidth: window.innerWidth,
      castType: "cast",
      form: null,
      skill: "",
      isConditional: false,
      needsConditionParams: {
        subname: [
          "buff",
          "buff_level",
          "nobuff",
          "bufftime",
          "skill_energy",
          "skill",
          "noskill",
          "skill_notin_cd",
          "tbuff",
          "tbuff_level",
          "tnobuff",
          "tbufftime"
        ],
        relation: [
          "buff_level",
          "tbuff_level",
          "bufftime",
          "life",
          "mana",
          "rage",
          "qidian",
          "energy",
          "sun",
          "moon",
          "skill_energy",
          "last_skill",
          "npclevel",
          "nearby_enemy",
          "tbufftime"
        ],
        value: [
          "buff_level",
          "tbuff_level",
          "bufftime",
          "life",
          "mana",
          "rage",
          "qidian",
          "energy",
          "sun",
          "moon",
          "skill_energy",
          "last_skill",
          "npclevel",
          "nearby_enemy",
          "tbufftime"
        ],
        relationRestricted: ["skill", "noskill", "last_skill"]
      },
      conditions: [
        {
          name: "",
          relation: "=",
          value: "",
          logic: "&",
          subname: ""
        }
      ],
      conditionValueName: {
        buff: "存在增减益效果",
        buff_level: "增减益效果层数",
        nobuff: "不存在某增减益效果",
        bufftime: "增减益效果持续时间",
        life: "生命值和最大血量的比值",
        mana: "内力值和最大内力值的比值",
        rage: "剑气/尘身刀气/战意/怒气值",
        qidian: "纯阳气点",
        energy: "神机/竹雾刀气/格挡值",
        sun: "日灵/金屏刀气值",
        moon: "月魂值",
        sun_power: "满日状态",
        moon_power: "满月状态",
        skill_energy: "充能技能的当前充能层数",
        skill: "存在某技能/奇穴ID",
        noskill: "不存在某技能/奇穴ID",
        last_skill: "该宏最后一次释放的技能",
        npclevel: "目标NPC强度等级",
        nearby_enemy: "自身周围3尺以内敌人数量",
        skill_notin_cd: "技能调息完成",
        tbuff: "目标有增减益效果",
        tbuff_level: "目标有增减益效果层数",
        tnobuff: "目标不存在某增减益效果",
        tbufftime: "目标增减益效果持续时间"
      },
      logicDialogVisible: false,
      logicDialog: "",
      region: "",
      cmOptions: {
        tabSize: 4,
        lineNumbers: true,
        line: true,
        styleActiveLine: true,
        lineNumbers: true,
        mode: "text/x-macro",
        extraKeys: { Tab: "autocomplete" },
        matchBrackets: true,
        hintOptions: {
          completeSingle: false
        }
        // more CodeMirror options...
      },
      code: ""
    };
  },
  computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror;
    }
  },
  methods: {
    clickPlusCondition() {
      this.conditions.push({
        name: "",
        relation: "=",
        value: "",
        logic: "&",
        subname: ""
      });
    },
    clickMinusCondition(index) {
      this.conditions.splice(index, 1);
    },
    onConditionChange(index) {
      let thisName = this.conditions[index].name;
      let thisRelation = this.conditions[index].relation;
      if (
        thisName === "skill" ||
        thisName === "noskill" ||
        thisName === "last_skill"
      ) {
        if (thisRelation !== "=" && thisRelation !== "≠") {
          // // 修改判断符号为等号
          // let tmpArr = this.conditions
          // tmpArr[index].relation = '='
          // this.conditions = tmpArr
          this.conditions[index].relation = "=";
        }
      }
    },
    insertLine() {
      let line = "/" + this.castType + " ";
      if (this.isConditional) {
        let allConditions = "[";
        for (let i = 0; i < this.conditions.length; ++i) {
          let condition = this.conditions[i];
          if (i !== 0) {
            allConditions += condition.logic;
          }
          allConditions += condition.name;
          if (this.needsConditionParams.subname.includes(condition.name)) {
            allConditions = allConditions + ":" + condition.subname;
          }
          if (this.needsConditionParams.relation.includes(condition.name)) {
            allConditions = allConditions + condition.relation;
          }
          if (this.needsConditionParams.value.includes(condition.name)) {
            allConditions = allConditions + condition.value;
          }
        }
        allConditions += "]";
        line = line + allConditions + " ";
      }
      line = line + this.skill + "\n";
      this.code += line.replace(/buff_level/g, "buff");
    },
    onCmCodeChange(value) {
      // this.codemirror.showHint();
    },
    showRealLogic() {
      if (this.conditions <= 2) {
        return false;
      } else {
        let allConditions = "";
        for (let i = 0; i < this.conditions.length; ++i) {
          let condition = this.conditions[i];
          if (i === this.conditions.length - 1) {
            allConditions +=
              // condition.logic === "&" ? " 并且 " : " 或 ";
              condition.logic === "&" ? " & " : " | ";
          } else if (i !== 0) {
            allConditions +=
              // condition.logic === "&" ? " 并且（" : " 或（";
              condition.logic === "&" ? " &（" : " |（";
          }
          // allConditions += this.conditionValueName[condition.name];
          allConditions += condition.name;
          if (this.needsConditionParams.subname.includes(condition.name)) {
            allConditions = allConditions + ":" + condition.subname;
          }
          if (this.needsConditionParams.relation.includes(condition.name)) {
            allConditions = allConditions + condition.relation;
          }
          if (this.needsConditionParams.value.includes(condition.name)) {
            allConditions = allConditions + condition.value;
          }
        }
        for (
          let parenthesis = 0;
          parenthesis < this.conditions.length - 2;
          ++parenthesis
        ) {
          allConditions += "）";
        }
        this.logicDialog = allConditions.replace(/buff_level/g, "buff");
        this.logicDialogVisible = true;
      }
    },
    getUserId() {
      if (User.isLogin()) {
        this.uid = User.getInfo().uid;
      }
    }
  },
  filters: {},
  mounted: function() {
    // this.getUserId();
    // this.prepareMounted();
  },
  components: {
    codemirror,
    Nav
    // Extend
  }
};
</script>

<style lang="less">
@import "../../assets/css/macroeditor.less";
</style>
