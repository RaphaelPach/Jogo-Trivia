import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends React.Component {
  /*   componentDidMount() {
     this.getImage();
   } */

  getImage = () => {
    const { email } = this.props;

    const hash = md5(email).toString();

    const url = `https://www.gravatar.com/avatar/${hash}`;
    /* const data = await fetch(url);
     const response = await data.json(); */

    return url;
  };

  render() {
    const { userName, userScore /* userPicture */ } = this.props;
    return (
      <div>
        <img src={ this.getImage() } alt="" data-testid="header-profile-picture" />
        <h4 data-testid="header-player-name">{userName}</h4>
        <h4 data-testid="header-score">{userScore}</h4>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  /* dispatch: PropTypes.func.isRequired, */
  userName: PropTypes.string.isRequired,
  userScore: PropTypes.string,
  /*  userPicture: PropTypes.string.isRequired, */
};

Header.defaultProps = {
  userScore: '0',
};

const mapStateToProps = (state) => ({
  email: state.player.gravatarEmail,
  userName: state.player.name,
  userScore: state.player.score,
  /* userScore: state.userScore, */
  /* userPicture: state.userPicture, */
});

export default connect(mapStateToProps)(Header);
