<template>
  <div class="main">
    <el-checkbox v-model="checked">单选</el-checkbox>
    <el-checkbox-group v-model="checkList">
    <el-checkbox label="多选1"></el-checkbox>
    <el-checkbox label="多选2"></el-checkbox>
    <el-checkbox label="多选3"></el-checkbox>
  </el-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked:false,
      checkList:['多选1']

    }  
  },
  methods: {
    
  }
}
</script>

<style scoped></style>