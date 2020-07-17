const canv = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(canv, {
    type: 'bar',
    data: {
        labels: ['SCL011', 'SCL012', 'SCL013'],
        datasets: [{
            label: 'Estudiantes Activas',
            data: [12, 29, 3],
            backgroundColor: [
                'rgba(253, 229, 77)',
                'rgba(236, 69, 158)',
                'rgba(113, 246, 154)'
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