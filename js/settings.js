class Settings {
  constructor() {
    // define variable
    this.settingsDom = document.querySelector('.settings');
    this.quizDom = document.querySelector('.quiz');
    this.formStartDom = document.querySelector('.settings form');
    this.categoriesDom = document.querySelector('.settings form #categories');
    this.numQuestionsDom = document.querySelector(
      '.settings form #num-questions'
    );
    this.difficulty = [
      document.querySelector('.settings form #easy'),
      document.querySelector('.settings form #medium'),
      document.querySelector('.settings form #hard'),
    ];
    this.formStartDom.addEventListener('submit', this.startQuizApp);
  }
  // function start quiz app
  startQuizApp = async (e) => {
    e.preventDefault();
    const amount = this.numQuestionsDom.value;
    const categoryId = this.categoriesDom.value;
    const difficulty = this.getDifficulty();
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}`;
    const questions = await this.fetchData(url);
    this.getToggleElements();
  };
  // toggle elements setting and qiz
  getToggleElements = () => {
    this.settingsDom.style.display = 'none';
    this.quizDom.style.display = 'block';
  };
  // get difficulty
  getDifficulty = () => {
    const difficult = this.difficulty.filter((el) => el.checked);
    if (difficult.length === 1) {
      return difficult[0].value;
    } else {
      return 'easy';
    }
  };
  // get fetch data
  fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        return res.results;
      })
      .catch((err) => console.log(err));
  };
}
export default Settings;
