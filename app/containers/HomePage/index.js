/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import { WordList } from '../../components/word';
import { Page, Input } from '../../components/page';
import Button from '../../components/button/button';

const ENTER_KEY = 13;

const Checkbox = styled.label`
  span {
    margin-left: 10px;
  }
`;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newLine: '',
      line: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNewLineKeyDown = this.handleNewLineKeyDown.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  static defaultProps = {
    line: '',
  };

  handleChange(event) {
    this.setState({ newLine: event.target.value });
  }

  handleNewLineKeyDown(event) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    this.confirm();
  }

  handleCheckboxChange(event) {
    this.setState({ showPinyin: event.target.checked });
  }

  confirm() {
    const val = this.state.newLine;

    if (val) {
      this.setState({ newLine: '', line: val });
    }
  }

  render() {
    return (
      <Page>
        <h1>汉字笔顺</h1>
        <Input
          value={this.state.newLine}
          onKeyDown={this.handleNewLineKeyDown}
          onChange={this.handleChange}
        />
        <Checkbox>
          <input type="checkbox" onChange={this.handleCheckboxChange} />
          <span>Show Pinyin</span>
        </Checkbox>
        <br />
        <Button onClick={this.confirm}>OK</Button>
        <WordList
          line={this.state.line}
          showPinyin={this.state.showPinyin}
          strokeColor="#000"
        />
      </Page>
    );
  }
}
