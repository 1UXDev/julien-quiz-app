// Script to assign dark mode class to body when toggled in profile-menu
darkmodeToggle.addEventListener("click", () => {
  if (localStorage.getItem("darkmodeEnabled") !== "true") {
    body.classList.add("darkmode");
    localStorage.setItem("darkmodeEnabled", "true");
    toggleText.textContent = "Turn off Darkmode";
  } else {
    body.classList.remove("darkmode");
    localStorage.setItem("darkmodeEnabled", "false");
    toggleText.textContent = "Turn on Darkmode";
    console.log(darkmodeToggle.previousElementSibling.checked);
  }
});

//change numbers of questions and bookmarks according to number of items in DOM on the particular page
const profileQuestionCounter = document.querySelector(
  '[data-js="profileQuestionAmount"]'
);
const profileBookmarkCounter = document.querySelector(
  '[data-js="profileBookmarkAmount"]'
);
// Those variables are to be changed once a more sophisticated content management is implemented
const questionAmount = 4 + localStorage.length - 2;
// 4 items initially on page (hardcoded into HTML) + created ones in local storage - 2 for the counter and darkmode variables in localstorage
const BookmarkAmount = 4;

profileQuestionCounter.textContent = questionAmount;
profileBookmarkCounter.textContent = BookmarkAmount;
