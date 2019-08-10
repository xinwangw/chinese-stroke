import React from 'react';
import PropTypes from 'prop-types';

const Pinyin = function Pinyin(props) {
  const { lineColor } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="80" x="10">
      <line
        x1="0"
        y1="0"
        x2="100"
        y2="0"
        stroke={lineColor}
        strokeDasharray="4"
      />
      <line
        x1="0"
        y1="20"
        x2="100"
        y2="20"
        stroke={lineColor}
        strokeDasharray="4"
      />
      <line
        x1="0"
        y1="40"
        x2="100"
        y2="40"
        stroke={lineColor}
        strokeDasharray="4"
      />
      <line
        x1="0"
        y1="60"
        x2="100"
        y2="60"
        stroke={lineColor}
        strokeDasharray="4"
      />
    </svg>
  );
};

Pinyin.propTypes = {
  lineColor: PropTypes.string,
};

export default Pinyin;
