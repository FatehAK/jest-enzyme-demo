import { combineReducers } from 'redux';

export const successReducer = (state = false, action) => {
    switch (action.type) {
        case 'CORRECT_GUESS':
            return true;
        default:
            return state;
    }
};

export const guessedWordsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GUESS_WORD':
            return [...state, action.payload];
        default:
            return state;
    }
};

export const secretWordReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_SECRET_WORD':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    secretWord: secretWordReducer,
    success: successReducer,
    guessedWords: guessedWordsReducer
});
