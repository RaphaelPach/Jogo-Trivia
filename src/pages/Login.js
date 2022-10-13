import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getToken, emailAction } from '../Redux/actions';
import './css/Login.css';
import interrogation from '../assets/interrogation.png';

class Login extends Component {
  state = {
    email: '',
    user: '',
    disabled: true,
  };

  getToken = async () => {
    const url = 'https://opentdb.com/api_token.php?command=request';
    const data = await fetch(url);
    const response = await data.json();
    const { dispatch } = this.props;
    dispatch(getToken(response));
    return response;
  };

  handleClick = async () => {
    const { history, dispatch } = this.props;
    const token = await this.getToken();
    localStorage.setItem('token', token.token);

    const { email, user } = this.state;
    const action = {
      email,
      user,
    };
    dispatch(emailAction(action));

    history.push('/game');
  };

  handleConfigClick = () => {
    const { history } = this.props;
    history.push('/settings');
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.verifyBtn);
  };

  verifyBtn = () => {
    const { email, user } = this.state;
    const Regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const verifyEmail = Regex.test(email);
    const number = 3;
    const verifyUser = user.length >= number;
    this.setState({ disabled: !(verifyEmail && verifyUser) });
  };

  render() {
    const { disabled } = this.state;
    return (
      <div className="body-login">
        <div className="header-login">
          <h1>Jogo de Trivia</h1>
          <img src={ interrogation } alt="interrogation" width="40px" height="40px" />
          <img src={ interrogation } alt="interrogation" width="20px" height="20px" />
        </div>
        <form className="form-login">
          <label className="label-login" htmlFor="input-player-name">
            Usuario:
            <input
              className="input-login"
              type="text"
              name="user"
              data-testid="input-player-name"
              onChange={ this.handleChange }
            />
          </label>
          <label className="label-login" htmlFor="input-gravatar-email">
            Email:
            <input
              className="input-login"
              type="email"
              name="email"
              data-testid="input-gravatar-email"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="btn-play"
            disabled={ disabled }
            onClick={ this.handleClick }
            onChange={ this.getToken }
          >
            Play
          </button>
          <button
            type="button"
            data-testid="btn-settings"
            onClick={ this.handleConfigClick }
          >
            Configurações
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
