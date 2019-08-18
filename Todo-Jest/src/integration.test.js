import { storeFactory } from './utils/testUtils';
import { addItem, deleteItem } from './actions/index';

test('todo item is added to the state', () => {
    const initialState = {
        items: []
    };
    const store = storeFactory(initialState);
    store.dispatch(addItem({ id: 'id_1', content: 'first item' }));
    const expectedState = {
        items: [{
            id: 'id_1',
            content: 'first item'
        }]
    };
    const newState = store.getState();
    expect(newState).toEqual(expectedState);
});

test('todo item is deleted from the state', () => {
    const currentState = {
        items: [
            {
                id: 'id_1',
                content: 'first item'
            },
            {
                id: 'id_2',
                content: 'second item'
            }
        ]
    };
    const store = storeFactory(currentState);
    store.dispatch(deleteItem('id_1'));
    const expectedState = {
        items: [{
            id: 'id_2',
            content: 'second item'
        }]
    };
    const newState = store.getState();
    expect(newState).toEqual(expectedState);
});
