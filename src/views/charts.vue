<template>
  <div>
    <div class="chart">
      <div id="myChart" :style="{ width: '600px', height: '600px' }"></div>
      <div id="myChartTwo" :style="{ width: '600px', height: '600px' }"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: "",
  
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      PiedataOne:[],
      PiedataTwo:[],

    };
  },
  created() {},
  mounted() {
    this.getPieData('/ChineseFood/');
    this.getPieDataTwo('/ForeignFood/');
  },
  methods: {
    // 绘制图表
    drawPie(data) {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        title: {
          text: "中国菜系分布图",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "中国菜系分布图",
            type: "pie",
            radius: "50%",
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
      myChart.on('click',(e)=>{
        this.$router.push({path:'/ChineseFood',query:{category:e.name}})
      })
      
    },
    drawPieTwo(data){
      let myChartTwo = this.$echarts.init(document.getElementById("myChartTwo"));
       myChartTwo.setOption({
        title: {
          text: "外国菜系分布图",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "外国菜系分布图",
            type: "pie",
            radius: "50%",
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
      myChartTwo.on('click',(e)=>{
        this.$router.push({path:'/ForeignFood',query:{category:e.name}})
      })
    },

    

    // 基于准备好的dom，初始化echarts实例
    getPieData(url) {
      this.$api.getCategoryChartData(url).then((res) => {
        this.PiedataOne = res.data;
        this.drawPie(this.PiedataOne);
      });
    },
     getPieDataTwo(url) {
      this.$api.getCategoryChartData(url).then((res) => {
        this.PiedataTwo = res.data;
        this.drawPieTwo(this.PiedataTwo);
      });
    },
  },
};
</script>
<style scoped>
.chart{
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}
</style>