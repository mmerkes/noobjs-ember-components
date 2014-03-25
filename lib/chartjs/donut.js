App.ChartDonutComponent = Ember.Component.extend({
  didInsertElement: function() {

    var ctx = $("#myChart").get(0).getContext("2d");

    new Chart(ctx).Doughnut( this.get('data') );
  }
});

