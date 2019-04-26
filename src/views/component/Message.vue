<template>
  <div class="main">
    <el-button :plain="true" @click="open1">成功</el-button>
    <el-button :plain="true" @click="open2">警告</el-button>
    <el-button :plain="true" @click="open3">消息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    open1(){
      this.$message.success( '这是一条成功的信息' );
    },
    open2(){
    this.$message.warning('这是一条警告的信息')
  },
    open3(){
      this.$message.info('这是一条信息')
    },
    open4(){
      this.$message.error('这是一条错误信息')
    }
  }
  
}
</script>

<style scoped></style>