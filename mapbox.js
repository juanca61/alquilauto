var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var control = L.Routing.control({
	waypoints: [
		L.latLng(57.74, 11.94),
		L.latLng(57.6792, 11.949)
	],
	geocoder: L.Control.Geocoder.nominatim(),
	routeWhileDragging: true,
	//
	waypoints: [
		L.latLng(-34.6037, -58.3816),
		L.latLng(-34.603, -58.381)//, 
	],
    language: 'es',
	//
	reverseWaypoints: true,
	showAlternatives: true,
	altLineOptions: {
		styles: [
			{color: 'black', opacity: 0.15, weight: 9},
			{color: 'white', opacity: 0.8, weight: 6},
			{color: 'blue', opacity: 0.5, weight: 2}
		]
	},
	router: L.Routing.mapbox('pk.eyJ1IjoianVhbmNhcmxvczYxIiwiYSI6ImNqdnduc3N3eTQ4N2U0OXBibGxmdGs4bWYifQ.XBPdvfOWef1ulVbXb97eYg')
}).addTo(map);

L.Routing.errorControl(control).addTo(map);