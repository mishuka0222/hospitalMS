var chart1 = document.getElementById("linechart");
var chart2 = document.getElementById('barchart');
var chart3 = document.getElementById("piechart");
var chart4 = document.getElementById("doughnutchart");
var chart5 = document.getElementById("stackedbarchart");
var chart6 = document.getElementById("radarchart");

var myChart1 = new Chart(chart1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            backgroundColor: "rgba(48, 164, 255, 0.2)",
            borderColor: "rgba(48, 164, 255, 0.8)",
            data: ['1150', '1160', '1160', '1165', '1160', '1170', '1175', '1165', '1170', '1180', '1185', '1190'],
            label: '',
            fill: true
        }]
    },
    options: {
        responsive: true,
        title: { display: false, text: 'Chart' },
        legend: { position: 'top', display: false, },
        tooltips: { mode: 'index', intersect: false, },
        hover: { mode: 'nearest', intersect: true },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Months'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Sales volume'
                }
            }]
        }
    }
});

var myChart2 = new Chart(chart2, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Income',
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgb(54, 162, 235)",
            borderWidth: 1,
            data: ["20", "30", "40", "50", "60", "70", "80"],
        }, {
            label: 'Expenses',
            backgroundColor: "rgba(244, 67, 54, 0.5)",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 1,
            data: ["5", "15", "25", "35", "45", "35", "25"],
        }]
    },
    options: {
        responsive: true,
        title: { display: false, text: 'Chart' },
        legend: { position: 'top', display: true, },
        tooltips: { mode: 'index', intersect: false, },
        hover: { mode: 'nearest', intersect: true },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Months'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Revenue'
                }
            }]
        }
    }
});

var myChart3 = new Chart(chart3, {
    type: 'pie',
    data: {
        labels: ["Engineering", "Customer Support", "Operations", "Marketing", "R and D"],
        datasets: [{
            data: ["62", "80", "30", "25", "17"],
            backgroundColor: ["#009688", "#795548", "#673AB7", "#2196F3", "#6da252"],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: { display: true, fullWidth: true, position: 'right', },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    var label = tooltipLabel.split(" - ");
                    for (var i in allData) { total += allData[i]; }
                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                    return label[0] + ' (' + tooltipPercentage + '%)';
                }
            }
        },
    }
});

var myChart4 = new Chart(chart4, {
    type: 'doughnut',
    data: {
        labels: ["Married", "Single", "Widowed", "Legaly Separated", "Anulled"],
        datasets: [{
            data: ["60", "45", "6", "3", "11"],
            backgroundColor: ["#F44336", "#2196F3", "#795548", "#6da252", "#f39c12", "#009688", "#673AB7"],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: { display: true, fullWidth: true, position: 'right', },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    var label = tooltipLabel.split(" - ");
                    for (var i in allData) { total += allData[i]; }
                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                    return label[0] + ' (' + tooltipPercentage + '%)';
                }
            }
        },
    }
});

var myChart5 = new Chart(chart5, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Income',
            backgroundColor: "rgba(0, 150, 136, .5)",
            borderColor: "rgb(0, 150, 136)",
            borderWidth: 1,
            data: ["20", "30", "40", "50", "60", "70", "80"],
        }, {
            label: 'Liabilites',
            backgroundColor: "rgba(76, 175, 80, .5)",
            borderColor: "rgba(76, 175, 80)",
            borderWidth: 1,
            data: ["2", "5", "15", "25", "35", "25", "15"],
        }]
    },
    options: {
        responsive: true,
        title: { display: false, text: 'Chart' },
        legend: { position: 'top', display: true, },
        tooltips: { mode: 'index', intersect: false, },
        hover: { mode: 'nearest', intersect: true },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Months'
                }
            }],
            yAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Volume'
                }
            }]
        }
    }
});

var mychart6 = new Chart(chart6, {
    type: 'radar',
    data: {
        labels: ['Age 18-24', 'Age 25-31', 'Age 32-38', 'Age 39-45', 'Age 46-100+'],
        datasets: [{
            label: '',
            backgroundColor: "rgba(48, 164, 255, 0.2)",
            borderColor: "rgba(48, 164, 255, 0.8)",
            pointBackgroundColor: "rgba(48, 164, 255, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(48, 164, 255, 1)",
            data: ["26", "35", "25", "28", "18"],
        }]
    },
    options: {
        legend: { position: 'top', display: false, },
        title: { display: true, text: 'Age Groups' },
        scale: { ticks: { beginAtZero: true } }
    }
});