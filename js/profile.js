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
