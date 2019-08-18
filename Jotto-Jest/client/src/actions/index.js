import axios from 'axios';
import { getLetterMatchCount } from '../helpers/index';

export const guessWord = (guessedWord) => {
    return (dispatch, getState) => {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        dispatch({
            type: 'GUESS_WORD',
            payload: { guessedWord, letterMatchCount }
        });

        if (guessedWord === secretWord) {
            dispatch({
                type: 'CORRECT_GUESS'
            });
        }
    };
};

export const getSecretWord = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3030');
        dispatch({
            type: 'SET_SECRET_WORD',
            payload: response.data
        });
    }
};
