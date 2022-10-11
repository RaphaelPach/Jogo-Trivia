import React, { Component } from 'react';
import { connect } from 'react-redux';
/* import PropTypes from 'prop-types'; */
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    /* const { userName } = this.props; */
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text"> Feedback </h1>
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
export default connect(mapStateToProps)(Feedback);
