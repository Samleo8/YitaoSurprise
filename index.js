// Probably wanna dynamically load everything?
var slideIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});
    
// Next/previous controls
function plusSlide(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-container");

    slideIndex = n % slides.length;
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
