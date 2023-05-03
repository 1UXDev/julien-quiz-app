//script to append newly created questions
const cardWrapper = document.querySelector('[data-js="cardWrapper"]');

for (let x = 1; x < localStorage.length; x++) {
  // iterate through the local storage and find keys for frage1 - frageX
  let frage = localStorage.getItem(`frage${x}`);
  frage = JSON.parse(frage);

  const tags = () => {
    // create Array from the user-input for tags, which was hopefully seperated by comma (no QS rule implemented in the form... yet ;))
    const questionTags = frage.questionTag.split(",");
    let result = "";

    for (let i = 0; i < questionTags.length; i++) {
      result += `<li>${questionTags[i]}</li>`;
    }
    // also empty tags possible by typing ',,' -> has to be fixed in the future
    return result;
  };

  const newQuestion = document.createElement("article");

  newQuestion.classList.add("card", "animate");
  newQuestion.innerHTML = `
  <img
    class="bookmark"
    alt="bookmark this question"
    src="/media/icon_bookmark_new_square.svg"
  />
  <h2>
    ${frage.questionName}
  </h2>
  <button class="button">Show Answer</button>
  <p class="answer">
  ${frage.questionAnswer}
  </p>
  <ul class="tags">
    ${tags()}
  </ul>
  `;

  // adding Event listeners
  buttonListener();

  cardWrapper.append(newQuestion);

  buttonListener();
  // I had to add a second eventListener to cover the odd and even cards which were appended... I have not yet understood why that is though!
}
