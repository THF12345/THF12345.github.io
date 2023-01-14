// 第一个图
var dom = document.getElementById('chart-container1');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    title: [
        {
            text: '嚼槟榔对各种口腔疾病发病率的影响',

            left: 'cente'
        }
    ],
    backgroundColor: '#ffead9',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
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



// 第二个图
var dom = document.getElementById('chart-container2');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};
var title
var option;

const colors = ['#73c0de', '#91cc75', '#5470c6', '#73c0de', '#73c0de'];
const bgColor = '#ffead9';
const itemStyle = {
    star5: {
        color: colors[2]
    },
    star4: {
        color: colors[1]
    },
    star3: {
        color: colors[0]
    },
    star2: {
        color: colors[1]
    }
};
const data = [
    {
        name: '吃槟榔',
        itemStyle: {
            color: colors[1]
        },
        children: [
            {
                name: '提神醒脑',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '长期吃槟榔'
                            },
                            {
                                name: '槟榔的功效与作用'
                            },
                            {
                                name: '槟榔上瘾不停'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '消除疲惫减轻焦虑'
                            },
                            {
                                name: '已成生活习惯'
                            },
                            {
                                name: '比咖啡管用'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '让人更精神'
                            }
                        ]
                    }
                ]
            },
            {
                name: '消费文化',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '口味王槟榔'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '社交需要'
                            },
                            {
                                name: '聚餐时拿出来'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '枸杞槟榔'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: '不吃槟榔',
        itemStyle: {
            color: colors[2]
        },
        children: [
            {
                name: '让人不适',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '嚼槟榔头晕'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '喘不过来气'
                            },
                            {
                                name: '伤害牙齿'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '嘴巴起泡'
                            }
                        ]
                    }
                ]
            },
            {
                name: '癌症风险',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '致癌物'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '口腔纤维化'
                            },
                            {
                                name: '口腔粘膜癌变'
                            },
                            {
                                name: '槟榔致癌'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '槟榔的危害'
                            }
                        ]
                    }
                ]
            },
            {
                name: '畸形脸',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '槟榔王国的割脸人'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '正方形脸'
                            },
                            {
                                name: '毁容风险'
                            }
                        ]
                    },
                    {
                        name: '3☆'
                    },
                    {
                        name: '2☆',
                        children: [
                            {
                                name: '吃槟榔图片'
                            }
                        ]
                    }
                ]
            },
            {
                name: '商家骗人',
                children: [
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '故意弱化致癌性'
                            },
                            {
                                name: '和成天下广告'
                            },
                            {
                                name: '槟榔禁售'
                            }
                        ]
                    }
                ]
            },
            {
                name: '医学报道',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '一类致癌物'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '世卫组织发现'
                            },
                            {
                                name: '中医药'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '《柳叶刀》'
                            }
                        ]
                    }
                ]
            },
            {
                name: '例子',
                children: [
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '歌手傅松'
                            }
                        ]
                    }
                ]
            },
            {
                name: '为什么不禁',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '槟榔被监管下架'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '槟榔危害性'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
for (let j = 0; j < data.length; ++j) {
    let level1 = data[j].children;
    for (let i = 0; i < level1.length; ++i) {
        let block = level1[i].children;
        let bookScore = [];
        let bookScoreId;
        for (let star = 0; star < block.length; ++star) {
            let style = (function (name) {
                switch (name) {
                    case '5☆':
                        bookScoreId = 2;
                        return itemStyle.star5;
                    case '4☆':
                        bookScoreId = 1;
                        return itemStyle.star4;
                    case '3☆':
                        bookScoreId = 2;
                        return itemStyle.star3;
                    case '2☆':
                        bookScoreId = 3;
                        return itemStyle.star2;
                }
            })(block[star].name);
            block[star].label = {
                color: style.color,
                downplay: {
                    opacity: 0.5
                }
            };
            if (block[star].children) {
                style = {
                    opacity: 1,
                    color: style.color
                };
                block[star].children.forEach(function (book) {
                    book.value = 1;
                    book.itemStyle = style;
                    book.label = {
                        color: style.color
                    };
                    let value = 1;
                    if (bookScoreId === 0 || bookScoreId === 3) {
                        value = 5;
                    }
                    if (bookScore[bookScoreId]) {
                        bookScore[bookScoreId].value += value;
                    } else {
                        bookScore[bookScoreId] = {
                            color: colors[bookScoreId],
                            value: value
                        };
                    }
                });
            }
        }
        level1[i].itemStyle = {
            color: data[j].itemStyle.color
        };
    }
}
option = {
    title: {
        text: '关于槟榔的搜索热词',

        left: 'center'
    },
    backgroundColor: bgColor,
    color: colors,
    series: [
        {
            type: 'sunburst',
            center: ['50%', '48%'],
            data: data,
            sort: function (a, b) {
                if (a.depth === 1) {
                    return b.getValue() - a.getValue();
                } else {
                    return a.dataIndex - b.dataIndex;
                }
            },
            label: {
                rotate: 'radial',
                color: bgColor
            },
            itemStyle: {
                borderColor: bgColor,
                borderWidth: 2
            },
            levels: [
                {},
                {
                    r0: 0,
                    r: 40,
                    label: {
                        rotate: 0
                    }
                },
                {
                    r0: 40,
                    r: 105
                },
                {
                    r0: 115,
                    r: 140,
                    itemStyle: {
                        shadowBlur: 3,
                        shadowColor: colors[2],
                        color: 'transparent'
                    },
                    label: {
                        rotate: 'tangential',
                        fontSize: 10,
                        color: colors[0]
                    }
                },
                {
                    r0: 140,
                    r: 145,
                    itemStyle: {
                        shadowBlur: 80,
                        shadowColor: colors[0]
                    },
                    label: {
                        position: 'outside',
                        textShadowBlur: 1,
                        textShadowColor: '#333'
                    },
                    downplay: {
                        label: {
                            opacity: 0.5
                        }
                    }
                }
            ]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);

window.addEventListener('resize', myChart.resize);
// 第三个图
var dom = document.getElementById('chart-container3');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    title: {
        text: '槟榔的成分图',


        left: 'center'
    },
    legend: {
        top: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
                { value: 31.1, name: '酚类' },
                { value: 18.7, name: '多糖' },
                { value: 14, name: '脂肪' },
                { value: 10.8, name: '粗纤维' },
                { value: 9.9, name: '水分' },
                { value: 3, name: '灰分' },
                { value: 0.5, name: '生物碱' },
            ]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
// 第四个图
var dom = document.getElementById('chart-container4');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    title: {
        text: '海南省槟榔种植户占比',

        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'right'
    },
    series: [
        {
            name: '农户数量（万人）',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 230, name: '槟榔种植户' },
                { value: 326, name: '其他种植户' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
// 第五个图表
var dom = document.getElementById('chart-container5');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

var obj = {
    0: '金斗营乡',
    1: '安乐镇',
    2: '西湖镇',
    3: '定水镇',
    4: '石佛镇'
};

option = {

    title: {
        text: '吃槟榔时长与OSF（口腔纤维化）癌变关系',
        subtext:'以咀嚼槟榔1年为参照组，咀嚼槟榔不同时间者的OSF癌变危险度',

        left: 'center'
    },
    backgroundColor: '#ffead9',
    grid: [{
        left: "4%",
        right: "4%",
        bottom: "10%",
        height: "70%",
        containLabel: true,
    }],
    tooltip: {
        trigger: 'axis',
        borderColor: "#092B46",
        backgroundColor: "#0ffffff",
        textStyle: {
            color: "#yellow",
            fontSize: 14,
            align: 'left'
        },
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    xAxis: {
        axisLabel: {
            textStyle: {
                color: '#red',
                fontSize: 24,
                fontWeight: 700
            }
        },
        axisLine: {
            show:false
        },
        splitLine: {
            show:false
        },
        axisTick: {
            show:false
        },
        data: ['1年','5年','10年', '15年', '20年'],
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '0%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        label: {
            show: true,
            position: 'top',
            distance: 5,
            color: '#129BED',
            fontWeight: 'bolder',
            fontSize: 24
        },
        itemStyle: {
            normal: {
                color: function(params) {
                    let colorList = [
                        { color0: '#ECA641', color1: 'rgba(236,166,65,0.00)' },
                        { color0: '#2EFE95', color1: 'rgba(46,254,149,0.00)' },
                        { color0: '#5A6AFF', color1: 'rgba(90,106,255,0.00)' },
                        { color0: '#2BCEFF', color1: 'rgba(43,206,255,0.00)' },
                        { color0: '#129BED', color1: 'rgba(18,155,237,0.00)' },
                    ]
                    return {
                        type: "linear", x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            { offset: 0, color: colorList[params.dataIndex].color0 },
                            { offset: 1, color: colorList[params.dataIndex].color1 }
                        ],
                        globalCoord: false
                    }
                }
            },
            emphasis: {
                opacity: 1
            }
        },
        data: [1, 1.61, 4.38, 6.95, 64.91], // 修改值
        z: 10
    }]
};


if (option && typeof option === 'object') {
    myChart.setOption(option);
}

// 第六个图表
var dom = document.getElementById('chart-container6');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    title: [
        {
            text: '槟榔、烟草、酒精成瘾率对比（%）',
            left: 'center'
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
            position: 'left',
            formatter: '{b}: {c}'
        }
    }
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
// 第七个图表
var myChart = echarts.init(document.getElementById('chart-container7'));
myChart.showLoading();
$.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json', function (geoJson) {
    myChart.hideLoading();
    echarts.registerMap('HK', geoJson);
    myChart.setOption(
        (option = {
            title: {
                text: '全国各省槟榔相关企业分布',

                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} 家'
            },

            visualMap: {
                show: false,
                x: 'left',
                y: 'center',
                splitList: [
                    { start: 10000, end: 20000 },
                    { start: 5000, end: 10000 },
                    { start: 3000, end: 5000 },
                    { start: 100, end: 3000 },
                    { start: 0, end: 100 },
                ],
                text: ['高', '低'],
                color: [ 'RGB(93,100,98)','RGB(116,126,123)','RGB(139,151,147)', 'RGB(162,176,172)','RGB(186,201,196)']
            },
            series: [
                {
                    name: '全国各省槟榔相关企业分布',
                    type: 'map',
                    map: 'HK',
                    label: {
                        show: true
                    },
                    data: [
                        { name: '河北省', value: 47 },
                        { name: '山西省', value: 27 },
                        { name: '辽宁省', value: 37 },
                        { name: '吉林省', value: 17 },
                        { name: '黑龙江省', value: 34 },
                        { name: '江苏省', value: 127 },
                        { name: '浙江省', value: 133 },
                        { name: '安徽省', value: 88 },
                        { name: '福建省', value: 5914 },
                        { name: '江西省', value: 275 },
                        { name: '山东省', value: 331 },
                        { name: '河南省', value: 279 },
                        { name: '湖北省', value: 265 },
                        { name: '湖南省', value: 17298 },
                        { name: '广东省', value: 3524 },
                        { name: '海南省', value: 10099 },
                        { name: '四川省', value: 71 },
                        { name: '贵州省', value: 277 },
                        { name: '云南省', value: 3474 },
                        { name: '陕西省', value: 69 },
                        { name: '甘肃省', value: 20 },
                        { name: '青海省', value: 7 },
                        { name: '台湾省', value: 21 },
                        { name: '内蒙古自治区', value: 26 },
                        { name: '广西壮族自治区', value: 159 },
                        { name: '西藏自治区', value: 7 },
                        { name: '宁夏回族自治区', value: 7 },
                        { name: '新疆维吾尔自治区', value: 29 },
                        { name: '北京市', value: 37 },
                        { name: '天津市', value: 9 },
                        { name: '上海市', value: 28 },
                        { name: '重庆市', value: 38 },
                        { name: '香港特别行政区', value: 13 },
                        { name: '澳门特别行政区', value: 0 }
                    ],

                }
            ]
        })
    );
});