import React from 'react';
import { shallow } from 'enzyme';
import { findByAttr, storeFactory } from '../../utils/testUtils';
import App from './App';

const setup = (state = {}) => {
    const store = storeFactory(state);
    return shallow(<App store={store} />).dive().dive();
};

describe('render', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const component = findByAttr(wrapper, 'component-app');
        expect(component.length).toBe(1);
    });
});

describe('redux props', () => {
    test('has access to `items` piece of state as props', () => {
        const items = [{ id: 'id_1', content: 'first item' }];
        const wrapper = setup({ items });
        const itemsProp = wrapper.instance().props.items;
        expect(itemsProp).toBe(items);
    });
    test('check if `addItem` action creator is a function prop', () => {
        const wrapper = setup();
        const addItemProp = wrapper.instance().props.addItem;
        expect(addItemProp).toBeInstanceOf(Function);
    });
    test('check if `deleteItem` action creator is a function prop', () => {
        const wrapper = setup();
        const deleteItemProp = wrapper.instance().props.deleteItem;
        expect(deleteItemProp).toBeInstanceOf(Function);
    });
});
