<template>
  <div style="width: 250px;margin-right:20px">
    <h5 style="text-align: center; margin: 20px 0">美食数据爬取与可视化平台</h5>
    <el-menu
      class="el-menu-vertical-demo"
      router
    >
      <el-menu-item index="/">
        <i class="el-icon-house"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/ChineseFood">
        <template slot="title">
          <i class="el-icon-star-on"></i>
          <span>中国美食</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/ChineseFood">全部</el-menu-item>
          <el-menu-item v-for="item in category" :index="'/ChineseFood?category='+item.category"  :key="item.id">{{item.category}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/ForeignFood">
        <template slot="title">
          <i class="el-icon-star-off"></i>
          <span>外国美食</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/ForeignFood">全部</el-menu-item>
          <el-menu-item v-for="item in foreignCategory" :index="'/ForeignFood?category='+item.category"  :key="item.id">{{item.category}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "",
  data () {
    return {
      category:[],
      foreignCategory:[]
    }
  },
  mounted () {
    this.getCategory();
    this.getForeignCategory();
  },
  methods:{
    getCategory(){
      this.$api.getCategory("/ChineseFood/category").then(res=>{
        this.category=res.data;
      })
    },
     getForeignCategory(){
      this.$api.getCategory("/ForeignFood/category").then(res=>{
        this.foreignCategory=res.data;
      })
    },
  }
};
</script>
<style scoped>
</style>