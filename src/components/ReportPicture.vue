<template>
    <div class="picBox">
        <!--<el-dialog  :visible.sync="dialogEcgVisible">-->
            <!--<EcgPart/>-->
        <!--</el-dialog>-->
        <h5>报告用图选择</h5>
        <div class="operateBox">
            <div class="singleBox" v-for="(list, index) in listData" @click="changeSelect(index)">
                <p>{{list.name}}</p>
                <p>共{{list.num}}</p>
                <p>已选{{list.select}}</p>
            </div>
        </div>
        <div class="listBox">
            <div class="list" v-for="listInfo in listInfoData">
                <div class="checkBox">
                    <el-checkbox-group v-model="checkList" @change="showChange">
                        <el-checkbox :label="listInfo.id" :checked="listInfo.checked"></el-checkbox>
                    </el-checkbox-group>
                    <span class="label">使用该图</span>
                </div>
                <div class="showInfo">
                    <div class="infos">
                        <p class="infoBox"><span class="leftWords">{{listInfo.label}}</span><span class="leftWords">{{listInfo.averXL}}</span></p>
                        <p class="infoBox"><span class="leftWords">{{listInfo.date}}</span><span class="leftWords">{{listInfo.time}}</span></p>
                    </div>
                </div>
                <div class="showButton">
                    <el-button size="small" type="primary" @click="changeShowEcgPart">点击预览</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//    import EcgPart from './EcgPart.vue';

    export default {
        name: 'ReportPicture',
        components: {
//            EcgPart
        },
        props: ['changeShowEcgPart'],
        data() {
            return {
                listData: [
                    {name: '单个室早', num: 128, select: 0},
                    {name: '成对房早', num: 8, select: 0},
                    {name: '房颤', num: 31, select: 0}
                ],
                listInfoData: [
                    { checked: false, label: '单个室早', averXL: '67', date: '2018-08-03', time: '16:34', id:1},
                    { checked: true, label: '成对房早', averXL: '67', date: '2018-08-03', time: '16:34', id:2},
                    { checked: false, label: '房颤', averXL: '67', date: '2018-08-03', time: '16:34', id:3},
                    { checked: false, label: '成对房早', averXL: '67', date: '2018-08-03', time: '16:34', id:4},
                    { checked: true, label: '成对房早', averXL: '67', date: '2018-08-03', time: '16:34', id:5},
                    { checked: false, label: '房颤', averXL: '67', date: '2018-08-03', time: '16:34', id:6},
                    { checked: false, label: '房颤', averXL: '67', date: '2018-08-03', time: '16:34', id:7},
                ],
                selectIndex: 0,
                checkList: [],
                dialogEcgVisible: false
            }
        },
        mounted() {
            $('.singleBox').eq(this.selectIndex).addClass('selected');
        },
        methods: {
            changeSelect(index) {
                $('.singleBox').removeClass('selected');
                $('.singleBox').eq(index).addClass('selected');
                this.selectIndex = index;
            },
            showChange() {
                this.listData[this.selectIndex].select = this.checkList.length;
//                console.log(this.checkList)
            }
        }
    }
</script>
<style>
    .el-checkbox__label {
        position: absolute;
        width: 60px;
        opacity: 0;
        z-index: 99;
    }
</style>
<style scoped lang="scss">
    .picBox {
        box-sizing: border-box;
        padding: 0 10px 20px 10px;
        width: 620px;
        margin-top: 30px;
        text-align: left;
        border: 1px solid #000;
    }

    h5 {
        line-height: 30px;
    }

    .operateBox {
        box-sizing: border-box;
        border: 1px solid #000;
        padding: 6px;
        overflow: hidden;
        .singleBox {
            float: left;
            width: 80px;
            height: 80px;
            cursor: pointer;
            box-sizing: border-box;
            padding: 10px;
            text-align: center;
            background: #ebebeb;
            color: #999;
            font-size: 14px;
            margin-right: 10px;
        }
        .selected {
            border: 1px dashed #ff0312;
            color: #000;
        }
    }
    .listBox{
        width: 100%;
        height: 760px;
        margin-top: 10px;
        overflow-y: scroll;
        .list {
            box-sizing: border-box;
            padding: 0 30px 0 10px;
            position: relative;
            width: 576px;
            height: 80px;
            font-size: 14px;
            border: 1px solid #000;
            margin-top: 10px;
            .checkBox {
                display: flex;
                justify-content: space-around;
                align-items: center;
                float: left;
                height: 100%;
                .label {
                    position: relative;
                    top: -1px;
                    display: inline-block;
                    padding-left: 6px;
                }
            }
            .showInfo {
                height: 100%;
                float: left;
                margin-left: 40px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .infoBox {
                    overflow: hidden;
                    width: 300px;
                    .leftWords {
                        display: inline-block;
                        float: left;
                        width: 120px;
                    }
                }
            }
            .showButton {
                height: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                float: right;
            }
        }
    }

</style>