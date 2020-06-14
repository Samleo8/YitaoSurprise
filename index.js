// Probably wanna dynamically load everything?
var slideIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});
    
// Next/previous controls
function plusSlide(inc) {
    showSlides(slideIndex + inc);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-container");

    slideIndex = Math.max(0, Math.min(n, slides.length-1));
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
