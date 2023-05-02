//script to append newly created questions
const cardWrapper = document.querySelector('[data-js="cardWrapper"]');
/* 
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

  // adding Event listeners
  buttonListener();

  cardWrapper.append(newQuestion);
  buttonListener();
}
 */

for (let x = 1; x < localStorage.length; x++) {
  let frage = localStorage.getItem(`frage${x}`);
  frage = JSON.parse(frage);

  const tags = () => {
    const questionTags = frage.questionTag.split(",");
    let result = "";

    for (let i = 0; i < questionTags.length; i++) {
      result += `<li>${questionTags[i]}</li>`;
    }

    return result;
  };

  const newQuestion = document.createElement("article");

  newQuestion.classList.add("card");
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
}
