const darkmodeToggle = document.querySelector('[data-js="myToggle"]');
const body = document.querySelector("body");
let _darkmodeEnabled = localStorage.getItem("darkmodeEnabled");
const toggleText = document.querySelector('[data-js="myToggleText"');

document.onload = darkModeChecker();

// Script to assign darkmode if localSotrage had it already set from a previous page
function darkModeChecker() {
  if (localStorage.getItem("darkmodeEnabled") === "true") {
    body.classList.add("darkmode");

    // Toggle richtig positionieren
    darkmodeToggle.previousElementSibling.setAttribute("checked", "true");
    toggleText.textContent = "Turn off Darkmode";
  }
}
