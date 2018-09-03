<template>
    <div class="outer">
        <!--<el-dialog  :visible.sync="dialogEcgVisible">-->
            <!--<EcgPart/>-->
        <!--</el-dialog>-->
        <div class="infoBox">
            <div class="infoWidth">
                <div class="operateBox">
                    <el-button type="primary" size="small">统计信息</el-button>
                    <el-button type="primary" size="small">报告用图选择</el-button>
                    <el-button type="primary" size="small">刷新报告</el-button>
                    <el-button type="primary" size="small">下载报告</el-button>
                    <el-button type="primary" size="small">打印报告</el-button>
                    <el-button type="primary" size="small">返回数据查看</el-button>
                </div>

                <div class="tongjiBox">
                    <div class="flexNormal">
                        <div class="formBox">
                            <!--心率-->
                            <fieldset class="fileset1">
                                <legend>心率</legend>
                                <div class="flexColumn">
                                    <div class="flexBox">
                                        <span>平均心率：</span><input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>最低心率：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>最高心率：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>总心博数：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>异常心博数：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>异常心博千分比：</span>
                                        <input type="text"/>
                                    </div>
                                </div>

                            </fieldset>
                            <!--室性早搏-->
                            <fieldset>
                                <legend>室性早搏</legend>
                                <div class="flexColumn">
                                    <div class="flexBox">
                                        <span>室性总数：</span><input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>室性成对数：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>室性总数：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>室性千分比：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>二联律阵数：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>三联律阵数：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>1分钟最大：</span>
                                        <input type="text"/>
                                    </div>
                                </div>
                            </fieldset>
                            <!--室上性早搏-->
                            <fieldset>
                                <legend>室上性早搏</legend>
                                <div class="flexColumn">
                                    <div class="flexBox">
                                        <span>室上性总数：</span><input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>室上性成对数：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>室上性总数：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>室上性千分比：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>二联律阵数：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>二联律阵数：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>1分钟最大：</span>
                                        <input type="text"/>
                                    </div>
                                </div>
                            </fieldset>
                            <!--停博-->
                            <fieldset style="height: 120px">
                                <legend>停博</legend>
                                <div class="flexColumn">
                                    <div class="flexBox">
                                        <span>R-R间期大于2000ms的心博数：</span><input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>最长R-R间期(ms)：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>发生时间：</span>
                                        <input type="text"/>
                                    </div>
                                </div>
                            </fieldset>
                            <!--心率变异性[频域]-->
                            <fieldset style="height: 120px">
                                <legend>心率变异性[频域]</legend>
                                <div class="flexColumn">
                                    <div class="flexBox">
                                        <span>总功率：</span><input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>ULF：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>VLF：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>LF：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>hF：</span>
                                        <input type="text"/>
                                    </div>
                                </div>
                            </fieldset>
                            <!--心率变异性[时域]-->
                            <fieldset style="height: 120px">
                                <legend>心率变异性[时域]</legend>
                                <div class="flexColumn">
                                    <div class="flexBox">
                                        <span>SDNN：</span><input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>SDANN：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>rMSSD：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>PNN50：</span>
                                        <input type="text"/>
                                    </div>
                                    <div class="flexBox">
                                        <span>CV：</span>
                                        <input type="text"/>
                                    </div>
                                </div>
                            </fieldset>
                            <!--医师鉴定-->
                            <div class="doctorSay">
                                <p>医师鉴定：</p>
                                <textarea class="docWords"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style="position: relative;height: 956px">
            <div class="leftBox">
                <ReportPicture :changeShowEcgPart="changeShowEcgPart"/>
            </div>
            <div class="rightShowBox" v-show="showEcgPart">
                <EcgPart/>
            </div>
        </div>


    </div>
</template>
<script>
    import ReportPicture from "../components/ReportPicture.vue";
    import EcgPart from '../components/EcgPart.vue';
    export default {
        name: 'ecgReport',
        components: {
            ReportPicture,
            EcgPart
        },
        data() {
            return {
                showEcgPart: false,
                dialogEcgVisible: false
            }
        },
        methods: {
            changeShowEcgPart() {
                this.showEcgPart = true;
            }
        }
    }
</script>
<style scoped lang="scss">
    .outer {
        width: 1300px;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        padding-bottom: 40px;
    }

    .infoBox {
        position: relative;
        width: 1300px;
        .operateBox {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
        .tongjiBox {
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;
            width: 100%;
            padding: 30px 10px;
            margin-top: 10px;
            border: 1px solid #000;
        }
    }

    .flexNormal {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .infoWidth {
        width: 620px;
    }

    .formBox {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        box-sizing: border-box;
        width: 100%;
        background: #f0f0f0;
        padding: 6px;
    }

    fieldset {
        width: 180px;
        height: 182px;
        font-size: 12px;
        color: #000;
        padding-bottom: 8px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        legend {
            text-align: left;
            margin-left: 10px;
        }
        input {
            padding-left: 4px;
            width: 60px;
            font-size: 12px;
            height: 16px;
            outline: none;
            border: none;
            box-shadow: 4px 4.5px 1px -4px inset;
        }
    }

    .flexColumn {
        box-sizing: border-box;
        padding: 0 0 12px 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }

    .flexBox {
        box-sizing: border-box;
        padding: 4px 6px;
        display: flex;
        justify-content: space-between;
        span {
            display: inline-block;
            max-width: 110px;
            word-break: break-word;
            text-align: left;
        }
    }

    .doctorSay {
        box-sizing: border-box;
        padding: 0 8px;
        width: 100%;
        color: #000;
        font-size: 12px;
        line-height: 20px;
        text-align: left;
    }

    .docWords {
        box-sizing: border-box;
        padding: 3px 6px;
        width: 100%;
        height: 150px;
        resize: none;
        outline: none;
        border: none;
        box-shadow: 4px 4.5px 1px -4px inset;
    }

    .rightShowBox {
        position: absolute;
        right: -130px;
        top: -211px;
        transform: scale(0.67);
    }

    .leftBox{
        float: left;
        width: 620px;
    }
</style>
