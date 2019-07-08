import React, { Children } from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styledButton';

const Button = function Button(props) {
  const { onClick, children } = props;
  return (
    <StyledButton onClick={onClick}>{Children.toArray(children)}</StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
