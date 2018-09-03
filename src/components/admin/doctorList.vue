<template>
  <el-row class="warp">
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <!-- <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item> -->
        <el-breadcrumb-item>医生列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

<div>
    <StaticsTitle/>
</div>

    <el-col :span="24" class="warp-main" v-loading="loading" element-loading-text="拼命加载中">
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
          <el-form :inline="true" :model="filters">
            <el-form-item>
              <el-input v-model="filters.name" placeholder="医生姓名" style="min-width: 240px;" @keyup.enter.native="handleSearch"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSearch">查询</el-button>
              <el-button type="primary" @click="addFormVisible = true">添加新医生</el-button>
            </el-form-item>
          </el-form>
        </el-col>

      <!--列表-->
      <el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
        <el-table-column type="index" width="60">
        </el-table-column>
        <el-table-column prop="userName" label="医生姓名" >
        </el-table-column>
        <el-table-column prop="workState" label="工作量" sortable>
        </el-table-column>
        
        <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button @click="editFormVisible = true" type="text" size="small">编辑资料</el-button>
        </template>
      </el-table-column>
      </el-table>


      <el-dialog title="编辑" :visible.sync ="editFormVisible" :close-on-click-modal="false">
        <el-form :model="editForm" label-width="100px" :rules="editFormRules" ref="editForm">
          <el-form-item label="手机号" prop="phoneNumber">
            <el-input v-model="editForm.phoneNumber" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="userName">
            <el-input v-model="editForm.userName" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="editForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <!-- <el-form-item label="出版日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="editForm.publishAt"></el-date-picker>
          </el-form-item> -->
          <el-form-item label="简介" prop="description">
            <el-input type="textarea" v-model="editForm.description" :rows="8"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="editFormVisible = false">取消</el-button>
          <el-button type="primary" @click.native="editSubmit">提交</el-button>
        </div>
      </el-dialog>

      <!--新增界面-->
      <el-dialog title="新增" :visible.sync ="addFormVisible" :close-on-click-modal="false">
        <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
          <el-form-item label="手机号" prop="phoneNumber">
            <el-input v-model="addForm.phoneNumber" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="userName">
            <el-input v-model="addForm.userName" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="editForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <!-- <el-form-item label="出版日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="addForm.publishAt"></el-date-picker>
          </el-form-item> -->
          <el-form-item label="简介" prop="description">
            <el-input type="textarea" v-model="addForm.description" :rows="8"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="addFormVisible = false">取消</el-button>
          <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
        </div>
      </el-dialog>
    </el-col>
  </el-row>
</template>

<script>
import API from "../../api/api_user";
import StaticsTitle from "./staticsTitle.vue";

export default {
  data() {
    return {
      filters: {
        name: ""
      },
      
      loading: false,
      users: [],
      total: 0,
      page: 1,
      limit: 10,
      loading: false,
      
        //编辑相关数据
        editFormVisible: false,//编辑界面是否显示
        editFormRules: {
          phoneNumber: [
            {required: true, message: '请输入手机号', trigger: 'blur'}
          ],
          userName: [
            {required: true, message: '请输入姓名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          description: [
            {required: false, message: '请输入简介', trigger: 'blur'}
          ]
        },
        editForm: {
          id: 0,
          phoneNumber: '',
          userName: '',
          password:'',
          publishAt: '',
          description: ''
        },

        //新增相关数据
        addFormVisible: false,//新增界面是否显示
        addLoading: false,
        addFormRules: {
          phoneNumber: [
            {required: true, message: '请输入手机号', trigger: 'blur'}
          ],
          userName: [
            {required: true, message: '请输入姓名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          description: [
            {required: false, message: '请输入简介', trigger: 'blur'}
          ]
        },
        addForm: {
          phoneNumber: '',
          userName: '',
          password:'',
          publishAt: '',
          description: ''
        }
    };
  },
  components: {
    StaticsTitle
  },
  methods: {
    editUserInfo(val) {
      //   this.$router.push({ path: "/doctor/ecgReport" });
      alert("to do..");
    },
    handleCurrentChange(val) {
      this.page = val;
      this.search();
    },
    handleSearch() {
      this.total = 0;
      this.page = 1;
      this.search();
    },
    //获取用户列表
    search: function() {
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
        { userName: "张三", workState: "70%" },
        { userName: "李四", workState: "70%" },
        { userName: "张三", workState: "70%" },
        { userName: "李四", workState: "70%" },
        { userName: "张三", workState: "70%" },
        { userName: "李四", workState: "70%" }
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
    this.handleSearch();
  }
};
</script>

<style scoped>
</style>
