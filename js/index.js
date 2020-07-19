const canv = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(canv, {
    type: 'bar',
    data: {
        labels: ['SCL011', 'SCL012', 'SCL013', "SCL014"],
        datasets: [{
            label: 'Pagos Realizados',
            data: [12, 29, 3, -10],
            backgroundColor: [
                '#fee54d',
                '#EC459E',
                '#71F69A',
                "#5B5756"
            ]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
        responsive: true,
        maintainAspectRatio: false
    }
});

const canv2 = document.getElementById('myChart2').getContext('2d');
let myChart2 = new Chart(canv2, {
    type: 'bar',
    data: {
        labels: ['SCL011', 'SCL012', 'SCL013', "SCL014"],
        datasets: [{
            label: 'Pagos Realizados',
            data: [12, 29, 3, -10],
            backgroundColor: [
                '#fee54d',
                '#EC459E',
                '#71F69A',
                "#5B5756"
            ]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
        responsive: true,
        maintainAspectRatio: false
    }
});
