import React from 'react';
import { connect } from 'react-redux';
import { getSecretWord } from '../actions/index';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';

export class UnconnectedApp extends React.Component {

    componentDidMount() {
        //get the secret word
        this.props.getSecretWord();
    }

    render() {
      return (
          <div className="app">
              <h2>Guess Word App</h2>
              <div>The secret word is {this.props.secretWord}</div>
              <Congrats success={this.props.success} />
              <Input />
              <GuessedWords guessedWords={this.props.guessedWords}/>
          </div>
      );
    }
}

const mapStateToProps = (state) => ({
    secretWord: state.secretWord,
    success: state.success,
    guessedWords: state.guessedWords
});

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
