
(function(){
   
    "use strict";

        const myImages = ["image1.jpg", "image2.jpg", "image3.jpg","image4.jpg", "image5.jpg"];
        let currentImage = 0; // need to increment an array of images
       
        //handles the next button
        document.getElementById('next').onclick = nextPhoto; 
        document.getElementById('previous').onclick = previousPhoto;

        function nextPhoto()
        {
            currentImage++;
            if(currentImage > myImages.length-1){currentImage = 0;}
            document.getElementById('myImage').src = myImages[currentImage];
        }
        
        function previousPhoto()
        {
            currentImage--;
            if(currentImage < 0){currentImage = myImages.length-1}
            document.getElementById('myImage').src = myImages[currentImage];
        }
        
    })();