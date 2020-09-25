// Read the json file in for pitching table
d3.json('/static/pitching.json').then(function(users) {
    var data = {
        Years: users.map(function(user) {
            return user.Year;
        }),
        ERA: users.map(function(user) {
            return user.ERA;
        })
    };
    console.log(data)
    var chart = new Chartist.Bar('#chart', data, {
        distributeSeries: true
    });
});