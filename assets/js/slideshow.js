var slideshow1 = document.getElementById("slideshow1");
slideshow1.slideIndex = 1;
showSlides(slideshow1.slideIndex, slideshow1);
    
var slideshow2 = document.getElementById("slideshow2");
slideshow2.slideIndex = 1;
showSlides(slideshow2.slideIndex, slideshow2);
    
// Next/previous controls
function plusSlides(n, slideshow) {
  showSlides(slideshow.slideIndex += n, slideshow);
}

// Thumbnail image controls
function currentSlide(n, slideshow) {
  showSlides(slideshow.slideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  var i;
  var slides = slideshow.getElementsByClassName("mySlides");
  var dots = slideshow.getElementsByClassName("dot");
  console.log(dots[0]);
  if (n > slides.length) {slideshow.slideIndex = 1}
  if (n < 1) {slideshow.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideshow.slideIndex-1].style.display = "block";
  dots[slideshow.slideIndex-1].className += " active";
  console.log(slideshow.slideIndex-1);
}