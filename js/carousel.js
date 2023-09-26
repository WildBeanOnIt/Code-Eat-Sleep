const slides = document.querySelectorAll(".review-item");
const buttons = document.querySelectorAll(".slide-ctrl-container button");

let current = Math.floor(Math.random() * slides.length);
let next = current < slides.length - 1 ? current +1 : 0;
let prev = current > 0 ? current - 1 : slides.length - 1;


const dummySlides = [
    // slide 0
    // slide 1
    // slide 2
    // slide 3
]

//? create an eventListener for prev/next


//? -- decide how to call the prev/next
//? --update variables
//? --- [current] = newIndex
//? --- [next] current + 1 : 0
//? --- [prev] current + 1 : length -1
//? -- update the css classes