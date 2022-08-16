import React from 'react';
import styled from 'styled-components';

import { capitalize } from 'components/services/capitalize';
import PropTypes from 'prop-types';

const Buttons = ({ onClick, options }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <FeedbackBtnsItem key={option}>
          <button onClick={() => onClick(option)} value={option}>
            {capitalize(option)}
          </button>
        </FeedbackBtnsItem>
      ))}
    </Wrapper>
  );
};

export default Buttons;

export const Wrapper = styled.ul`
  display: flex;
`;

const FeedbackBtnsItem = styled.li`
  margin-right: 10px;
`;

Buttons.propTypes = {
  onClick: PropTypes.func,
};
