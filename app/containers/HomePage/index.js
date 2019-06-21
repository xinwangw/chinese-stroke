/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import { WordList } from '../../components/word';
import { Page, Input } from '../../components/page';
import Button from '../../components/button/button';

const ENTER_KEY = 13;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newLine: '',
      line: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNewLineKeyDown = this.handleNewLineKeyDown.bind(this);
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
        <Button onClick={this.confirm}>OK</Button>
        <WordList line={this.state.line} strokeColor="#000" />
      </Page>
    );
  }
}
