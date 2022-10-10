import React from 'react';
import Header from '../components/Header';

export default class Game extends React.Component {
  state = {
    timer: 30,
  };

  componentDidMount() {
    const second = 1000;
    const time = 2000;
    setTimeout(() => {
      const update = setInterval(() => {
        this.setState((prev) => {
          if (prev.timer === 1) {
            clearInterval(update);
          }
          return { timer: prev.timer - 1 };
        });
      }, second);
    }, time);
  }

  render() {
    const { timer } = this.state;
    return (
      <div>
        <Header />
        <h1>pacheco</h1>
        <h3>
          {timer}
        </h3>
      </div>
    );
  }
}
