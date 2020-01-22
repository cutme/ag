const Flickity = require('flickity');

document.addEventListener('DOMContentLoaded',function() {

        
    window.favCarousel = function() {
        
        const fav = document.getElementById('fav');

        const favflkty = new Flickity( fav, {
            cellAlign: 'left',
            contain: true,
            groupCells: true,
            groupCells: 3
        });
    };


    window.instaCarousel = function() {
        
        const insta = document.getElementById('insta');

        const instaflkty = new Flickity( insta, {
            cellAlign: 'left',
            contain: true,
            groupCells: true,
            groupCells: 3
        });
    };

    window.newsCarousel = function() {
        
        const news = document.getElementById('news');

        const newsflkty = new Flickity( news, {
            cellAlign: 'left',
        });
    };




}, false)