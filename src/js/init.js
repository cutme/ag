const { detect } = require('detect-browser');
const browser = detect();
import Blazy from 'blazy';

document.addEventListener('DOMContentLoaded',function() {

    if (browser) {
        document.documentElement.classList.add(browser.name);
    }

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.body.removeAttribute('style');
        document.body.classList.add('is-loaded');
        
        setTimeout(function() {
            cover.remove();
        }, 250);

        
        // Anims on inview
        window.animsInit()   
        
        // Blazy
        
        window.bLazy = new Blazy({
            success: function(el){

                //let item = el.parentNode.parentNode.parentNode;
                
                //item.classList.add('is-visible');
            }
        });
        
        
        // Carousels
        
        const fav = document.getElementById('fav');
        fav ? window.favCarousel() : false;
        
        const insta = document.getElementById('insta');
        insta ? window.instaCarousel() : false;
        
        const news = document.getElementById('news');
        news ? window.newsCarousel() : false;
    };
    
    
    window.addEventListener('load', init);

}, false);