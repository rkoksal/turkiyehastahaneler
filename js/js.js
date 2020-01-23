
var map = L.map('map', {zoomControl: false}).setView([39.920862, 32.735534], 6);

L.esri.basemapLayer('DarkGray').addTo(map);

L.esri.Cluster.featureLayer({
  url: 'https://services7.arcgis.com/hXiQc9C4mxzB1RqF/ArcGIS/rest/services/Hastaneler/FeatureServer/0'
}).addTo(map);

L.control.zoom({
  position:'bottomright'
}).addTo(map);
L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.3.1/dist/images/';
