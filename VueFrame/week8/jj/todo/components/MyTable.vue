<template>
  <div>
      TASK LISt
    <el-button type="success">创建任务</el-button>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="number" label="编号" width="150"></el-table-column>
        <el-table-column prop="taskDesc" label="任务描述" width=""></el-table-column>
        <el-table-column prop="status" label="状态" width="150"></el-table-column>
        <el-table-column prop="finishDate" label="完成时间" width="150"></el-table-column>
        <el-table-column prop="right" label="操作" width="150">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
        </template>
        </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);

    },
  },

  data() {
    return {
      tableData: [
        {
          number: "1",
          taskDesc: "测试任务哟哟哟哟~",
          status: "已完成",
          finishDate: "2016-05-02",
        },
        {
          number: "2",
          taskDesc: "测试任务哟哟哟哟~",
          status: "已完成",
          finishDate: "2016-05-02",
        },
        {
          number: "3",
          taskDesc: "测试任务哟哟哟哟~",
          status: "已完成",
          finishDate: "2016-05-02",
        },
        {
          number: "4",
          taskDesc: "测试任务哟哟哟哟~",
          status: "已完成",
          finishDate: "2016-05-02",
        },
      ],
    };
  },
};
</script>


<style lang="less" scoped>
</style>