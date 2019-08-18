import { combineReducers } from 'redux';

export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'DELETE_ITEM':
            const filteredItems = state.filter((item) => item.id !== action.payload);
            return [...filteredItems];
        default:
            return state;
    }
};

export default combineReducers({
    items: itemsReducer
});
