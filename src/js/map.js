const loadGoogleMapsApi = require('load-google-maps-api');

(function() {
    
    const obj = document.getElementsByClassName('js-map');
    
    let mapenable = false, int;

    const initMap = function(el) {
        loadGoogleMapsApi({
            key: 'AIzaSyDzv4gozpcF9CjrI6OWHpLavj2hTLfH4IY'
            }).then(function (googleMaps) {
            
            console.log(el);
            
            const lat = Number(el.getAttribute('data-lat')),
                  lng = Number(el.getAttribute('data-lng')),
                  myLatLng = new google.maps.LatLng(lat, lng);
        
            const map = new googleMaps.Map(el, {
                center: myLatLng,
                disableDefaultUI: true,
                zoom: 13,
            })            
			
			const marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				draggable: false,
				zIndex: 20,
				animation: google.maps.Animation.DROP,				
			});
            
        
        }).catch(function (error) {
            console.error(error)
        })
    };

    const init = function() {
    
        for (let i = 0; i < obj.length; i ++) {
            initMap(obj[i]);
        }       
    }
    
    
    obj.length > 0 ? init() : false;
    
})();


