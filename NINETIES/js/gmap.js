function initialize() {
  var latlng = new google.maps.LatLng(35.690973, 139.708276);/*表示したい場所の経度、緯度*/
  var myOptions = {
	zoom: 17, /*拡大比率*/
    center: latlng, /*表示枠内の中心点*/
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	panControl: false,
	zoomControl: true,
	mapTypeControl: false,
	scaleControl: false,
	streetViewControl: false,
	navigationControl: true,
	scrollwheel: false,
    mapTypeControlOptions: { mapTypeIds: ['noText', google.maps.MapTypeId.ROADMAP] }/*表示タイプの指定*/
  };
//   var map = new google.maps.Map(document.getElementById('gmap'), myOptions);/*マップのID取得*/
 
  /*スタイルのカスタマイズ*/
 var styleOptions = [{
		featureType: 'all',
		elementType: 'labels',
		elementType: 'geometry',
		stylers: [
		{ saturation: '0' },
		{ gamma: '2' },
		{ lightness: '0' },
		{ hue: '#666'}
		]
	}];
	
 var styledMapOptions = { name: 'Hearty' }
  var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('sample', sampleType);
  map.setMapTypeId('sample');
 
/*アイコンの取得*/
var icon = new google.maps.MarkerImage('images/icon.png',/*アイコンの場所*/
  new google.maps.Size(70,70),/*アイコンのサイズ*/
  new google.maps.Point(0,0)/*アイコンの位置*/
);
 
/*マーカーの設置*/
var markerOptions = {
  position: latlng,/*表示場所と同じ位置に設置*/
  map: map,
  icon: icon,
  title: 'Hearty'/*マーカーのtitle*/
};
var marker = new google.maps.Marker(markerOptions);
 
}