var myChart = echarts.init(document.getElementById('ISQQW-chart-container1'));
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;
var xData = ['2016年', '2017年', '2018年', '2019年', '2020年', '2021年']
var lineData = [100, 100, 100, 100, 100, 100, 100]
var lastYearData = [12.14, 11.32, 10.00, 10.22,10.29, 9.89];
var thisYearData = [12.20, 11.34, 10.05, 10.17, 10.34, 9.97];
var timeLineData = [1];
let legend = ['全国槟榔产量', '全国槟榔需求量'];
var background = "#0e2147"; //背景
let textColor = "#fff";
let lineColor = "rgba(255,255,255,0.2)";
let colors = [{
    borderColor: "rgba(220, 32, 85, 0.8)",
    start: "rgba(220, 32, 85, 0.8)",
    end: "rgba(220, 32, 86, 0.1)"
},
    {
        borderColor: "rgba(91, 236, 204, 0.8)",
        start: "rgba(91, 236, 204, 0.1)",
        end: "rgba(91, 236, 204, 0.8)"
    },
];
let borderData = [];
let scale = 2;
borderData = xData.map(item => {
    return scale;
});


var option = {
    baseOption: {
        timeline: {
            show: false,
            top: 0,
            data: []
        },
        tooltip: {
            trigger: 'axis',
            // type:'shadow',
            axisPointer: {
                type: 'shadow',
            },
            backgroundColor: 'rgba(17,95,182,0.5)',
            textStyle: {
                color: "#fff"
            },
            formatter: '{a}<br/>{b} :\n\n{c} 万吨'
        },
        legend: {
            top: '5%',
            right: 'center',
            itemWidth: 20,
            itemHeight: 5,
            itemGap: 30,
            icon: 'horizontal',
            textStyle: {
                color: '#ffffff',
                fontSize: 14,
            },
            data: legend
        },
        grid: [
            // 左边
            {
                show: false,
                left: '2%',
                top: '15%',
                bottom: '21%',
                containLabel: true,
                width: '37%'
            },
            // 中间
            {
                show: false,
                left: '52%',
                top: '15%',
                bottom: '23%',
                width: '0%'
            },
            // 右边
            {
                show: false,
                right: '2%',
                top: '15%',
                bottom: '21%',
                containLabel: true,
                width: '37%'
            }],
        xAxis: [{
            type: 'value',
            inverse: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(45, 67, 119, 0.8)'
                }
            },
            axisTick: {
                show: false
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                color: textColor
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#2D4377',
                    type: 'dashed',
                }
            },
        }, {
            gridIndex: 1,
            show: false
        }, {
            gridIndex: 2,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(45, 67, 119, 0.8)'
                }
            },
            axisTick: {
                show: false
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                color: textColor
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#2D4377',
                    type: 'dashed',
                }
            },
        }],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: true,
                lineStyle: {
                    color: lineColor
                }
            },

            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: xData
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                // padding:[10,0,0,0],
                textStyle: {
                    color: '#ffffff',
                    fontSize: 13
                },
                align: "center"

            },
            data: xData.map(function (value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center'
                    }
                }
            })
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: true,
                lineStyle: {
                    color: lineColor
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false

            },
            data: xData
        }],
        series: []

    },
    options: []
}

// option.baseOption.timeline.data.push(timeLineData[0])
option.options.push({
    backgroundColor: '#081736',
    series: [{
        name: "全国槟榔产量",
        type: "bar",
        barWidth: 10,
        stack: "1",
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: colors[0].start
                },
                    {
                        offset: 1,
                        color: colors[0].end
                    }
                ]),
            }
        },
        label: {
            normal: {
                show: false,
            }
        },
        data: lastYearData,
        animationEasing: "elasticOut"
    },
        {
            name: "全国槟榔需求量",
            type: "bar",
            stack: "2",
            barWidth: 10,
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: colors[1].start
                    },
                        {
                            offset: 1,
                            color: colors[1].end
                        }
                    ]),
                }
            },
            label: {
                normal: {
                    show: false,
                }
            },
            data: thisYearData,
            animationEasing: "elasticOut"
        },
    ]
});
if (option && typeof option === "object") {
    myChart.setOption(option, true);
    var index8 = 0; //播放所在下标
    var mTime = setInterval(function () {
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: index8
        });
        index8++;
        if (index8 >= 12) {
            //console.log('data4', fxdata.length)
            index8 = 0;
            //console.log(fxdata)
        }
    }, 3000);
}


window.addEventListener('resize', myChart.resize);



