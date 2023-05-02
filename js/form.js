// Script to have form save input to local storage
let formButton = document.querySelector('[data-js="formSubmit"]');
let form = document.querySelector('[data-js="form"]');
let counter = localStorage.getItem("counter");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  counter = Number(counter) + 1;
  localStorage.setItem("counter", counter);

  /*   localStorage.setItem("frage" + counter, [
    form.elements.questionName.name,
    form.elements.questionName.value,
    form.elements.questionAnswer.name,
    form.elements.questionAnswer.value,
    form.elements.questionTag.name,
    form.elements.questionTag.value,
  ]); */

  let myObject = {
    questionName: form.elements.questionName.value,
    questionAnswer: form.elements.questionAnswer.value,
    questionTag: form.elements.questionTag.value,
  };

  localStorage.setItem("frage" + counter, JSON.stringify(myObject));

  form.reset();
});

// Script to show how many chars are left
let charsName = document.querySelector('[data-js="questionNameChars"]');
let charsAnswer = document.querySelector('[data-js="questionAnswerChars"]');
let charsTag = document.querySelector('[data-js="questionTagChars"]');

form.addEventListener("input", () => {
  charsLeft(charsName);
  charsLeft(charsAnswer);
  charsLeft(charsTag);
});

function charsLeft(c) {
  let textAmount =
    parseInt(c.previousElementSibling.getAttribute("maxlength")) -
    c.previousElementSibling.value.length;

  c.innerText = `${textAmount} characters left.
    `;

  // Text rot färben
  if (textAmount === 0) {
    c.classList.add("over");
  } else {
    c.classList.remove("over");
  }
}
