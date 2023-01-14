var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    legend: {
        data: ['嚼食槟榔', '不嚼食槟榔']
    },
    xAxis: [
        {
            type: 'category',
            data: ['扁平苔藓', '溃疡糜烂', '口腔粘膜纤维化', '口腔癌', '牙齿磨损', '红斑白斑'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Precipitation',
            min: 0,
            max: 35,
            interval: 5,
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            min: 0,
            max: 0,
            interval: 5,
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [
        {
            name: '嚼食槟榔',
            type: 'bar',
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' %';
                }
            },
            data: [
                2.6, 1.5, 30.1, 4.8, 28.3, 4.8
            ]
        },
        {
            name: '不嚼食槟榔',
            type: 'bar',
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' %';
                }
            },
            data: [
                0.7, 0.9, 0, 0.7, 7.2, 0,
            ]
        },
        {
            name: '',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' °C';
                }
            },
            data: []
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);