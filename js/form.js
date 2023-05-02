// Script to have form save input to local storage
const form = document.querySelector('[data-js="form"]');
let counter = localStorage.getItem("counter");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  counter = Number(counter) + 1;
  localStorage.setItem("counter", counter);

  const myObject = {
    questionName: form.elements.questionName.value,
    questionAnswer: form.elements.questionAnswer.value,
    questionTag: form.elements.questionTag.value,
  };

  localStorage.setItem("frage" + counter, JSON.stringify(myObject));

  form.reset();
  form.elements.questionName.focus();
});

// Script to show how many chars are left
const charsName = document.querySelector('[data-js="questionNameChars"]');
const charsAnswer = document.querySelector('[data-js="questionAnswerChars"]');
const charsTag = document.querySelector('[data-js="questionTagChars"]');

form.addEventListener("input", () => {
  charsLeft(charsName);
  charsLeft(charsAnswer);
  charsLeft(charsTag);
});

function charsLeft(c) {
  const textAmount =
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
