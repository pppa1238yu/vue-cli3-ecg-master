<template>
    <div class="ecg-view-box">
        <BasicInfo/>
        <div class="ecg-view-content">
            <div class="ecg-dayCards-box">
                <EcgDayCards/>
            </div>
            <div>
                <div>
                    <EcgViewChart/>
                </div>
                <div class="ecg-rates-box">
                    <DragEcg/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BasicInfo from '../components/ecgView/BasicInfo.vue';
    import EcgDayCards from '../components/ecgView/EcgDayCards.vue';
    import DragEcg from '../components/dragEcg/DragEcg.vue';
    import EcgViewChart from '../components/ecgView/EcgViewChart.vue';
    export default {
        name: 'ecgView',
        components: {
            BasicInfo,
            EcgDayCards,
            DragEcg,
            EcgViewChart
        },
        data() {
            return {

            }
        }
    }
</script>
<style scoped lang="scss">
    .ecg-view-box{
        width: 1300px;
        margin: auto;
    }
    .ecg-view-content{
        display: flex;
    }
    .ecg-rates-box{
        margin-left: 50px;
    }
    .ecg-dayCards-box{
        width: 250px;
        max-height: 840px;
        overflow-y: auto;
    }
</style>
