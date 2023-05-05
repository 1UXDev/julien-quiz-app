const firstPageLoad = localStorage.getItem("firstPageLoad");

if (firstPageLoad === null) {
  const questionsObject = [
    {
      id: 1,
      bookmarked: false,
      question:
        "How would you use Flexbox to center an element vertically and horizontally?",
      answer:
        "You can use the flexbox attributes <code>display: flex;</code>, <code>justify-content: center;</code> and <code>align-items: center;</code>",
      tags: ["html", "css", "flexbox"],
    },
    {
      id: 2,
      bookmarked: true,
      question:
        "What is the difference between justify-content and align-items in Flexbox?",
      answer:
        "<code>justify-content</code> is used to horizontally align elements within the container, while <code>align-items</code> is used to vertically align elements within the container.",
      tags: ["css", "flexbox"],
    },
    {
      id: 3,
      bookmarked: false,
      question: "What are the main axis and cross axis in Flexbox?",
      answer:
        "The main axis is the axis along which the Flexbox items are laid out, and the cross axis is perpendicular to the main axis.",
      tags: ["css", "html", "flexbox"],
    },
  ];

  // > put Object into Local Storage
  localStorage.setItem("questionsObject", JSON.stringify(questionsObject));

  //  > Verhindern dass es nach dem initialen laden nochmal ausgeführt wird
  localStorage.setItem("firstPageLoad", false);
} else {
  // If this was not the first load, read questionsObject from storage and assign this to the questionsObject const
  const questionsObject = localStorage.getItem("questionsObject");
}
