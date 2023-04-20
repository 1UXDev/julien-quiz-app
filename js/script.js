// Script to have awnser blocks appear on buttonclick
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.nextElementSibling.classList.toggle("active");
  });
});

let bookmarks = document.querySelectorAll(".bookmark");
console.log(bookmarks);

bookmarks.forEach((bookmark) => {
  console.log(bookmark);
  bookmark.addEventListener("click", () => {
    console.log(bookmark);
    bookmark.classList.toggle("active");
  });
});
