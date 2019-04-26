import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import idGenerator from 'react-id-generator';
import {WordWrapper, StyledWord} from './wordWrapper';
import Pinyin from '../pinyin';
import HanziWriter from 'hanzi-writer';

export default class Word extends Component {
    static propTypes = {
        character: PropTypes.string,
        withPinyin: PropTypes.bool,
        strokeColor: PropTypes.string,
        lineColor: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.htmlId = idGenerator();
    }

    static defaultProps = {
        character: '我',
        withPinyin: true,
        strokeColor: '#000',
        lineColor: '#777'
    }

    click() {
        this.writer.loopCharacterAnimation();
    }

    setColor(color, colorName) {
        if (colorName === undefined || colorName === 'strokeColor') {
            this.writer.updateColor('strokeColor',color, {
                duration: 0
            });
        }
        if (colorName === undefined || colorName === 'radicalColor') {
            this.writer.updateColor('radicalColor',color, {
                duration: 0
            });
        }
    }

    componentDidMount() {
        this.componentDidUpdate();
    }

    componentDidUpdate() {
        const {character, strokeColor} = this.props;
        if (character===' ') {
            console.log('empty char', this.writer);
            if (this.writer) {
                // this.writer.hideCharacter();
                this.writer.hideOutline();
            }
            return;
        }
        console.log('write char');
        this.writer = HanziWriter.create(this.htmlId, character, {
            width: 100,
            height: 100,
            padding: 5,
            delayBetweenLoops: 3000,
            strokeColor: strokeColor
          });
    }

    render() {
        const {withPinyin, lineColor} = this.props;
        const pinyin = withPinyin ? <Pinyin lineColor={lineColor} /> : <Fragment/>;
        return (
            <WordWrapper onClick={this.click.bind(this)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="180">
                {pinyin}
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="100" x="10" y="80" id={this.htmlId}>
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