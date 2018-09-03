<template>
    <div class="basic-info">
        <div class="basic-info-left">
            <span>姓名：<span>XXX</span></span>
            <span>年龄：<span>XXX</span></span>
            <span>性别：<span>XXX</span></span>
            <span>病史：<span>XXX</span></span>
        </div>
        <div class="basic-info-right">
            <el-select class="select" v-model="rhythmTypeSelected" placeholder="请选择节律异常类型" @change="changeRhythmType" >
                <el-option
                        v-for="item in rhythmTypeOptions"
                        :key="item"
                        :value="item">
                </el-option>
            </el-select>
            <el-select class="select" v-model="value" placeholder="请选择" @change="changeGain">
                <el-option
                        v-for="item in options"
                        :key="item"
                        :value="item">
                </el-option>
            </el-select>
            <el-button>返回列表</el-button>
            <el-button type="primary">报告编辑</el-button>
        </div>
    </div>
</template>

<script>
    import { mapMutations,mapState } from 'vuex'
    export default {
        name: 'BasicInfo',
        data() {
            return {
                options: ['5mm/mV', '10mm/mV', '20mm/mV'],
                value: '10mm/mV',
                rhythmTypeOptions:['ASY','BRD','TAC','ARR','MIS','V','VC','CV','BGM','TGM','VR','RONT','VTAC','VBRD','S','SC','CS','SBGM','STGM','STAC','SBRD','SVR','AFIB']
            }
        },
        methods:{
            ...mapMutations('ecgView',[
                'changeGainSelected',
                'changeRhythmTypeSelected'
            ]),
            changeGain(data){
                this.changeGainSelected(parseInt(data));
            },
            changeRhythmType(data){
                this.changeRhythmTypeSelected(data);
            }
        },
        computed:{
            rhythmTypeSelected:{
                get:function () {
                    return this.$store.state.ecgView.rhythmTypeSelected
                },
                set:function () {

                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .basic-info {
        display: flex;
        justify-content: space-between;
    }
    .select{
        margin-right: 10px;
    }
</style>
