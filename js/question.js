class Question {
  constructor(question) {
    this.questionsDom = document.querySelector('.quiz .box .questions-title');
    this.answerDom = [
      document.querySelector('.quiz .box #a1'),
      document.querySelector('.quiz .box #a2'),
      document.querySelector('.quiz .box #a3'),
      document.querySelector('.quiz .box #a4'),
    ];
    this.correctAnswer = question.correct_answer;
    this.question = question.question;
    this.isCorrect = false;
    this.answers = [question.correct_answer, ...question.incorrect_answers];
    this.answers = this.shuffleAnswers([
      question.correct_answer,
      ...question.incorrect_answers,
    ]);
  }
  // get correct answer form radio button
  answer = (checkedElement) => {
    this.isCorrect =
      checkedElement[0].textContent.trim() == this.correctAnswer.trim()
        ? true
        : false;
  };

  // shuffle array of answers questions
  shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = answers[i];
      answers[i] = answers[j];
      answers[j] = temp;
    }
    return answers;
  }

  // render radio button to choose answer
  render = () => {
    this.questionsDom.innerHTML = this.question;
    this.answerDom.forEach((el, index) => {
      el.innerHTML = `<input type='radio' name='radio'/> ${this.answers[index]}`;
    });
  };
}

export default Question;
