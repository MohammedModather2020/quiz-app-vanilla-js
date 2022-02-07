class Final {
  constructor(correctAnswers, total) {
    this.scoreDom = document.querySelector('.final-quiz .box .score');
    this.btnAgainDom = document.querySelector('.final-quiz .box .try-agin');

    this.btnAgainDom.addEventListener('click', this.startAgain);
    this.render(correctAnswers, total);
  }
  // show result answers of question
  render(correctAnswers, total) {
    this.scoreDom.innerHTML = `You answered ${correctAnswers} out of ${total} correct!`;
  }
  // click button try again to reload page
  startAgain = () => {
    window.location.reload();
  };
}
export default Final;
