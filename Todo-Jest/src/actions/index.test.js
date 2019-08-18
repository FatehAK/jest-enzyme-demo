import { addItem, deleteItem } from './index';

test('addItem returns valid action object', () => {
    const validObject = {
        type: 'ADD_ITEM',
        payload: {
            id: 'id_1',
            content: 'first item'
        }
    };
    expect(addItem({id: 'id_1', content: 'first item'})).toEqual(validObject);
});

test('deleteItem returns valid action object', () => {
    const validObject = {
        type: 'DELETE_ITEM',
        payload: 'id_1'
    };
    expect(deleteItem('id_1')).toEqual(validObject);
});
