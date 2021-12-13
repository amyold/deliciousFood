<template>
  <div style="width: 100%">
    <div class="mybreadcrumb">
      <!-- 通过路由来判断分页 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          :to="{ path: '/ChineseFood' }"
          v-if="$route.path == '/ChineseFood'"
          >中国菜</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ path: '/ForeignFood' }" v-else
          >外国菜</el-breadcrumb-item
        >
        <el-breadcrumb-item v-if="$route.query.category">{{
          $route.query.category
        }}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button type="primary" @click="dialogTableVisible=true" style="margin:0px 20px">新增美食</el-button>
      <mydialog
        :dialogTableVisible.sync="dialogTableVisible"
        :foodDetail="foodDetail"
      />
    </div>
    <myTable
      :category="$route.query.category ? $route.query.category : ''"
      :url="$route.path"
    ></myTable>
  </div>
</template>

<script>
import Mydialog from "./mydialog.vue";
import myTable from "./mytable.vue";

export default {
  name: "",
  data() {
    return {
      foodDetail:{},
      dialogTableVisible:false
    };
  },
  components: {
    myTable,
    Mydialog,
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.mybreadcrumb {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 20px;
}
</style>