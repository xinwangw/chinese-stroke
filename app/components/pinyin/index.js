import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyledPinyin} from './styled';

export default class Pinyin extends Component {
    static propTypes = {
        lineColor: PropTypes.string
    }

    static defaultProps = {
        lineColor: '#777'
    }

    render() {
        const {lineColor} = this.props;
        return (<svg xmlns="http://www.w3.org/2000/svg" width="120" height="80" x="10">
          <line x1="0" y1="0" x2="100" y2="0" stroke={lineColor} />
          <line x1="0" y1="20" x2="100" y2="20" stroke={lineColor} />
          <line x1="0" y1="40" x2="100" y2="40" stroke={lineColor} />
          <line x1="0" y1="60" x2="100" y2="60" stroke={lineColor} />
        </svg>);
    }
}