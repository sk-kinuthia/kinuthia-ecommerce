const thumbNailOne = document.querySelector("#img-thumbnail-1");
const thumbNailTwo = document.querySelector("#img-thumbnail-2");
const thumbNailThree = document.querySelector("#img-thumbnail-3");
const thumbNailFour = document.querySelector("#img-thumbnail-4");
const mainDiv = document.querySelector(".container-item-1-main-image");
const mainProduct = document.querySelector(".container-main-product");




thumbNailOne.addEventListener("click", () => {
    mainProduct.innerHTML = "<img onclick='openModal(); currentSlide(1);' src='./images/image-product-1.jpg' class='img-product'></img>";
});
thumbNailTwo.addEventListener("click", () => {
    mainProduct.innerHTML = "<img  onclick='openModal(); currentSlide(2);' src='./images/image-product-2.jpg' class='img-product'></img>";
});
thumbNailThree.addEventListener("click", () => {
    mainProduct.innerHTML = "<img onclick='openModal(); currentSlide(3);'  src='./images/image-product-3.jpg' class='img-product'></img>";
});
thumbNailFour.addEventListener("click", () => {
    mainProduct.innerHTML = "<img onclick='openModal(); currentSlide(4);'   src='./images/image-product-4.jpg' class='img-product'></img>";
});



/// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}


let slideIndex = 1;
showSlides(slideIndex);

//next and previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//thumbnails image control
function currentSlide(n) {
    showSlides(slideIndex = n);
}



function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}


//cart js
function popUpWindow() {
    document.getElementById("myWindow ").style.display = "block";
}

function closeWindow() {
    document.getElementById("myWindow ").style.display = "none";
}