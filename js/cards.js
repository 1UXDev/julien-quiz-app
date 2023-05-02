// script to toggle bookmakr state (just visually)
let bookmarks = document.querySelectorAll(".bookmark");

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("active");
  });
});

// Script to have awnser blocks appear on buttonclick
function buttonListener() {
  let buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.nextElementSibling.classList.toggle("active");
      if (button.innerText === "Show Answer") {
        button.innerText = "Hide Answer";
      } else {
        button.innerText = "Show Answer";
      }
    });
  });
}

buttonListener();
