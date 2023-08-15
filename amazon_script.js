var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex+=n);
}
function showDivs(n){
    var x = document.getElementsByClassName("mySlides");

    if(n>x.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = x.length;
    }
    for(var i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    x[slideIndex-1].style.display="block";
}



// Select the element you want to apply the hover effect to
const element = document.querySelector('.display-left');

// Add event listeners for "mouseenter" and "mouseleave"
// element.addEventListener('onclick', addHoverClass);
// element.addEventListener('onclick', removeHoverClass);

// Function to add the hover class
// function addHoverClass() {
//   element.classList.add('active');
// }

// Function to remove the hover class
// function removeHoverClass() {
//   element.classList.remove('active');
// }

// Function to toggle the hover class
function toggleHoverClass(element) {
    element.classList.toggle('active');
  }







