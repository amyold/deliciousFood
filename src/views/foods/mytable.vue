<template>
  <div>
    <el-table :data="tableData" style="width:90%">
      <el-table-column type="index" label="序号" width="50"> </el-table-column>
      <el-table-column prop="foodname" label="图片详情" width="200">
        <template slot-scope="scope">
          <img :src="scope.row.imgurl" alt="" width="180px" />
        </template>
      </el-table-column>
      <el-table-column prop="foodname" label="菜名" width="180">
      </el-table-column>
      <el-table-column prop="score" label="评分" width="100"> </el-table-column>
      <el-table-column prop="type" label="菜系" width="100"> </el-table-column>
      <el-table-column prop="components" label="菜谱"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            type="text"
            @click="handleClickEdit(scope.row)"
            size="small"
            >编辑</el-button
          >
          <el-button
            type="text"
            @click="handleClickDelete(scope.row)"
            size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentpage"
      :page-sizes="[10, 20, 30]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
    <mydialog
      :dialogTableVisible.sync="dialogTableVisible"
      :foodDetail="foodDetail"
    />
  </div>
</template>
<script >
import mydialog from "./mydialog.vue";
export default {
  name: "",
  data() {
    return {
      tableData: [],
      dialogTableVisible: false,
      total: 1,
      pagesize: 20,
      currentpage: 1,
      foodDetail: {},
    };
  },
  props: {
    category: String,
    url: String,
  },
  components: {
    mydialog,
  },
  created() {
    this.getTableData(this.category);
  },
  watch: {
    $route() {
      this.getTableData(this.category);
    },
  },
  methods: {
    handleClickEdit(data) {
      this.dialogTableVisible = true;
      this.foodDetail = data;
    },
    handleClickDelete(data) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$api.deleteFoodsData(this.url + "/deleteFood", data);
          this.getTableData(
            this.$route.query.category,
            this.currentpage,
            this.pagesize
          );
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleSizeChange(e) {
      this.pagesize = e;
      this.currentpage = 1;
      this.getTableData(
        this.$route.query.category,
        this.currentpage,
        this.pagesize
      );
    },

    handleCurrentChange(e) {
      this.currentpage = e;
      this.getTableData(
        this.$route.query.category,
        this.currentpage,
        this.pagesize
      );
    },
    getTableData(name, pageNum, pageSize) {
      this.$api
        .getChineseFoodsData(this.url + "/detail", name, pageNum, pageSize)
        .then((res) => {
          this.tableData = res.data.records;
          this.total = res.data.total;
        });
    },
  },
};
</script>
<style lang='scss'>
/deep/ .el-pagination {
  padding: 20px;
}
</style>