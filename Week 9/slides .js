window.onload = function(){
    alert("window load complete");
    document.querySelector('h1').innerHTML = "Page loaded";

    var image = 0;

    var Images = ["../Week 3/Images/Cristapher.jpg", "../Week 3/Images/Paulie.webp","../Week 3/Images/Silvio.webp","../Week 3/Images/Tony.jpg"];
    function changeImage(){
        document.querySelector('#start').removeEventListener('click', event.target);
        image++;
        document.querySelector('#site-image').src = `${Images[image]}`;

        if(image > images.length){
            image = 0;
        }
        setTimeout(changeImage, 2000);

    }

    document.querySelector('#start').addEventListener('click', function(){
        changeImage();
       
    });
}