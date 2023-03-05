
// seleceting Elements

const questions = document.querySelectorAll(".question-section");
// hide the elements

questions.forEach((question) => {
  const btn = question.querySelector(".btn-icon");
  btn.addEventListener("click", function () {
    questions.forEach((qs) => {
      if (qs !== question) {
        qs.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
