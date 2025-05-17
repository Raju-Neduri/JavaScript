document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question-arrow");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const arrow = question.querySelector(".arrow");

      // Toggle answer visibility
      answer.classList.toggle("show");

      // Rotate arrow
      arrow.classList.toggle("rotate");

      // Close other open answers
      questions.forEach((otherQuestion) => {
        if (otherQuestion !== question) {
          otherQuestion.nextElementSibling.classList.remove("show");
          otherQuestion.querySelector(".arrow").classList.remove("rotate");
        }
      });
    });
  });
});
