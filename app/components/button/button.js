import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styledButton';

export default class Button extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        children: PropTypes.node.isRequired
    };

    render() {
        const {text, onClick, children} = this.props;
        return (
            <StyledButton onClick={onClick}>
              {Children.toArray(children)}
            </StyledButton>
          );
    }
}