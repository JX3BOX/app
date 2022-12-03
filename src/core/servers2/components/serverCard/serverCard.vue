<template>
  <div>
    <el-card>
      <div slot="header">
        <span>{{ data.server_name }}</span>
        <el-button @click="clickServer" style="float: right; padding: 3px 0" type="text">{{ isSave ? '取消' : ''
        }}收藏</el-button>
      </div>
      <div>
        <div>当前状态: <span :class="data.connect_state ? 'col70b603' : 'colaaa'">{{ data.connect_state_name }}</span>
        </div>
        <div>ip:{{ data.ip_address }}</div>
        <div>最近维护时间:{{ getTime(data.maintain_time) }}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ['data', 'isSave'],
  computed: {
    getTime () {
      return (time) => {
        const date = new Date(time * 1000)
        const Y = date.getFullYear()
        const M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
        const D = date.getDate()
        const H = date.getHours()
        const m = date.getMinutes()
        return `${Y}-${M}-${D} ${H}:${m}`
      }
    }
  },
  methods: {
    clickServer () {
      console.log(123);
      this.$emit('clickServer', this.data)
    }
  },
}
</script>

<style lang="less" scoped>
.col70b603 {
  color: #70b603
}

.colaaa {
  color: #aaa
}
</style>