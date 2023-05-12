const quizForm = document.getElementById("quiz-form");
const resultContainer = document.getElementById("result-container");
const submitButton = document.getElementById("submit-button");

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  const answers = ["a", "a", "a", "a", "a"];
  const formData = new FormData(quizForm);
  for (let entry of formData.entries()) {
    const questionNumber = entry[0].substring(1);
    const answer = entry[1];
    if (answer === answers[questionNumber - 1]) {
      score++;
      document.getElementById(`q${questionNumber}`).classList.add("correct");
    } else {
      document.getElementById(`q${questionNumber}`).classList.add("incorrect");
    }
  }
  resultContainer.innerHTML = `You scored ${score} out of 5.`;
  submitButton.disabled = true;
});

