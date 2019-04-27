<template>
  <div class="main">
    <el-switch
    v-model="value5"
    active-value="1"
    inactive-value="0"
    on-text="开"
    off-text="关">
  </el-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value5: true
    }  
  },
  methods: {
    
  }
}
</script>

<style scoped></style>