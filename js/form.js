// Script to have form save input to local storage
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // > Get JSON from localstorage
  let storedQuestions = JSON.parse(localStorage.getItem("questionsObject"));

  // > Create Object from New Question
  const myNewQuestionObject = {
    id: storedQuestions.length + 1,
    bookmarked: false,
    question: form.elements.questionName.value,
    answer: form.elements.questionAnswer.value,
    tags: form.elements.questionTag.value.split(","), //tags in Array konvertieren
  };

  // > > Append the new item to the "StoredQuestions"
  storedQuestions[storedQuestions.length] = myNewQuestionObject;

  // > > > Write Object back into local Storage
  localStorage.setItem("questionsObject", JSON.stringify(storedQuestions));

  // > form Usability
  form.reset();
  form.elements.questionName.focus();
  resetChars(charsName, charsAnswer, charsTag); //passing the constants holding the elements to the function
});

// --------------------------------------------------------------------------------------------------------------

// Script to show how many chars are left
const charsName = document.querySelector('[data-js="questionNameChars"]');
const charsAnswer = document.querySelector('[data-js="questionAnswerChars"]');
const charsTag = document.querySelector('[data-js="questionTagChars"]');

form.addEventListener("input", () => {
  charsLeft(charsName);
  charsLeft(charsAnswer);
  charsLeft(charsTag);
});

// Function: Buchstaben zählen und Text ändern
function charsLeft(c) {
  const textAmount =
    parseInt(c.previousElementSibling.getAttribute("maxlength")) -
    c.previousElementSibling.value.length;

  c.innerText = `${textAmount} characters left.
    `;

  // > Text rot färben
  if (textAmount === 0) {
    c.classList.add("over");
  } else {
    c.classList.remove("over");
  }
}

// --------------------------------------------------------------------------------------------------------------

//function to reset chars after formsubmission
function resetChars(charsName, charsAnswer, charsTag) {
  charsName.innerText =
    charsName.previousElementSibling.getAttribute("maxlength");
  charsAnswer.innerText =
    charsAnswer.previousElementSibling.getAttribute("maxlength");
  charsTag.innerText =
    charsTag.previousElementSibling.getAttribute("maxlength");
}
