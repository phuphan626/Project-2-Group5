// Read the json file in for pitching table
d3.json('/static/pitching.json').then(data => console.log(data))


fetch('/static/pitching.json')
    .then(data => console.log(data))
    //   .then(function(users) {
    //     var data = {
    //       labels: users.map(function(user) {
    //         return user.name;
    //       }),
    //       series: users.map(function(user) {
    //         return user.name.length;
    //       })
    //     };

//     var chart = new Chartist.Bar('#chart', data, {
//       distributeSeries: true
//     });
//   });