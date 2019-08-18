import React from 'react';
import { shallow } from 'enzyme';
import { findByAttr, checkProps } from './testUtils';
import GuessedWords from '../components/GuessedWords';

const defaultProps = {
    guessedWords: [
        {
            guessedWord: 'train',
            letterMatchCount: 3
        }
    ]
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
    expect(checkProps(GuessedWords, defaultProps)).toBeUndefined();
});

describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });
    test('renders without error', () => {
        const component = findByAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders instructions to guess a word', () => {
        const instructions = findByAttr(wrapper, 'guess-instructions');
        expect(instructions.length).toBe(1);
    });
});

describe('if there are words guessed', () => {
    const guessedWords = [
        { guessedWord: 'party', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 2 },
        { guessedWord: 'joke', letterMatchCount: 1 }
    ];

    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });
    test('renders without error', () => {
        const component = findByAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders the guessed words', () => {
        const guessWordsNode = findByAttr(wrapper, 'guessed-words');
        expect(guessWordsNode.length).toBe(1);
    });
    test('correct number of guessed words', () => {
        const guessWordsNodes = findByAttr(wrapper, 'guessed-word');
        expect(guessWordsNodes.length).toBe(guessedWords.length);
    });
});
