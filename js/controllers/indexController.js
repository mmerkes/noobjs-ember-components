App.IndexController = Ember.Controller.extend({
  markers: [ [ 47.6130284, -122.3420645 ], [ 47.6390722, -122.3057244 ]],

  donutData: [
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
  ],

  pieData: [
    {
      value: 30,
      color:"#F38630"
    },
    {
      value : 50,
      color : "#E0E4CC"
    },
    {
      value : 100,
      color : "#69D2E7"
    }     
  ],

  width: 250,

  height: 250
});
