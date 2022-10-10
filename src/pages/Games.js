import React from 'react';
import { connect } from 'react-redux';
/* import Header from '../components/Header'; */

class Game extends React.Component {
  state = {
    questions: {},
    score: 0,
    // assertions: 0,
    nQuestion: 0,
  };

  async componentDidMount() {
    this.callQuestionsApi();
  }

  callQuestionsApi = async () => {
    const token = localStorage.getItem('token');
    const FIVE = 5;
    const url = `https://opentdb.com/api.php?amount=${FIVE}&token=${token}`;
    const data = await fetch(url);
    const response = await data.json();
    const THREE = 3;
    if (response.response_code === THREE) {
      customAlert('Expired Token, please re-send request in login');
    } else if (response.response_code === 0) {
      this.setState({ questions: response });
    }
  };

  render() {
    const { questions, nQuestion, score } = this.state;
    return (
      <div>
        <h1>Trivia</h1>
        <h2>
          Score:
          { score }
        </h2>
        {
          (questions?.results[nQuestion].type === boolean) && (
            <div>
              <h3 data-testid="question-category">
                {questions?.results[nQuestion].category}
              </h3>
              <h4 data-testid="question-text">
                {questions?.results[nQuestion].question}
              </h4>
              <div data-testid="answer-options">
                {questions?.results[nQuestion].incorrect_answers.maps((elem, index) => {
                  <button
                    className="incorrect unColor"
                    type="button"
                    data-testid={ `wrong-answer-${index}` }
                    onClick={ this.handleClickIncorrect }
                  >
                    {elem}
                  </button>;
                })}
                <button
                  className="correct unColor"
                  type="button"
                  data-testid="correct-answer"
                  onClick={ this.handleClickCorrect }
                >
                  {questions?.results[nQuestion].correct_answer}
                </button>
              </div>
            </div>

          )
        }
      </div>
    );
  }
}

export default connect()(Game);
