google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Mes', 'Anteriores ', 'SCL008', 'SCL009', 'SCL010', 'SCL011', 'SCL012'],
    ['Enero', 1000, 100, 300, 400, 100, 350],
    ['Febrero', 100, 100, 300, 400, 100, 350],
    ['Marzo', 100, 100, 300, 400, 100, 350],
    ['Abril', 100, 100, 300, 400, 100, 350],
    ['Mayo', 100, 100, 300, 400, 100, 350],
    ['Junio', 100, 100, 300, 400, 100, 350],
    ['Julio', 100, 100, 300, 400, 100, 350]
  ]);

  var options = {
    chart: {
      title: 'Ingresos mensuales Coders Fee',
      subtitle: '2019',
    },
    height: 400,
    series: {
        0: { color: '#50BDC6' },
        1: { color: '#71F69A' },
        2: { color: '#FEE54D' },
        3: { color: '#EC459E' },
        4: { color: '#3F9AAA' },
        5: { color: '#F39849' }
      }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}