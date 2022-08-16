import React, { Component } from 'react';
import styled from 'styled-components';

import Buttons from '../Buttons/Buttons';
import Stats from '../Stats/Stats';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickAddToStat = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (prevValue, currValue) => prevValue + currValue,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0
      ? +((100 / this.countTotalFeedback()) * this.state.good).toFixed()
      : 0;
  };

  render() {
    return (
      <Container>
        <h2>Please leave feedback</h2>
        <Buttons
          onClick={this.onClickAddToStat}
          options={Object.keys(this.state)}
        />
        <h2>Statistics</h2>
        <Stats
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercent={this.countPositiveFeedbackPercentage()}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 0 15px;
`;

export default Feedback;
