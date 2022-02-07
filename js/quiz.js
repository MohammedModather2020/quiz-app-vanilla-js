import Final from './final.js';
import Question from './question.js';

class Quiz {
  constructor(quizElement, amount, questions) {
    this.quizElement = quizElement;
    this.currentDom = document.querySelector('.quiz .box .count .current');
    this.totalDom = document.querySelector('.quiz .box .count .total');

    this.finalDom = document.querySelector('.final-quiz');

    this.btnNextQuestionDom = document.querySelector(
      '.quiz .box .btn-next'
    );

    this.totalAmount = amount;
    this.answeredAmount = 0;
    this.questions = this.setQuestion(questions);
    this.renderQuestion();
    this.btnNextQuestionDom.addEventListener('click', this.nextQuestion);
  }
  // show one question
  setQuestion = (questions) => {
    return questions.map((question) => new Question(question));
  };
  // open questions quiz is show first question
  renderQuestion = () => {
    this.questions[this.answeredAmount].render();
    this.currentDom.innerHTML = this.answeredAmount + 1;
    this.totalDom.innerHTML = this.totalAmount;
  };
  // go to next question
  nextQuestion = () => {
    const checkedElement = this.questions[this.answeredAmount].answerDom.filter(
      (el) => el.firstChild.checked
    );
    // check is user is check answer these question
    if (checkedElement.length == 0) {
      alert('please check answer question');
    } else {
      this.questions[this.answeredAmount].answer(checkedElement);
      this.answeredAmount++;
      this.answeredAmount < this.totalAmount
        ? this.renderQuestion()
        : this.endQuizApp();
    }
  };
  // question is finished
  endQuizApp = () => {
    this.quizElement.style.display = 'none';
    this.finalDom.style.display = 'block';
    const countCorrectQuestion = this.countCorrectAnswers();
    new Final(countCorrectQuestion, this.totalAmount);
  };
  // count correct questions
  countCorrectAnswers = () => {
    let count = 0;
    this.questions.forEach((el) => {
      if (el.isCorrect) {
        count++;
    console.log(count)
      }
    });
    console.log(count)
    return count;
  };
}
export default Quiz;
