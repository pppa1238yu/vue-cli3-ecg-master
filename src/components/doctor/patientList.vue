<template>
  <el-row class="warp">
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <!-- <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item> -->
        <el-breadcrumb-item>病人列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="24" class="warp-main" v-loading="loading" element-loading-text="拼命加载中">
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
          <el-form :inline="true" :model="filters">

             <el-select v-model="valueAnalysis" placeholder="请选择数据状态">
              <el-option
                v-for="item in optionsAnalysis"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

             <el-select v-model="value" placeholder="请选择审核状态">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

            <el-form-item>
              <el-input v-model="filters.name" placeholder="查询用户名" style="min-width: 240px;" @keyup.enter.native="handleSearch"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSearch">查询</el-button>
            </el-form-item>
          </el-form>
        </el-col>

      <!--列表-->
      <el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
        <el-table-column type="index" width="60">
        </el-table-column>
        <el-table-column prop="userName" label="姓名" >
        </el-table-column>
        <el-table-column prop="dataState" label="数据状态" :formatter="formatAnalysis" sortable>
        </el-table-column>
        <el-table-column prop="auditState" label="审核状态"  :formatter="formatAuditState" sortable>
        </el-table-column>
        
        <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button @click="viewReport(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="generateReport(scope.row)" type="text" size="small">生成报告</el-button>
        </template>
      </el-table-column>
      </el-table>

    </el-col>
  </el-row>
</template>

<script>
  import API from '../../api/api_user';

  export default {
    data() {
      return {
        filters: {
          name: ''
        },
        loading: false,
        users: [],
        total: 0,
        page: 1,
        limit: 10,
        loading: false,

        options: [{
          value: '0',
          label: '未审核'
        }, {
          value: '1',
          label: '已审核'
        }, {
          value: '2',
          label: '全部'
        }],
        value: '2',
        
        optionsAnalysis: [{
          value: '0',
          label: '未上传'
        }, {
          value: '1',
          label: '分析中'
        }, {
          value: '2',
          label: '分析完'
        }],
        valueAnalysis: '2'
      }
    },
    methods: {
      //性别显示转换
      formatAuditState: function (row, column) {
        return row.auditState == 1 ? '已审核' : row.auditState == 0 ? '未审核' : '全部';
      },
      formatAnalysis: function (row, column) {
        return row.Analysis == 1 ? '分析中' : row.Analysis == 0 ? '未上传' : '分析完';
      },
      viewReport(val) {
        this.$router.push({ path: "/doctor/ecgView" });
      },
      generateReport(val) {
        this.$router.push({ path: "/doctor/ecgReport" });
      },
      handleCurrentChange(val) {
        this.page = val;
        this.search();
      },
      handleSearch(){
        this.total = 0;
        this.page = 1;
        this.search();
      },
      //获取用户列表
      search: function () {
        let that = this;
        let params = {
          page: that.page,
          limit: 10,
          name: that.filters.name
        };

        that.loading = true;
        // API.findList(params).then(function (result) {
          that.loading = false;
          // if (result && result.users) {
          //   that.total = result.total;
          //   that.users = result.users;
          // }
          that.total = 20;
          that.users = [
            {userName:"张三",dataState:"0",auditState:"1"},
            {userName:"李四",dataState:"0",auditState:"1"},
            {userName:"张三",dataState:"0",auditState:"1"},
            {userName:"李四",dataState:"0",auditState:"1"},
            {userName:"张三",dataState:"0",auditState:"1"},
            {userName:"李四",dataState:"0",auditState:"1"}
          ];
        // }, function (err) {
        //   that.loading = false;
        //   that.$message.error({showClose: true, message: err.toString(), duration: 2000});
        // }).catch(function (error) {
        //   that.loading = false;
        //   console.log(error);
        //   that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
        // });
      }
      
    },
    mounted() {
      this.handleSearch()
    }
  }
</script>

<style scoped>

</style>
