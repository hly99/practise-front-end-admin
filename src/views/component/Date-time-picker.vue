<template>
  <div class="main">
    <el-time-select
  v-model="value1"
  :picker-options="{
    start: '00:00',
    step: '00:05',
    end: '23:59'
  }"
  placeholder="选择时间">
</el-time-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1:''
    }  
  },
  methods: {
    
  }
}
</script>

<style scoped></style>