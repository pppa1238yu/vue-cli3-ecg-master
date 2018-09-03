<template>

<div>
<el-row type="flex" class="row-bg" justify="space-between">
</el-row>
<el-row type="flex" class="row-bg" justify="space-around">
  <el-col :span="4"><div class="grid-content bg-purple">
      <span>病人总数 &nbsp;&nbsp;&nbsp; <strong class="grid-content-strong">100</strong>人 </span>
      </div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">
      <span>医生总数 &nbsp;&nbsp;&nbsp; <strong class="grid-content-strong">100</strong>人 </span>
      </div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">
      <span>已上传 &nbsp;&nbsp;&nbsp; <strong class="grid-content-strong">100</strong>条 </span>
      </div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">
      <span>已分析 &nbsp;&nbsp;&nbsp; <strong class="grid-content-strong">100</strong>条 </span>
      </div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">
      <span>生成报告 &nbsp;&nbsp;&nbsp; <strong class="grid-content-strong">100</strong>例 </span>
      </div></el-col>
</el-row>
</div>
</template>

<script>
export default {
  name: "StaticsTitle",
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  /* &:last-child {
    margin-bottom: 0;
  } */
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #72b2f9;
}
.bg-purple-light {
  background: #72b2f9;
}
.grid-content {
  border-radius: 4px;
  min-height: 48px;
  line-height: 48px;
  text-align: center;
}

.grid-content-strong {
  font-size: 35px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>