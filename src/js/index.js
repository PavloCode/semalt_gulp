console.log('work');

Highcharts.chart('container', {
    chart: {
        marginTop: 50,
        // borderColor: '#EBBA95',
        // borderWidth: 2,
        // type: 'line'
    },

    title: {
        text: 'Flats sold per month',

    },

    xAxis: {
        categories: ['', 'May1', '', 'May7', '', '', 'May14', '', '', 'May28', '', '', ''],


    },
    yAxis: {
        labels: {
            style: {
                color: '#C2CFE0',
                fontSize: 12,
                textTransform: 'Uppercase'
            }
        },
        title: {
            text: 'Numbet of keywords',
            style: {
                color: '#C2CFE0',
                fontSize: 12,
            }
        },
    },
    series: [{
        name: 'Top 1',
        data: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
        color: '#0288D1',
        pointStart: 0,

        // pointInterval: 7
    }, {
        name: 'Top 3',
        data: [2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500],
        color: '#7E4CAF',
        pointStart: 0,
        // pointInterval: 7
    }, {
        name: 'Top 10',
        data: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000],
        color: '#27A69A',
        pointStart: 0,
        // pointInterval: 7
    }, {
        name: 'Top 30',
        data: [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500],
        color: '#B71C1C',
        pointStart: 0,
        // pointInterval: 7

    }, {
        name: 'Top 50',
        data: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
        color: '#FF5722',
        pointStart: 0,
        // pointInterval: 7

    }, {
        name: 'Top 100',
        data: [500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500],
        color: '#04C38B',
        text: 'asdasdasd',
        pointStart: 0,

        // pointInterval: 7
    }, ]
});