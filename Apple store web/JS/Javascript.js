$(document).ready(function(){

    // product detail    
let main_image = document.getElementById("mainProductImg");
let thumb_images = document.getElementsByClassName("thumb-box");

for (let i = 0; i < thumb_images.length; i++) {
    thumb_images[i].addEventListener('click', function() {
        
        
        let clicked_img_src = this.querySelector('img').src;
        main_image.src = clicked_img_src;

        
        for (let j = 0; j < thumb_images.length; j++) {
            if (thumb_images[j] === this) {
                thumb_images[j].classList.add('active');   
            } else {
                thumb_images[j].classList.remove('active'); 
            }
        }

    });
}


});
    



