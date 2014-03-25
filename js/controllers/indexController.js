App.IndexController = Ember.Controller.extend({
  markers: [ [ 47.6130284, -122.3420645 ], [ 47.6390722, -122.3057244 ]],

  chartData: [
    {
        value: 20,
        color:"#637b85"
    },
    {
        value : 30,
        color : "#2c9c69"
    },
    {
        value : 40,
        color : "#dbba34"
    },
    {
        value : 10,
        color : "#c62f29"
    }
  ]
});
