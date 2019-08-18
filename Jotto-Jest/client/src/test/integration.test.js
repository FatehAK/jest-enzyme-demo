import { storeFactory } from './testUtils';
import { guessWord } from '../actions/index';

describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';

    describe('no guessed words', () => {
        let store;
        const initialState = { secretWord };
        beforeEach(() => {
            store = storeFactory(initialState);
        })
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3
                }]
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        });
    });

    describe('some guessed words', () => {
        const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
        const initialState = { secretWord, guessedWords };

        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        });

        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }]
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [...guessedWords, { guessedWord: secretWord, letterMatchCount: 5 }]
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        });
    });
});
