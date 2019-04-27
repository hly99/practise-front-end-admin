<template>
  <div class="main">
    <el-table
      :data="list"
      border
      align="center"
      stripe>
      <el-table-column
        type="index"
        label="序列"
        align="center"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        >
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        name: 'Joel',
        gender: 1
      }, {
        name: 'Mary',
        gender: 2
      }, {
        name: 'Jimmy',
        gender: 3
      }, ]
    }  
  },
  methods: {
    
}
}
</script>

<style scoped></style>