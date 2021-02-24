<template>
  <div>
    <div>重点客户数量：{{keypointNum}}</div>
    <div>一般客户数量：{{commonlyNum}}</div>
    <div>放弃客户数量：{{giveupNum}}</div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>
<script>
import { queryCustomerList } from "../../api/customer";
export default {
  data() {
    return {
      keypointNum: 0,
      commonlyNum: 0,
      giveupNum: 0,
    };
  },
  created() {
    queryCustomerList({ page: 2, lx: "my" })
      .then((customerRes) => {
        if (customerRes.code == 0) {
          let { data } = customerRes;
          data.forEach((item, index) => {
            if (item.type == "重点客户") {
              this.keypointNum++;
            }
            if (item.type == "一般客户") {
              this.commonlyNum++;
            }
            if (item.type == "放弃客户") {
              this.giveupNum++;
            }
          });
          this.drawLine();
        }
      })
      .catch(() => {
        this.$alert("获取数据失败，请重试！");
      });
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "客户报表" },
        tooltip: {},
        xAxis: {
          data: ["重点客户", "一般客户", "放弃客户"],
        },
        yAxis: {},
        series: [
          {
            name: "数量",
            type: "bar",
            data: [this.keypointNum, this.commonlyNum, this.giveupNum],
          },
        ],
      });
    },
  },
};
</script>