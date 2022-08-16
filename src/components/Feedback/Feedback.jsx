import React, { useState } from 'react';
import styled from 'styled-components';

import Buttons from '../Buttons/Buttons';
import Stats from '../Stats/Stats';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onClickAddToStat = value => {
    setFeedback(prevState => {
      return { ...prevState, [value]: prevState[value] + 1 };
    });
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce(
      (prevValue, currValue) => prevValue + currValue,
      0
    );
  };

  const countPositiveFeedbackPercentage = total => {
    return total > 0 ? +((100 / total) * feedback.good).toFixed() : 0;
  };

  return (
    <Container>
      <h2>Please leave feedback</h2>
      <Buttons onClick={onClickAddToStat} options={Object.keys(feedback)} />
      <h2>Statistics</h2>
      <Stats
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={countTotalFeedback()}
        positivePercent={countPositiveFeedbackPercentage(countTotalFeedback())}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 15px;
`;

export default Feedback;
