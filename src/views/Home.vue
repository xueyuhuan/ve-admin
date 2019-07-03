<template>
    <div class="home">
        <el-row class="row1" :gutter="15">
            <el-col :sm="24" :md="8">
                <el-card :body-style="{ 'padding-right': '0px','padding-bottom': '10px' }">
                    <header slot="header">{{$t('home.shortcut')}}<i class="fas fa-cog"></i></header>
                    <ul class="link1">
                        <li v-for="(i,index) in shortcuts" :key="index">
                            <router-link :to="i.url"><i class="fas" :class="i.i"></i></router-link>
                            <span>{{i.name}}</span>
                        </li>
                    </ul>
                </el-card>
            </el-col>
            <el-col :sm="24" :md="8">
                <el-card :body-style="{ 'padding-right': '0px','padding-bottom': '10px' }">
                    <header slot="header">{{$t('home.todo')}}<i class="fas fa-cog"></i></header>
                    <ul class="link2">
                        <li v-for="(i,index) in shortcuts" :key="index">
                            <router-link :to="i.url"><i class="fas" :class="i.i"></i></router-link>
                            <span>{{i.name}}</span>
                        </li>
                    </ul>
                </el-card>
            </el-col>
            <el-col :sm="24" :md="8">
                <el-card :body-style="{ 'padding-right': '0px','padding-bottom': '10px' }">
                    <header slot="header">{{$t('home.version')}}</header>
                    <span><i class="fas fa-american-sign-language-interpreting"></i> {{$t('home.ver.tip')}}</span>
                    <p>当前版本：v 0.1.0</p>
                    <p>框架：<el-link type="primary" href="https://cn.vuejs.org/" target="_blank">Vue.js</el-link></p>
                    <p>国际化：<el-link type="primary" href="https://kazupon.github.io/vue-i18n/zh/" target="_blank">Vue I18n</el-link></p>
                    <p>组件库：<el-link type="primary" href="https://element.eleme.io" target="_blank">Element UI</el-link></p>
                    <p>图标：<el-link type="primary" href="https://fontawesome.com/icons?d=gallery&m=free" target="_blank">Font Awesome 5</el-link></p>
                    <p>图表：<el-link type="primary" href="https://echarts.baidu.com/" target="_blank">Echarts</el-link></p>
                </el-card>
            </el-col>
        </el-row>
        <el-row class="row2" :gutter="15">
            <el-col :xs="24" :sm="24" :lg="16">
                <el-card :body-style="{ 'padding': '0px' }">
                    <header slot="header">{{$t('home.overview')}}<i class="fas fa-cog"></i></header>
                    <div id="chart"></div>
                </el-card>
            </el-col>
            <el-col :xs="24" :lg="8">
                <el-card class="card2" :body-style="{ 'padding-bottom': '0px' }">
                    <header slot="header">效果报告<i class="fas fa-cog"></i></header>
                    <p>转换率（<i class="fas fa-level-up-alt">1%</i>）</p>
                    <el-progress :percentage="50"></el-progress>
                    <p>转化率（<i class="fas fa-level-down-alt">11%</i>）</p>
                    <el-progress :percentage="66"></el-progress>
                </el-card>
                <el-card class="card3" :body-style="{ 'padding-bottom': '0px' }">
                    <header slot="header">实时监控<i class="fas fa-cog"></i></header>
                    <p>CPU使用率</p>
                    <el-progress :percentage="50"></el-progress>
                    <p>内存占用率</p>
                    <el-progress :percentage="90" color="#f56c6c"></el-progress>
                </el-card>
            </el-col>
        </el-row>
        <el-row class="row3" :gutter="15">
            <el-col :md="24" :lg="16">
                <el-card>
                    <header slot="header">最新动态</header>
                    <el-table
                            :data="tableData"
                            :default-sort = "{prop: 'date', order: 'descending'}"
                    >
                        <el-table-column
                                prop="date"
                                label="日期"
                                sortable
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="姓名"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="地址">
                        </el-table-column>
                    </el-table>
                    <el-pagination background small
                            layout="prev, pager, next"
                            :total="500">
                    </el-pagination>
                </el-card>
            </el-col>
            <el-col :sm="24" :lg="8">
                <el-card class="card2">
                    <header slot="header">产品动态</header>
                    <el-carousel height="80px" indicator-position="none">
                        <el-carousel-item v-for="item in 3" :key="item">
                            <a href="#" class="small">产品动态{{ item }}</a>
                        </el-carousel-item>
                    </el-carousel>
                </el-card>
                <el-card :body-style="{ 'padding': '0px 20px' }">
                    <header slot="header">产品公告</header>
                    <p>基于Vue框架、使用ElementUI的后台主题UI框架。
                        内置了fontawesome5图标、echarts图表、Animation.css动画等。</p>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data(){
            return{
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        computed:{
            shortcuts(){
                return[{
                    url:'/',
                    i:'fa-home',
                    name:this.$t('aside.homepage'),
                }]
            }
        },
        created() {
            console.log(this.$i18n.locale)
        },
        mounted() {
            this.drawBar();
        },
        methods:{
            drawBar(){
                let myChart = this.$echarts.init(document.getElementById('chart'));
                let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
                let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
                let yMax = 500;
                let dataShadow = [];

                for (let i = 0; i < data.length; i++) {
                    dataShadow.push(yMax);
                }

                let option = {
                    title: {
                        text: '特性示例：渐变色 阴影 点击缩放',
                        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
                    },
                    xAxis: {
                        data: dataAxis,
                        axisLabel: {
                            inside: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        z: 10
                    },
                    yAxis: {
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#999'
                            }
                        }
                    },
                    dataZoom: [
                        {
                            type: 'inside'
                        }
                    ],
                    series: [
                        { // For shadow
                            type: 'bar',
                            itemStyle: {
                                normal: {color: 'rgba(0,0,0,0.05)'}
                            },
                            barGap:'-100%',
                            barCategoryGap:'40%',
                            data: dataShadow,
                            animation: false
                        },
                        {
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color:new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color:new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#2378f7'},
                                            {offset: 0.7, color: '#2378f7'},
                                            {offset: 1, color: '#83bff6'}
                                        ]
                                    )
                                }
                            },
                            data: data
                        }
                    ]
                };
                myChart.setOption(option);
// Enable data zoom when user click bar.
                let zoomSize = 6;
                myChart.on('click', function (params) {
                    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
                    myChart.dispatchAction({
                        type: 'dataZoom',
                        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
                    });
                });
            }
        }
    }
</script>

<style lang="scss">
    .home{
        .row1{
            @media only screen and (min-width:768px){
                display: flex;
            }
            .link1{
                @include flex();
                flex-flow: wrap;
                align-content: center;
                li{
                    flex: 0 0 25%;
                    text-align: center;
                    padding-right: 20px;
                    margin-bottom: 10px;
                    a{
                        @include flex(center);
                        width: 100%;
                        background-color: #F8F8F8;
                        height: 60px;
                        transition: .3s;
                        &:hover{background-color: #f2f2f2}
                        i{
                            font-size: 24px;
                            color: #555;
                        }
                    }
                    span{
                        @extend %ellipsis
                    }
                }
            }
            .link2{
                @extend .link1;
                li{
                    flex: 0 0 50%;
                }
            }
        }
        .row2{
            @media only screen and (min-width:1200px){
                display: flex;
            }
            #chart{
                width: 100%;
                height: 330px;
            }
            .el-col:last-child{
                display: flex;
                flex-flow: column;
                .card2{
                    margin-bottom: 15px;
                }
                p{
                    margin: 0 0 10px 0;
                    i.fa-level-up-alt{color: #67C23A}
                    i.fa-level-down-alt{color: #F56C6C}
                }
                .el-progress{
                    margin: 0 0 20px 0;
                }
            }
        }
        .row3{
            .card2{
                margin-bottom: 15px;
                .el-carousel__item a {
                    @include flex(center);
                    color: #475669;
                    font-size: 14px;
                    line-height: 80px;
                    opacity: 0.75;
                    margin: 0;
                }
                .el-carousel__item:nth-child(2n) {
                    background-color: #99a9bf;
                }
                .el-carousel__item:nth-child(2n+1) {
                    background-color: #d3dce6;
                }
            }
            p{
                text-indent: 2em;
                margin: 20px 0;
            }
        }
    }
</style>
