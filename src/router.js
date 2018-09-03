import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";

import UserChangePwd from "@/components/user/changepwd";
import UserProfile from "@/components/user/profile";

import DoctorPatientList from "@/components/doctor/patientList";

// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/login',
            name: '登录',
            component: Login
        },
        {
            path: '/doctor',
            component: Home,
            name: '医生界面',
            menuShow: true,
            leaf: true, // 只有一个节点
            iconCls: 'iconfont icon-users', // 图标样式class
            children: [
                {path: '/doctor/patientList', component: DoctorPatientList, name: '医生-病人列表', menuShow: true},
                {
                    path: '/doctor/ecgView',
                    component: () => import('./views/EcgView.vue'),
                    name: '医生-病人详情',
                    menuShow: true
                },
                {
                    path: '/doctor/ecgReport',
                    component: () => import('./views/EcgReport.vue'),
                    name: '医生-病人报告',
                    menuShow: true
                }
            ]
        },
        {
            path: '/admin',
            component: Home,
            name: '管理员界面',
            menuShow: true,
            leaf: true, // 只有一个节点
            iconCls: 'iconfont icon-users', // 图标样式class
            children: [
                {
                    path: '/admin/patientList',
                    component: () => import('./components/admin/patientList.vue'),
                    name: '管理员-病人列表',
                    menuShow: true
                },
                {
                    path: '/admin/doctorList',
                    component: () => import('./components/admin/doctorList.vue'),
                    name: '管理员-医生列表',
                    menuShow: true
                }
            ]
        },
        {
            path: '/user',
            component: Home,
            name: '设置',
            menuShow: true,
            iconCls: 'iconfont icon-setting1',
            children: [
                {path: '/user/profile', component: UserProfile, name: '个人信息', menuShow: true},
                {path: '/user/changepwd', component: UserChangePwd, name: '修改密码', menuShow: true}
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    // console.log('to:' + to.path)
    if (to.path.startsWith('/login')) {
        window.localStorage.removeItem('access-user')
        next()
    } else {
        let user = JSON.parse(window.localStorage.getItem('access-user'))
        if (!user) {
            next({path: '/login'})
        } else {
            next()
        }
    }
})

export default router
