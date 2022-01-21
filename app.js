var productBox = document.getElementById("productBox");

function moveToRight(){
    productBox.style.transform = "rotateY(180deg)";
    firstImg.style.left = "650px";
    secondImg.style.left = "20px";
    firstImg.style.transform = "rotate(-30deg)"
    secondImg.style.transform = "rotate(0deg)"
}

function moveToLeft(){
    productBox.style.transform = "rotateY(0deg)";
    firstImg.style.left = "20px";
    secondImg.style.left = "-650px";
    firstImg.style.transform = "rotate(0deg)"
    secondImg.style.transform = "rotate(-30deg)"
}

var firstImg = document.getElementById("firstImg")
var secondImg = document.getElementById("secondImg")

// Hendell Costa
