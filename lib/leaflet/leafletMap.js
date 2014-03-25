App.LeafletMapComponent = Ember.Component.extend({
  didInsertElement: function() {
    var mapCenter = [ this.get('lat'), this.get('long') ];
    var markers = this.get('markers');

    var map = L.map('map').setView( mapCenter, 12);

    L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18
    }).addTo(map);

    markers.forEach( function( marker ) {
      L.marker(marker).addTo(map);
    });
  }
});
