import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userName, userScore, userPicture } = this.props;
    return (
      <div>
        <img src={ userPicture } alt="" data-testid="header-profile-picture" />
        <h4 data-testid="header-player-name">{userName}</h4>
        <h4 data-testid="header-score">{userScore}</h4>
      </div>
    );
  }
}

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  userScore: PropTypes.string.isRequired,
  userPicture: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userName: state.userName,
  userScore: state.userScore,
  userPicture: state.userPicture,
});

export default connect(mapStateToProps)(Header);
