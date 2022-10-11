import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  clickPlayAgain = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    /* const { userName } = this.props; */
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userName: state.data[2],
});
/* Feedback.propTypes = {
  userName: PropTypes.func
}; */

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps)(Feedback);
