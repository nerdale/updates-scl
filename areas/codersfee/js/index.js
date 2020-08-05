google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Mes', 'SCL005', 'SCL006', 'SCL007', 'SCL008', 'SCL009', 'SCL010', "SCL011"],
    ['Enero', 592534, 1032967, 1478248, 434166, 235000, 0, 0],
    ['Febrero', 840349, 2723191, 1004815, 385000, 365000, 0, 0],
    ['Marzo', 629320, 1855005, 1208983, 685000, 694000, 750000, 0],
    ['Abril', 531799, 424667, 1127316, 610000, 861500, 578334, 0],
    ['Mayo', 959201, 1073333, 1023982, 744167, 765389, 829167, 100000],
    ['Junio', 516819, 914167, 1081482, 1049167, 1435311, 880835, 226467],
    ['Julio', 460186, 442501, 852215, 579167, 913334, 782501, 181467]
  ]);

  var options = {
    chart: {
      title: 'Ingresos mensuales Coders Fee',
      subtitle: '2020 - Pesos Chilenos',
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

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['', '',  { role: 'style', }],
        ['CF', 34858252, "color: #EC459E"],
        ['Gastos', 209806274, "color: #EC459E"],
      ]);

      var options = {
        title: 'Comparación Totales',
        chartArea: {width: '50%'},
        colors: ['white']
          };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }