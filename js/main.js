let darkmodeToggle = document.querySelector('[data-js="myToggle"]');
let body = document.querySelector("body");
let darkmodeEnabled = localStorage.getItem("darkmodeEnabled");
let toggleText = document.querySelector('[data-js="myToggleText"');

document.onload = darkModeChecker();

// Script to assign darkmode if localSotrage had it already set from a previous page
function darkModeChecker() {
  if (localStorage.getItem("darkmodeEnabled") === "true") {
    body.classList.add("darkmode");

    // Toggle richtig positionieren
    darkmodeToggle.previousElementSibling.setAttribute("checked", "true");
    toggleText.textContent = "Turn off Darkmode";
  } else {
    console.log("nicht aktiviert");
  }
}
