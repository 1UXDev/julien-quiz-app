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

//script to append newly created questions
let cardWrapper = document.querySelector('[data-js="cardWrapper"]');

for (let x = 1; x < 10; x++) {
  let frage = localStorage.getItem(`frage${x}`);
  frage = frage.split(",");

  let newQuestion = document.createElement("article");
  newQuestion.classList.add("card");
  newQuestion.innerHTML = `
  <img
    class="bookmark"
    alt="bookmark this question"
    src="/media/icon_bookmark_new_square.svg"
  />
  <h2>
    ${frage[1]}
  </h2>
  <button class="button">Show Answer</button>
  <p class="answer show">
  ${frage[3]}
  </p>
  <ul class="tags">
    <li>${frage[5]}</li>
  </ul>
  `;

  // adding Event listener
  buttonListener();

  cardWrapper.append(newQuestion);
  buttonListener();
}
