import React from 'react';
import { connect } from 'react-redux';
/* import Header from '../components/Header'; */
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Games extends React.Component {
  state = {
    questions: {},
    score: 0,
    // assertions: 0,
    nQuestion: 0,
    isLoading: true,
  };

  async componentDidMount() {
    this.callQuestionsApi();
  }

  callQuestionsApi = async () => {
    const { history } = this.props;
    const token = localStorage.getItem('token');
    const FIVE = 5;
    const THREE = 3;
    const url = `https://opentdb.com/api.php?amount=${FIVE}&token=${token}`;
    let response;
    try {
      const data = await fetch(url);
      response = await data.json();
      if (response.response_code === THREE) {
        throw error;
      }
    } catch (error) {
      console.error('Expired Token, please re-send request in login');
      history.push('/');
    }
    const newAnswers = this.randomAnswers(response);
    this.setState({ questions: newAnswers, isLoading: false });
  };

  randomAnswers = (response) => {
    const FIVE = 5;
    const TWO = 2;
    let ans = [];
    response.results.forEach((res) => {
      if (res.type === 'multiple') {
        const randomN = Math.floor(Math.random() * FIVE);
        ans = [...res.incorrect_answers];
        ans.splice(randomN, 0, res.correct_answer);
      } else {
        const randomN = Math.floor(Math.random() * TWO);
        ans = [...res.incorrect_answers];
        ans.splice(randomN, 0, res.correct_answer);
      }
      res.newAnswers = ans;
    });
    return response;
  };

  render() {
    const { questions, nQuestion, isLoading, score } = this.state;
    return (
      <div>
        <Header />
        <h1>Trivia</h1>
        <h2>
          Score:
          {score}
        </h2>
        {
          (!isLoading) && (
            // (questions?.results[nQuestion].type === 'multiple') && (
            <div>
              <h3 data-testid="question-category">
                {questions?.results[nQuestion].category}
              </h3>
              <h4 data-testid="question-text">
                {questions?.results[nQuestion].question}
              </h4>
              <div data-testid="answer-options">
                {
                  questions?.results[nQuestion].newAnswers.map((elem, index) => (
                    (questions.results[nQuestion].incorrect_answers
                      .some((e) => e === elem)) ? (
                        <button
                          key={ index }
                          className="incorrect unColor"
                          type="button"
                          data-testid={ `wrong-answer-${index}` }
                          onClick={ this.handleClickIncorrect }
                        >
                          {elem}
                        </button>
                      ) : (
                        <button
                          key={ index }
                          className="correct unColor"
                          type="button"
                          data-testid="correct-answer"
                          onClick={ this.handleClickCorrect }
                        >
                          {elem}
                        </button>
                      )
                  ))
                }
              </div>
            </div>
            // )
          )
        }
      </div>
    );
  }
}

Games.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Games);
