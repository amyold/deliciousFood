<template>
  <div class="content">
    <div class="title">
      <div>美食数据可视化平台</div>
      <el-button type="primary" style="margin:0 30px">登录注册</el-button>
    </div>
    <charts></charts>
    <img src="" alt="" />
  </div>
</template>

<script>
import charts from "../views/charts.vue";
export default {
  name: "",
  components: {
    charts,
  },
};
</script>
<style lang='scss' scoped>
.content {
  padding-left: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.title {
  margin-top: 10px;
  padding: 0 40px;
  font-size: 30px;
  align-self: center;
   display: flex;
  flex-direction: row;
}
.charts {
  width: 2000px;
  position: relative;
  .chartstwo {
    position: relative;
    right: 20px;
  }
}
</style>