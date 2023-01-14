var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    title: [
        {
            text: '槟榔、烟草、酒精成瘾率对比'
        }
    ],
    polar: {
        radius: [30, '80%']
    },
    angleAxis: {
        max: 100,
        startAngle: 90
    },
    radiusAxis: {
        type: 'category',
        data: ['酒精', '烟草', '槟榔', ]
    },
    tooltip: {},
    series: {
        type: 'bar',
        data: [7, 49.7, 67.2],
        coordinateSystem: 'polar',
        label: {
            show: true,
            position: 'middle',
            formatter: '{b}: {c}'
        }
    }
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);