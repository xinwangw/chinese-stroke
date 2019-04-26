import React, { Component, Fragment, useRef } from 'react';
import PropTypes from 'prop-types';
import Word from './word';
import {WordListWrapper} from './wordWrapper';
import Button from '../button/button';
import ReactToPrint from 'react-to-print';
import { ColorSelector, ColorSelectorWrapper } from './colorSelector';

export default class WordList extends Component {
    static propTypes = {
        line: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.content = [<Word/>];
        this.state = {strokeColor: '#000'};
        this.setColor = this.setColor.bind(this);
    }

    static defaultProps = {
        line: '测试'
    }

    click() {
        this.content.forEach((item, index) => {
            this.refs[`item${index}`].click();
        });
    }

    setColor(e) {
        const color = e.currentTarget.attributes['data'].value;
        if (this.content) {
            this.content.forEach((item, index) => {
                this.refs[`item${index}`] && this.refs[`item${index}`].setColor(color);
            });
        }
    }

    render() {
        const {line} = this.props;
        this.content = line.split('').map((item, index) => (
            <Word key={`item${index}`} 
                ref={`item${index}`} 
                character={item}
                strokeColor={this.state.strokeColor}
            />
        ));
        return (
            <Fragment>
                <Button onClick={this.click.bind(this)}>Play</Button>
                <ColorSelectorWrapper>
                    <ColorSelector data='#777' onClick={e => this.setColor(e)}/>
                    <ColorSelector data='#000' onClick={e => this.setColor(e)}/>
                </ColorSelectorWrapper>
                <ReactToPrint
                    trigger={() => <Button>Print this out!</Button>}
                    content={() => this.refs.wordlist}
                    pageStyle="padding: 30px; display: flex;"
                />
                <WordListWrapper ref='wordlist'>
                    {this.content}
                </WordListWrapper>
            </Fragment>
        );
    }
}