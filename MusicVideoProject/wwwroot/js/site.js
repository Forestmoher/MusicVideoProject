// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


const text = document.querySelector('.animate');
const strText = text.textContent; //grabs the text from the element
const splitText = strText.split(""); //splits each letter up into an array
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";//this will turn each character in array into a span element
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fadeIn'); //creates a class for the span called fade
    char++;
    if (char === splitText.length) {
        complete();
        return
    }
}

function complete() {
    clearInterval(timer);
    timer = null; //this prevents the function from looping again
}

