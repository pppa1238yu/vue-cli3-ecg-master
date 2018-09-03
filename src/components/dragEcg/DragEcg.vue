<template>
    <div>
        <div class="dragOuter">
            <div class="operateBox">
                <div class="operateLine">
                    <i class="el-icon-location operateButton"></i>
                    <div class="line"></div>
                </div>
            </div>
            <canvas width="1000" height="130" class="dragCanvasBox"></canvas>
            <br>
        </div>
        <el-button @click="changeLine">变换line</el-button>
    </div>


</template>
<script>
    import {mapMutations, mapState} from 'vuex'
    export default {
        name: 'dragEcg',
        data() {
            return {
                select: false
            }
        },
        mounted() {
            this.initCanvas();
            $('.operateBox').on('mouseleave', () => {
                this.select = false;
            });
            $(document).on('mouseup', (e) => {
                this.select = false;
            });
            $('.operateButton').on('mousedown', (e) => {
                this.select = true;
                let offsetX = e.clientX - $('.operateBox').offset().left;
                this.translateDragLine(offsetX);
            });

            $('.operateBox').on('mousemove', (e) => {
                if (this.select) {
                    let offsetX = e.clientX - $('.operateBox').offset().left;
                    this.translateDragLine(offsetX);
                }
            });

            $('.operateBox').on('click', (e) => {
                let offsetX = e.clientX - $('.operateBox').offset().left;
                if (offsetX > 940 || offsetX < 0) return;
                let calcMin = parseInt(offsetX / 940 * 1440);
                this.changeCurMin(calcMin);
                this.translateDragLine(offsetX);
            });
        },
        computed: {
            curMin: {
                get: function () {
                    return this.$store.state.ecgDrag.curMin;
                },
                set: function () {
                }
            }
        },
        watch: {
            curMin: function () {
                this.translateDragLine(this.curMin / 1440 * 940);
            }
        },
        methods: {
            ...mapMutations('ecgDrag', [
                'changeCurMin'
            ]),
            changeLine() {
                this.changeCurMin(200);
            },
            translateDragLine(offsetX) {
                if (offsetX > 940 || offsetX < 0) return;
                $('.operateLine').css({
                    left: offsetX - 8 + 'px'
                })
            },
            initCanvas() {
                let c_canvas = $('.dragCanvasBox')[0];
                let options = {
                    data: [69, 69, 70, 71, 69, 66, 64, 69, 66, 62, 68, 64, 62, 60, 64, 60, 61, 58, 64, 61, 62, 61, 61, 62, 59, 61, 62, 63, 61, 67, 66, 64, 67, 67, 61, 60, 63, 60, 56, 56, 57, 57, 59, 60, 61, 62, 60, 73, 107, 112, 108, 109, 106, 102, 109, 101, 92, 90, 94, 93, 95, 95, 93, 92, 89, 85, 84, 84, 89, 90, 92, 97, 100, 100, 74, 75, 76, 76, 81, 82, 82, 81, 80, 82, 89, 97, 90, 93, 93, 92, 96, 92, 91, 89, 90, 86, 85, 86, 86, 84, 86, 102, 106, 104, 98, 105, 96, 92, 111, 100, 96, 89, 80, 77, 68, 64, 71, 77, 76, 70, 72, 81, 81, 74, 71, 76, 83, 73, 72, 70, 71, 72, 0, 0, 0, 0, 0, 69, 67, 65, 62, 62, 59, 56],
                    x_start_pos: 40,
                    x_end_pos: 980,
                    timeData: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
                };
                let context = c_canvas.getContext("2d");
                context.clearRect(0, 0, c_canvas.width, c_canvas.height);
                this.drawGrid(c_canvas, options);
            },
            drawClick(c_canvas, x_start_pos, x_end_pos, timeData) {
                let context = c_canvas.getContext("2d");
                context.strokeStyle = "#000";
                context.strokeWidth = 1;
                context.beginPath();
                context.font = "8pt Calibri";
                context.fillStyle = '#000';
//                绘制x,y轴
                context.moveTo(x_start_pos, 110);
                context.lineTo(x_start_pos, 10);
                context.moveTo(x_start_pos, 110);
                context.lineTo(x_end_pos, 110);
//                绘制y轴click
                for (let y = 160; y >= 40; y -= 20) {
                    context.moveTo(x_start_pos, 10 + (160 - y) * (100 / 120));
                    context.lineTo(x_start_pos - 6, 10 + (160 - y) * (100 / 120));
                    if (y % 40 === 0) {
                        if (y >= 100) {
                            context.fillText(y, x_start_pos - 26, 13 + (160 - y) * (100 / 120));
                        } else {
                            context.fillText(y, x_start_pos - 20, 13 + (160 - y) * (100 / 120));
                        }
                    }
                }
//                绘制x轴click
                for (let x = 0; x < timeData.length; x++) {
                    let xPos = x_start_pos + x * (x_end_pos - x_start_pos) / 24;
                    if (x === 0) continue;
                    context.moveTo(xPos, 110);
                    context.lineTo(xPos, 116);
                    if (timeData[x] >= 10) {
                        context.fillText(timeData[x], xPos - 6, 125);
                    } else {
                        context.fillText(timeData[x], xPos - 3, 125);
                    }
                }
                context.stroke();
                context.closePath();
                return;
            },

            drawEcg(c_canvas, x_start_pos, x_end_pos, data){
                let context = c_canvas.getContext("2d");
                context.strokeStyle = "#ff0312";
                context.strokeWidth = 1;
                context.beginPath();
                let length = data.length;
                let startData = data[0];
                if (startData < 40) startData = 40;
                if (startData > 160) startData = 160;
                context.moveTo(x_start_pos, 10 + (160 - startData) * (100 / 120));
                for (let i = 1; i <= length; i++) {
                    let xPos = x_start_pos + i * (x_end_pos - x_start_pos) / length;
                    let yData = data[i];
                    if (yData < 40) yData = 40;
                    if (yData > 160) yData = 160;
                    let yPos = 10 + (160 - yData) * (100 / 120);
                    context.lineTo(xPos, yPos);
                }
                context.stroke();
                context.closePath();
                return;
            },
            drawGrid(c_canvas, options) {
                let {x_start_pos, x_end_pos, timeData, data} = {...options};
                this.drawClick(c_canvas, x_start_pos, x_end_pos, timeData);
                this.drawEcg(c_canvas, x_start_pos, x_end_pos, data);
            }
        }
    }
</script>
<style scoped lang="scss">
    .dragOuter {
        position: relative;
        box-sizing: border-box;
        width: 1000px;
        height: 146px;
        overflow: hidden;
        .operateBox {
            position: absolute;
            z-index: 99;
            box-sizing: border-box;
            width: 940px;
            left: 40px;
            height: 126px;
            .operateLine {
                position: absolute;
                left: 0;
                width: 16px;
                height: 100%;
                .operateButton {
                    cursor: pointer;
                    display: inline;
                }
                .line {
                    width: 1px;
                    height: calc(100% - 14px);
                    background-color: #ff1eba;
                    margin: -3px auto 0 auto;
                }
            }
        }
    }

    .dragCanvasBox {
        position: absolute;
        box-sizing: border-box;
        bottom: 0;
        width: 1000px;
        height: 130px;
    }
</style>