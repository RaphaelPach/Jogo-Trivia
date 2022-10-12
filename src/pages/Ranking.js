import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Ranking extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.getRanking();
  }

  getRanking = () => {
    const rankList = JSON.parse(localStorage.getItem('ranking'));
    console.log(rankList);
    if (rankList) {
      rankList.sort((a, b) => (b.score - a.score));
      console.log(rankList);
      this.setState({ list: rankList });
    }
  };

  handleClickLogin = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <h1
          data-testid="ranking-title"
        >
          Ranking
        </h1>
        <button
          data-testid="btn-go-home"
          type="button"
          onClick={ this.handleClickLogin }
        >
          Início
        </button>
        <div>
          {
            (list.length > 0) && (
              list.map((person, i) => (
                <div key={ i }>
                  <img src={ person.picture } alt={ person.name } />
                  <p data-testid={ `player-name-${i}` }>{person.name}</p>
                  <p data-testid={ `player-score-${i}` }>{person.score}</p>
                </div>
              ))
            )
          }
        </div>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
