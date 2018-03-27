angular
  .module('gpxOnMap', [
    'strReplaceFtl'
  ])
  .component('gpxOnMap', {
    // template: 'test template'
    templateUrl: 'gpx-on-map/gpx-on-map.template.html',
    css: 'gpx-on-map/gpx-on-map.css',
    controller: [
      '$timeout',
      gpxOnMapController
    ],
    controllerAs: 'gpxOnMapCtrl',
    bindings: {
      gpxfile: '<'
    }
  });

function gpxOnMapController($timeout) {
  this.$onInit = $onInit;

  function $onInit() {
    var nameWithDots = this.gpxfile;
    var mapId = nameWithDots.replace(".gpx", "gpx");
    // console.log("Component: mapId is " + mapId);

    $timeout(function() {
      insertMap(mapId, nameWithDots);
    });
  };

  function insertMap(mapId, nameWithDots) {
    // console.log("insertMap: mapId is " + mapId);
    var map = [];
    var mapTileLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map = L.map(document.getElementById(mapId));
    mapTileLayer.addTo(map);

    var dataFolder = 'data/gpx/';
    var gpxFile = dataFolder.concat(nameWithDots); // URL to your GPX file or the GPX itself
    var endIconUrl = L.icon({
    iconUrl: 'gpx-on-map/marker/pin-icon-end.png',
    shadowUrl: 'gpx-on-map/marker/pin-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
    var gpxLayerOptions = {
      async: true,
      marker_options: {
        startIconUrl: 'gpx-on-map/marker/pin-icon-start.png',
        endIconUrl: 'gpx-on-map/marker/pin-icon-end.png',
        shadowUrl: '',
        iconSize: [17, 17],
        iconAnchor:   [8, 8]
      }
    };
    var gpxLayer = new L.GPX(gpxFile, gpxLayerOptions);
    var loadedGpxLayer = gpxLayer.on('loaded', function(e) {
      var fileInfo = e.target;
      map.fitBounds(fileInfo.getBounds());
      // console.log(fileInfo.get_name());
    });
    loadedGpxLayer.addTo(map);

    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
    map.dragging.disable();
  };
};
