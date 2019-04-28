<template>
  <div class="main">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-input
  type="textarea"
  :rows="3"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
<el-input v-model="input2" type="number" placeholder="请输入数字"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input:'',
      textarea:'',
      input2:''
    }  
  },
  methods: {
    
  }
}
</script>

<style scoped></style>