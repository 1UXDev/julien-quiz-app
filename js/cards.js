setTimeout(() => {
  const cardElements = document.querySelectorAll(".card");
  // Creating a temporary object to work with (e.g. later assign bookmarked:true; then writing it back to local storage)
  const tempObj = JSON.parse(localStorage.getItem("questionsObject"));

  cardElements.forEach((card) => {
    const JSONcardID = Number(card.id - 1);
    const bookmark = card.querySelector(".bookmark");
    const button = card.querySelector("button");

    // > Eventlistener on Cards Bookmark
    bookmark.addEventListener("click", () => {
      if (tempObj[JSONcardID].bookmarked) {
        tempObj[JSONcardID].bookmarked = false;
        localStorage.setItem("questionsObject", JSON.stringify(tempObj));
      } else {
        tempObj[JSONcardID].bookmarked = true;
        localStorage.setItem("questionsObject", JSON.stringify(tempObj));
      }
      bookmark.classList.toggle("active");
    });

    // > Eventlistener on Cards Button
    button.addEventListener("click", () => {
      button.nextElementSibling.classList.toggle("active");
      if (button.innerText === "Show Answer") {
        button.innerText = "Hide Answer";
      } else {
        button.innerText = "Show Answer";
      }
    });
  });
}, 30);
