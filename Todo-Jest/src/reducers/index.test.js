import { itemsReducer } from './index';

describe('itemsReducer', () => {
    test('it should add a todo item', () => {
        const todoItem = {
            id: 'id_1',
            content: 'first item'
        };
        const newState = itemsReducer([], { type: 'ADD_ITEM', payload: todoItem });
        expect(newState).toEqual([todoItem]);
    });

    test('it should delete a todo item', () => {
        const itemsInState = [
            {
                id: 'id_1',
                content: 'first item'
            },
            {
                id: 'id_2',
                content: 'second item'
            }
        ];
        const newState = itemsReducer(itemsInState, { type: 'DELETE_ITEM', payload: 'id_1' });
        expect(newState).toEqual([{ id: 'id_2', content: 'second item' }]);
    });
});
