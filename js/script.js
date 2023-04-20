/*let toggle = document.getElementsByClassName("burger");
let navMenu = burgerMenu[0].parentElement;
burgerMenu[0].classList.toggle("opened");
navMenu.classList.toggle("mobile");
*/

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.nextElementSibling.classList.toggle("active");
  });
});

function toggleBookmark() {
  this[0].classList.toggle("active");
}

/*
const cardbookmarks = document.querySelectorAll("card");
const bookmarkelement = document.getComputedStyle(cardbookmarks, ":after");

bookmarkelement.forEach((bookmarked) => {
  bookmarked.addEventListener("click", () => {
    bookmarked.classList.toggle("bookmarked");
  });
});
*/

/*  NOTES
function showAnswer() {
  console.log(this);
  this.nextSibling.classList.toggle("active");
}

bookmarked
*/
