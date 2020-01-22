const Flickity = require('flickity');

document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-contact')[0],
          btn = document.getElementsByClassName('js-mapbtn'),
          address = document.getElementsByClassName('js-addressitem');


    const action = function(e) {
        
        const btn_parent = e.currentTarget.parentNode,
              index = cutme.Helpers.thisIndex(btn_parent);
        
        
        
        // Hide all
        
        for (let i = 0; i < btn.length; i ++) {
            btn[i].parentNode.classList.remove('is-visible');
            btn[i].parentNode.classList.remove('is-active');
            address[i].classList.remove('is-active');
        }
            
        
        // Show map
        
        btn_parent.classList.add('is-visible');
                        
        setTimeout(function() {
            btn_parent.classList.add('is-active');
        }, 1);    
        
        // Show address
        
        address[index].classList.add('is-active');
        
    };
    
    
    for (let i = 0; i < btn.length; i ++) {
        btn[i].addEventListener('click', action);
    }
    

}, false)