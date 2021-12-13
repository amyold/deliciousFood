<template>
  <div class="">
    <el-dialog
      title="修改美食数据"
      :visible="dialogTableVisible"
      class="mydialog"
      :before-close="handleClose"
    >
      <div class="dialogTitle">
        <div>图片预览</div>
        <img :src="foodDetail.imgurl" width="300px" alt="" />
      </div>
      <div>
        <el-input v-model="foodDetail.imgurl" placeholder="请输入内容">
          <template slot="prepend">图片地址</template>
        </el-input>
        <el-input
          v-model="foodDetail.type"
          placeholder="请输入内容"
          v-if="foodDetail.id"
          disabled="true"
        >
          <template slot="prepend">菜系</template>
        </el-input>
        <el-input v-model="foodDetail.foodname" placeholder="请输入内容">
          <template slot="prepend">菜名</template>
        </el-input>
        <el-input v-model="foodDetail.components" placeholder="请输入内容">
          <template slot="prepend">菜谱</template>
        </el-input>
        <el-input v-model="foodDetail.score" placeholder="请输入内容">
          <template slot="prepend">评分</template>
        </el-input>
        
            <el-select
            v-if="!foodDetail.id"
              :value="select.label"
              placeholder="请选择菜系"
              @change="
                (e) => {
                  this.select = e;
                }
              "
            >
              <el-option-group
                v-for="group in options"
                :key="group.label"
                :label="group.label"
              >
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item"
                >
                </el-option>
              </el-option-group>
            </el-select>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="foodDetail.id ? changeEnsure() : addFoods()"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      options: [
        {
          value: "/ChineseFood",
          label: "中国菜",
          options: [
            {
              value: "Shanghai",
              label: "上海",
            },
          ],
        },
        {
          value: "/ForeignFood",
          label: "外国菜",
          options: [
            {
              value: "Chengdu",
              label: "成都",
            },
          ],
        },
      ],
      select: {
        label: "",
        value: "",
      },
    };
  },
  props: {
    dialogTableVisible: {
      type: Boolean,
      default: false,
    },
    foodDetail: {
      type: Object,
    },
  },
  computed: {},
  watch: {},
  created() {
    this.getCategory();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  methods: {
    change(e) {
      console.log(e);
    },
    changeEnsure() {
      console.log("修改");
      this.$api
        .changeFoodsData(this.$route.path + "/changeData", this.foodDetail)
        .then((res) => {
          if (res.code === "200") {
            this.$emit("update:dialogTableVisible", false);
            this.$message({
              type: "success",
              message: "修改成功!",
            });
          } else {
            this.$message({
              type: "info",
              message: "失败!",
            });
          }
        });
    },
    handleClose() {
      this.$confirm("确认直接关闭？")
        .then(() => {
          this.$emit("update:dialogTableVisible", false);
        })
        .catch(() => {});
    },
    getCategory() {
      this.$api.getCategory("/ChineseFood/category").then((res) => {
        this.options[0].options = res.data.map((val) => {
          return {
            value: "/ChineseFood" + val.id,
            label: val.category,
          };
        });
      });
      this.$api.getCategory("/ForeignFood/category").then((res) => {
        this.options[1].options = res.data.map((val) => {
          return {
            value: "/ForeignFood" + val.id,
            label: val.category,
          };
        });
      });
    },
    addFoods() {
      console.log(this.select);
      if (this.foodDetail.foodname == null) {
        this.$message({
          type: "info",
          message: "菜名不能为空!",
        });
        return;
      }
      this.foodDetail.type = this.select.label;
      console.log("新增空数据");
      let flag = this.select.value.indexOf("/ChineseFood");
      if (flag != -1) {
        this.$api
          .addFoods("/ChineseFood/addChineseFoods", this.foodDetail)
          .then((res) => {
            console.log(res);
          });
      } else {
        this.$api
          .addFoods("/ForeignFood/addForeignFoods", this.foodDetail)
          .then((res) => {
            console.log(res);
          });
      }
      console.log(this.foodDetail);
    },
  },
};
</script>
<style lang='scss' scoped>
/deep/ .el-dialog__body {
  padding: 0 20px 10px 20px;
}
.el-input {
  margin: 5px 0;
}
.dialogTitle {
  div {
    padding: 5px 0;
  }
  text-align: center;
  padding: 20px 0;
}
</style>