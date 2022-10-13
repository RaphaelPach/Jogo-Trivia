import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { urlAction } from '../Redux/actions/index';
import '../pages/css/Header.css';

class Header extends React.Component {
  getImage = () => {
    const { email, dispatch } = this.props;

    const hash = md5(email).toString();

    const url = `https://www.gravatar.com/avatar/${hash}`;

    dispatch(urlAction(url));

    return url;
  };

  render() {
    const { userName, userScore } = this.props;
    return (
      <div className="div-header">
        <img
          id="header-profile-picture"
          src={ this.getImage() }
          alt=""
          data-testid="header-profile-picture"
        />
        <h4 id="header-player-name" data-testid="header-player-name">
          Nome:
          {' '}
          {userName}
        </h4>
        <h4 id="header-score" data-testid="header-score">
          Total:
          {' '}
          {userScore}
        </h4>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  userScore: PropTypes.number,
};

Header.defaultProps = {
  userScore: 0,
};

const mapStateToProps = (state) => ({
  email: state.player.gravatarEmail,
  userName: state.player.name,
  userScore: state.player.score,
});

export default connect(mapStateToProps)(Header);
