//const myButton = document.getElementById("mybutton");

//let message = alert("button clicked");
//myButton.addEventListener("click", message);

const myButton = document.getElementById("mybutton");

myButton.addEventListener("click", function () {
    alert("button clicked");
});

//const changeBackground = document.getElementById("change-background");
//const bodyColor = document.querySelector("body")

//changeBackground.addEventListener("click", function () {
//    bodyColor.classList.add("red-background");
//});


const toggleColor = document.getElementById("change-background");
const bodyColor = document.querySelector("body")

toggleColor.addEventListener("click", function () {
    bodyColor.classList.toggle("red-background");
});