//first method to make function read more (not recommended)
// function readMore(){
//     var text = "Lorem, ipsum dolor sit amet consecteturadipisicing elit. Sed laboriosam exercitationem iure aliquam, repellat, excepturi quibusdam facere ipsa inventore perferendis nam ipsum accusantium, iste dolorum maxime! Dolorem asperiores esse nam.";
//     var paragraf = document.getElementById('para');
//     paragraf.innerHTML=text
// }

//second method 
// function readMore(){
//     var readmoretext = document.getElementById('text').innerHTML;
//     var paragraf = document.getElementById('para');
//     paragraf.innerHTML = readmoretext
// }

// function readMore(){
//     var text = document.getElementById('text').innerHTML;
//     var para = document.getElementById('para');
//     para.innerHTML = text;
// }
// Example - Disappearing an image
// function big(){
//     var img = document.getElementById('car');
//     img.className = 'hidden'
// }

//same as above but apply "disappear" with previous classes
// function big(){
//     var image = document.getElementById('car');
//     image.className += ' hidden'
// }

//change image
// function seccar(){
//     var secondCar = document.getElementById('img');
//     secondCar.src = 'phal.jpg'
// }

// function firstcar(){
//     var secondCar = document.getElementById('img');
//     secondCar.src = 'apple.jpg'
// }

// same but with short code (one function instead of two) 
// function changeImage(id, src){
//     var cimage = document.getElementById(id);
//     cimage.src = src
// }

// apply style on image
// function styleImage(){
//     var simage = document.getElementById('img');
//     simage.style.border="10px solid lightgreen"
// }

// apply style on particular paragraph
// but not working (may be browser not support)
    // var pera = document.getElementsByTagName('p');
    // pera[1].style.color ='blue'

//apply above on all paragraph (this is also not working)
// var pera = document.getElementsByTagName('p');
// for(i=0; i<pera.length; i++){
//     pera[i].style.color="blue"
// }


// apply style on particular div (but not working)
// var stondiv = document.getElementById('styleondiv'); 
// var pera = stondiv.getElementsByTagName('p');
// for(var i=0; i<pera.length; i++){
//     pera[i].style.color="blue"
// }