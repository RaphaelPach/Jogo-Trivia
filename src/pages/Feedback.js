import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  clickPlayAgain = () => {
    const { history } = this.props;
    history.push('/');
  };

  handleClickRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const THREE = 3;
    const { assertions, score } = this.props;
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text"> Feedback </h1>
        <button
          onClick={ this.clickPlayAgain }
          data-testid="btn-play-again"
          type="button"
        >
          Play Again
        </button>
        {
          assertions >= THREE
            ? <h3 data-testid="feedback-text">Well Done!</h3>
            : <h3 data-testid="feedback-text">Could be better...</h3>
        }
        <h4> Total de questões certas:</h4>
        <h4
          data-testid="feedback-total-question"
        >
          {assertions}
        </h4>
        <h4>Pontuação total:</h4>
        <h4
          data-testid="feedback-total-score"
        >
          {score}
        </h4>
        <button
          data-testid="btn-ranking"
          type="button"
          onClick={ this.handleClickRanking }
        >
          Ranking
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // userName: state.player.name,
  assertions: state.player.assertions,
  score: state.player.score,
});
/* Feedback.propTypes = {
  userName: PropTypes.func
}; */

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
