<template>
  <div class="reportForm">
    <div class="jobNum">
      <div class="job">
        <div>管理员：{{jobAdminNum}}</div>
        <div>销售部员工：{{jobXsygNum}}</div>
        <div>后勤部经理：{{jobHqjlNum}}</div>
      </div>
      <div id="myChart" :style="{width: '400px', height: '500px'}"></div>
    </div>
    <div class="depNum">
      <div class="dep">
        <div>总裁办{{depZcbNum}}</div>
        <div>销售部：{{depXsbNum}}</div>
        <div>后勤部：{{depHqbNum}}</div>
        <div>产品研发部：{{depCpyfbNum}}</div>
      </div>
      <div id="myJob" :style="{width: '400px', height: '400px'}"></div>
    </div>
  </div>
</template>
<script>
import { queryUserList } from "../../api/user";
export default {
  data() {
    return {
      jobAdminNum: 0,
      jobXsygNum: 0,
      jobHqjlNum: 0,
      depZcbNum: 0,
      depXsbNum: 0,
      depHqbNum: 0,
      depCpyfbNum: 0,
    };
  },
  created() {
    queryUserList()
      .then((userRes) => {
        userRes.forEach((item, index) => {
          console.log(item.job, item);
          if (item.job == "管理员") {
            this.jobAdminNum++;
          }
          if (item.job == "销售部员工") {
            this.jobXsygNum++;
          }
          if (item.job == "后勤部经理") {
            this.jobHqjlNum++;
          }
          if (item.department == "总裁办") {
            this.depZcbNum++;
          }
          if (item.department == "销售部") {
            this.depXsbNum++;
          }
          if (item.department == "后勤部") {
            this.depHqbNum++;
          }
          if (item.department == "产品研发部") {
            this.depCpyfbNum++;
          }
        });
        this.drawLine();
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
      let myChart = this.$echarts.init(document.getElementById("myChart")),
        myJob = this.$echarts.init(document.getElementById("myJob"));
      // 绘制 饼状 图表
      myChart.setOption({
        title: {
          text: "员工职务报表",
          subtext: "userList所有数据",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "职务报表",
            type: "pie",
            radius: "50%",
            data: [
              { value: this.jobAdminNum, name: "管理员" },
              { value: this.jobXsygNum, name: "销售部员工" },
              { value: this.jobHqjlNum, name: "后勤部经理" },
            ],
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
      // 绘制 柱状图 报表
      myJob.setOption({
        title: { text: "员工部门报表" },
        tooltip: {},
        xAxis: {
          type: "category",
          data: ["管理部", "销售部", "后勤部", "产品研发部"],
        },
        yAxis: {},
        series: [
          {
            name: "",
            type: "bar",
            data: [
              this.depZcbNum,
              this.depXsbNum,
              this.jobHqjlNum,
              this.depCpyfbNum,
            ],
          },
        ],
      });
    },
  },
};
</script>

<style lang="less" scoped>
.reportForm {
  display: flex;
}
</style>