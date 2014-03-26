App.ChartDonutComponent = Ember.Component.extend({
  didInsertElement: function() {
    var id = this.get('elId') || "#donut",
        width = this.get('width'),
        height = this.get('height');

    var canvas = $(id).get(0),
        ctx = canvas.getContext("2d");

    // Default width and height 400px
    if(width || height) {
      canvas.width = width || 400;
      canvas.height = height || 400;
    }

    new Chart(ctx).Doughnut( this.get('data'), this.get('options') );
  }
});

/*
SAMPLE DATA

var data = [
  {
    value: 30,
    color:"#F7464A"
  },
  {
    value : 50,
    color : "#E2EAE9"
  },
  {
    value : 100,
    color : "#D4CCC5"
  },
  {
    value : 40,
    color : "#949FB1"
  },
  {
    value : 120,
    color : "#4D5360"
  }

]

DEFAULTS

Doughnut.defaults = {
  //Boolean - Whether we should show a stroke on each segment
  segmentShowStroke : true,
  
  //String - The colour of each segment stroke
  segmentStrokeColor : "#fff",
  
  //Number - The width of each segment stroke
  segmentStrokeWidth : 2,
  
  //The percentage of the chart that we cut out of the middle.
  percentageInnerCutout : 50,
  
  //Boolean - Whether we should animate the chart 
  animation : true,
  
  //Number - Amount of animation steps
  animationSteps : 100,
  
  //String - Animation easing effect
  animationEasing : "easeOutBounce",
  
  //Boolean - Whether we animate the rotation of the Doughnut
  animateRotate : true,

  //Boolean - Whether we animate scaling the Doughnut from the centre
  animateScale : false,
  
  //Function - Will fire on animation completion.
  onAnimationComplete : null
}

*/
