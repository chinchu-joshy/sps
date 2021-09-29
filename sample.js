function showVideo(){
   document.getElementById('video').nextElementSibling.style.display="block";
    document.getElementById('video').style.display="none";
var x=document.getElementById('iframe');
x.src+= "?autoplay=1";
}

function showVideo1(){
    document.getElementById('video2').nextElementSibling.style.display="block";
     document.getElementById('video2').style.display="none";
 var y=document.getElementById('iframes');
 y.src+= "?autoplay=1";
 }
 function showVideo3(){
    document.getElementById('video3').nextElementSibling.style.display="block";
     document.getElementById('video3').style.display="none";
 var z=document.getElementById('iframe3');
 z.src+= "?autoplay=1";
 }
 function showVideo4(){
    document.getElementById('video4').nextElementSibling.style.display="block";
     document.getElementById('video4').style.display="none";
 var z=document.getElementById('iframe4');
 z.src+= "?autoplay=1";
 }
 function showVideo5(){
    document.getElementById('video5').nextElementSibling.style.display="block";
     document.getElementById('video5').style.display="none";
 var z=document.getElementById('iframe5');
 z.src+= "?autoplay=1";
 }
 var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}