<template>
  <div class="main">
    
    <el-button type="danger" @click="open1">删除</el-button>
    <br>
    姓名: {{name}}
    <el-button :plain="true" @click="open2">录入姓名</el-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '未设置'
    }  
  },
  methods: {
    open1(){
      this.$alert('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确认删除',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
    },
    open2(){
    this.$prompt(`请输入姓名`,'提示').then(({ value }) =>{
      this.name=value
    })
  }
  }
}
alert("本网站基于 Vue 开发");
</script>

<style scoped></style>