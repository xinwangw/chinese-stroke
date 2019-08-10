import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import idGenerator from 'react-id-generator';
import HanziWriter from 'hanzi-writer';
import { WordWrapper } from './wordWrapper';
import Pinyin from '../pinyin';

export default class Word extends Component {
  static propTypes = {
    character: PropTypes.string,
    withPinyin: PropTypes.bool,
    strokeColor: PropTypes.string,
    lineColor: PropTypes.string,
    playing: PropTypes.bool,
    showPinyin: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.htmlId = idGenerator();
    this.click = this.click.bind(this);
  }

  static defaultProps = {
    character: '我',
    withPinyin: true,
    strokeColor: '#000',
    lineColor: '#777',
  };

  click() {
    this.writer.loopCharacterAnimation();
  }

  setColor(color, colorName) {
    if (colorName === undefined || colorName === 'strokeColor') {
      this.writer.updateColor('strokeColor', color, {
        duration: 0,
      });
    }
    if (colorName === undefined || colorName === 'radicalColor') {
      this.writer.updateColor('radicalColor', color, {
        duration: 0,
      });
    }
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    const { character, strokeColor, playing } = this.props;
    if (character === ' ') {
      if (this.writer) {
        this.writer.hideOutline();
      }
      return;
    }
    if (this.writer) {
      this.writer.setCharacter(character);
      this.setColor(strokeColor);
    } else {
      this.writer = HanziWriter.create(this.htmlId, character, {
        width: 100,
        height: 100,
        padding: 5,
        delayBetweenLoops: 3000,
        strokeColor,
      });
    }
    if (playing) {
      this.click();
    }
  }

  render() {
    const { withPinyin, lineColor, character, showPinyin } = this.props;
    const pinyin = withPinyin ? (
      <Pinyin lineColor={lineColor} character={character} show={showPinyin} />
    ) : (
      <Fragment />
    );
    return (
      <WordWrapper onClick={this.click}>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="180">
          {pinyin}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="100"
            x="10"
            y="80"
            id={this.htmlId}
          >
            <line x1="0" y1="0" x2="100" y2="0" stroke={lineColor} />
            <line x1="0" y1="0" x2="0" y2="100" stroke={lineColor} />
            <line x1="100" y1="0" x2="100" y2="100" stroke={lineColor} />
            <line x1="0" y1="100" x2="100" y2="100" stroke={lineColor} />
            <line x1="0" y1="0" x2="100" y2="100" stroke={lineColor} />
            <line x1="100" y1="0" x2="0" y2="100" stroke={lineColor} />
            <line x1="50" y1="0" x2="50" y2="100" stroke={lineColor} />
            <line x1="0" y1="50" x2="100" y2="50" stroke={lineColor} />
          </svg>
        </svg>
      </WordWrapper>
    );
  }
}
