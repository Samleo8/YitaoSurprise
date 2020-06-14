// Probably wanna dynamically load everything?
var slideIndex = 0;

var poemText = `
I pray for blessings in both our lives
For strength and wisdom amidst the strife.
I pray for peace amidst the fights
With plenty of hugs to make it right.
I pray for love that always lasts
Our love for God to stay steadfast.

Through the ups and downs, the lows and highs
May our lives' centers always be Christ
And then God-willing, we shall spend our days
Together, forever, in God's embrace.
`;

var poem = poemText.split("\n");

var images = [
    "",
    "",
    ""
];

function buildSlides(){
    var container = document.getElementsByClassName("container")[0];
    for(var i = 0; i < poem.length; i++) {
        if(i >= images.length || !images[i].length){
            img = "blank.jpg";
        }
        else {
            
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    buildSlides();
    showSlides(slideIndex);
});
    
// Next/previous controls
function plusSlide(inc) {
    showSlides(slideIndex + inc);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slide-container");

    slideIndex = Math.max(0, Math.min(n, slides.length-1));

    document.getElementsByClassName("prev")[0].style.opacity = (slideIndex <= 0) ? 0 : 1 ;
    document.getElementsByClassName("next")[0].style.opacity = (slideIndex >= slides.length) ? 0 : 1;


    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
