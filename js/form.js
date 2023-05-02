// Script to have form save input to local storage
let formButton = document.querySelector('[data-js="formSubmit"]');
let form = document.querySelector('[data-js="form"]');
let counter = localStorage.getItem("counter");

counter = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  counter = Number(counter) + 1;
  localStorage.setItem("counter", counter);

  localStorage.setItem("frage" + counter, [
    form.elements.questionName.name,
    form.elements.questionName.value,
    form.elements.questionAnswer.name,
    form.elements.questionAnswer.value,
    form.elements.questionTag.name,
    form.elements.questionTag.value,
  ]);

  console.log("Huhu");
});

// Script to show how many chars are left
let charsName = document.querySelector('[data-js="questionNameChars"]');
let charsAnswer = document.querySelector('[data-js="questionAnswerChars"]');
let charsTag = document.querySelector('[data-js="questionTagChars"]');

form.addEventListener("input", () => {
  /* charsName.innerText = `${
    parseInt(charsName.previousElementSibling.getAttribute("maxlength")) -
    charsName.previousElementSibling.value.length
  } characters left.
    `; */
  charsLeft(charsName);
  charsLeft(charsAnswer);
  charsLeft(charsTag);
});

function charsLeft(c) {
  c.innerText = `${
    parseInt(c.previousElementSibling.getAttribute("maxlength")) -
    c.previousElementSibling.value.length
  } characters left.
    `;
}
