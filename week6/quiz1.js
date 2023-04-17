const imageBox = document.querySelector("#container > img");

imageBox.addEventListener("mouseover", function() {
    imageBox.src = "images/pic-6.jpg";
});
imageBox.addEventListener("mouseout", function() {
    imageBox.src="images/pic-1.jpg";
});