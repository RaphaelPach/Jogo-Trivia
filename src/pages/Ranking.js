import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Ranking extends Component {
  handleClickLogin = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <div>
        <button
          data-testid="btn-go-home"
          type="button"
          onClick={ this.handleClickLogin }
        >
          Início
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}