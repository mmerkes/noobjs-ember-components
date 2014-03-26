App.PieChartComponent = Ember.Component.extend({
  didInsertElement: function() {
    var id = this.get('elId') || "#piechart",
        width = this.get('width'),
        height = this.get('height');

    var canvas = $(id).get(0),
        ctx = canvas.getContext("2d");

    // Default width and height 400px
    if(width || height) {
      canvas.width = width || 400;
      canvas.height = height || 400;
    }

    new Chart(ctx).Pie( this.get('data'), this.get('options') );
  }
});
