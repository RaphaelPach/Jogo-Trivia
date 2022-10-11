import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getToken } from '../Redux/store/actions';

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
    console.log('log', response);
    const { dispatch } = this.props;
    dispatch(getToken(response));
    return response;
  };

  handleClick = async () => {
    const { history } = this.props;
    const token = await this.getToken();
    /* const sToken = JSON.stringify(token); */
    localStorage.setItem('token', token.token);
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
    const { disabled/* , email, user */ } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="input-player-name">
            Usuario:
            <input
              type="text"
              name="user"
              data-testid="input-player-name"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input-gravatar-email">
            Email:
            <input
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
