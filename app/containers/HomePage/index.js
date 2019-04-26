/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Word, WordList} from '../../components/word';
import {Page} from '../../components/page';

const ENTER_KEY = 13;

export default class HomePage extends Component {
  static propTypes = {
    line: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      newLine: '', 
      line: '',
      print: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNewLineKeyDown = this.handleNewLineKeyDown.bind(this);
  }

  static defaultProps = {
    line: ''
  }

  handleChange(event) {
    this.setState({newLine: event.target.value});
  }

  handleNewLineKeyDown(event) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var val = this.state.newLine;

    if (val) {
      this.setState({newLine: '', line: val});
    }
  }

  render() {
      return (
        <Page>
          <input 
            value={this.state.newLine}
            onKeyDown={this.handleNewLineKeyDown}
            onChange={this.handleChange}
          />
          <WordList line={this.state.line}></WordList>
        </Page>
    );
  }
}
