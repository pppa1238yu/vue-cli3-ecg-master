<template>
    <div class="ecg-day-cards">
        <el-card  v-for="o in 7" :key="o" class="box-card">
            <div class="box-card-content">
                <div>
                    2018年7月3日
                </div>
                <div>
                    <span>N:<span>xxx</span></span>
                    <span>V:<span>xxx</span></span>
                    <span>S:<span>xxx</span></span>
                    <span>Q:<span>xxx</span></span>
                    <span>F:<span>xxx</span></span>
                </div>
                <div>
                    <span>室性：<span>xxx</span></span>
                    <span>室上性：<span>xxx</span></span>
                    <span>房颤：<span>xxx</span></span>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'EcgDayCards',
        data() {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .ecg-day-cards{
        font-size: 14px;
    }
    .box-card{
        margin-top: 10px;
    }
    .box-card-content>div{
        margin-bottom: 25px;
    }
</style>
