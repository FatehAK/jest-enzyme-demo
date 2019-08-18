import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
    let contents;
    if (props.guessedWords.length === 0) {
        contents = (
            <h5 data-test="guess-instructions">Try to guess some words</h5>
        );
    } else {
        contents = (
            <div className="guessed-words" data-test="guessed-words">
                {(props.guessedWords.map((words) => (
                    <div key={words.guessedWord} className="guessed-word" data-test="guessed-word">
                        <span>{words.guessedWord} : {words.letterMatchCount}</span>
                    </div>
                )))}
            </div>
        );
    }
    return (
        <div className="guessed-words" data-test="component-guessed-words">{contents}</div>
    );
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};

export default GuessedWords;
