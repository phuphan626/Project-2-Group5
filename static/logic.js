// Read the json file in for pitching table
d3.json('/static/pitching.json').then(function(users) {
    // Mapping all the columns to get the data
    // Sort them in ascending order
    var Year = (users.map(item => item.Year)).reverse();
    var Team = (users.map(item => item.Tms)).reverse();
    var RG = (users.map(item => item.RG)).reverse();
    var ERA = (users.map(item => item.ERA)).reverse();
    var GF = (users.map(item => item.GF)).reverse();
    var CG = (users.map(item => item.CG)).reverse();
    var HR = (users.map(item => item.HR)).reverse();
    var SO = (users.map(item => item.SO)).reverse();
    var HBP = (users.map(item => item.HBP)).reverse();
    var HR9 = (users.map(item => item.HR9)).reverse();
    var SO9 = (users.map(item => item.SO9)).reverse();
    // Getting the chart1 id, and create and object to hold the chart
    let chart1 = document.getElementById('chart1').getContext('2d');
    // Create the first_chart
    var first_chart = new Chart(chart1, {
        // Define the type for the chart, we can put in bar or line or google for more type
        type: 'bar',
        // This is where we define the xaxis and the data for yaxis
        data: {
            // Define the axis as Year
            labels: Year,
            // This is for the data to plot for yaxis
            datasets: [{
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
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
            aspectRatio: 2,
            maintainAspectRatio: true,
            legend: { position: 'bottom' }

        }
    });
    // Making the second chart
    let chart2 = document.getElementById('chart2').getContext('2d');
    // Create the scatter plot for second chart
    var second_chart = new Chart(chart2, {
        type: 'polarArea',
        data: {
            labels: Year,
            datasets: [{
                data: CG,
                backgroundColor: '#caf270'
            }],
            options: {
                responsive: true,
                aspectRatio: 2,
                maintainAspectRatio: true
            }
        },
    })
});