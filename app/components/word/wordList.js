import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactToPrint from 'react-to-print';
import Word from './word';
import { WordListWrapper } from './wordWrapper';
import Button from '../button/button';
import { ColorSelector, ColorSelectorWrapper } from './colorSelector';

export default class WordList extends Component {
  static propTypes = {
    line: PropTypes.string,
    strokeColor: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.content = [<Word />];
    this.setColor = this.setColor.bind(this);
    this.click = this.click.bind(this);
    this.wordlist = React.createRef();
    this.state = { color: null };
  }

  static defaultProps = {
    line: '测试',
  };

  words = [];

  click() {
    this.content.forEach((item, index) => {
      this.words[`item${index}`].click();
    });
  }

  setColor(e) {
    const color = e.currentTarget.attributes.data.value;
    this.setState({
      color,
    });
  }

  render() {
    const { line, strokeColor } = this.props;
    this.content = line
      .split('')
      .map(item => (
        <Word
          key={item}
          character={item}
          strokeColor={this.state.color || strokeColor}
        />
      ));
    const printButton =
      this.content && this.content.length > 0 ? (
        <ReactToPrint
          trigger={() => <Button>Print</Button>}
          content={() => this.wordlist.current}
          pageStyle="padding: 30px; display: flex;"
        />
      ) : (
        ''
      );
    return (
      <Fragment>
        <Button onClick={this.click}>Play All</Button>
        <ColorSelectorWrapper>
          <ColorSelector data="#777" onClick={e => this.setColor(e)} />
          <ColorSelector data="#000" onClick={e => this.setColor(e)} />
        </ColorSelectorWrapper>
        {printButton}
        <WordListWrapper ref={this.wordlist}>{this.content}</WordListWrapper>
      </Fragment>
    );
  }
}
