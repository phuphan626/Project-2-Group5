// Mapping all the columns to get the data
var Year = users.map(item => item.Year);
var Team = users.map(item => item.Tms);
var RG = users.map(item => item.RG);
var ERA = users.map(item => item.ERA);
var GF = users.map(item => item.GF);
var CG = users.map(item => item.CG);
var HR = users.map(item => item.HR);
var SO = users.map(item => item.SO);
var HBP = users.map(item => item.HBP);
var HR9 = users.map(item => item.HR9);
var SO9 = users.map(item => item.SO9);
// Getting the chart1 id, and create and object to hold the chart
let ctx = document.getElementById('chart1');
// Create the first_chart
var first_chart = new Chart(ctx, {
            // Define the type for the chart, we can put in bar or line or google for more type
            type: 'bar',
            // This is where we define the xaxis and the data for yaxis
            data: {
                // Define the axis as Year
                labels: Year,
                // This is for the data to plot for yaxis
                datasets: [{
                    label: 'Team',
                    backgroundColor: '#caf270',
                    data: Team
                }, {
                    label: 'RG',
                    backgroundColor: '#45c490',
                    data: RG
                }, {
                    label: 'ERA',
                    backgroundColor: '#008d93',
                    data: ERA
                }, {
                    label: 'GF',
                    backgroundColor: '#2e5468',
                    data: GF
                }]
            },
            // This is the options that go with the chart
            options: {
                tooltips: {
                    displayColors: true,
                    callbacks: { mode: 'x' },
                },
                scales: {
                    xAxes: [{ stacked: true, gridLines: { display: false } }],
                    yAxes: [{ stacked: true, ticks: { beginAtZero: true }, type: 'linear' }]
                },
                responsive: true,
                maintainAspectRatio: true,
                legend: { position: 'bottom' }
            }