export function AppendCards() {
  //script to append newly created questions
  const cardWrapper = document.querySelector('[data-js="cardWrapper"]');
  const questions = JSON.parse(localStorage.getItem("questionsObject"));

  // > Go through the Object holding the questions
  questions.forEach((question) => {
    // > > Taking care of the question tags
    let questionTags = question.tags.map((tag) => {
      return `<li>${tag}</li>`;
    });
    questionTags = questionTags.join("");

    // > > Building the element in DOM
    let newQuestionCard = document.createElement("article");
    newQuestionCard.classList.add("card", "animate");
    newQuestionCard.id = question.id;

    newQuestionCard.innerHTML = `
  <img
    class="bookmark"
    alt="bookmark this question"
    src="/media/icon_bookmark_new_square.svg"
  />
  <h2>
    ${question.id}. ${question.question}
  </h2>
  <button class="button">Show Answer</button>
  <p class="answer">
  ${question.answer}
  </p>
  <ul class="tags">
    ${questionTags}
  </ul>
  `;

    // > > > append element to html
    cardWrapper.append(newQuestionCard);
  });
}
