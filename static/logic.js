// Read the json file in for pitching table
d3.json('/static/pitching.json').then(function(users) {
    var dataERA = {
        labels: users.map(function(user) {
            return user.Year;
        }),
        series: users.map(function(user) {
            return user.ERA;
        })
    };
    console.log(data)
    var chart = new Chartist.Bar('#chart', dataERA, {
        distributeSeries: true
    });
});

d3.json('/static/pitching.json').then(function(users) {
    var dataHR = {
        labels: users.map(function(user) {
            return user.Year;
        }),
        series: users.map(function(user) {
            return user.HR;
        })
    };
    console.log(data)
    var chart = new Chartist.Bar('#chart', dataHR, {
        distributeSeries: true
    });
});

d3.json('/static/pitching.json').then(function(users) {
    var dataSO = {
        labels: users.map(function(user) {
            return user.Year;
        }),
        series: users.map(function(user) {
            return user.HR;
        })
    };
    console.log(data)
    var chart = new Chartist.Bar('#chart', dataSO, {
        distributeSeries: true
    });
});