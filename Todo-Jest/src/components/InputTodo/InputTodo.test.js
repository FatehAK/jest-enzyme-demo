import React from 'react';
import { shallow } from 'enzyme';
import { findByAttr } from '../../utils/testUtils';
import InputTodo from './InputTodo';

const setup = (props = {}) => {
    return shallow(<InputTodo {...props} />);
};

describe('render', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const component = findByAttr(wrapper, 'component-input-todo');
        expect(component.length).toBe(1);
    });
    test('renders the input box', () => {
        const wrapper = setup();
        const inputBox = findByAttr(wrapper, 'input-box');
        expect(inputBox.length).toBe(1);
    });
    test('renders the add item button', () => {
        const wrapper = setup();
        const addButton = findByAttr(wrapper, 'add-button');
        expect(addButton.length).toBe(1);
    });
});

describe('check if `addItem` action creator called', () => {
    let addItemMock;
    let wrapper;
    const item = {
        id: 'id_1',
        content: 'first item'
    };
    beforeEach(() => {
        addItemMock = jest.fn();
        const mockProps = {
            addItem: addItemMock,
        };
        wrapper = setup({ ...mockProps });
        //add value to input box
        wrapper.instance().inputRef.current = { value: item.content };
        //simulate click on submit button
        const addButton = findByAttr(wrapper, 'add-button');
        addButton.simulate('click');
    });
    test('calls `addItem` on button click', () => {
        const addItemMockCallCount = addItemMock.mock.calls.length;
        expect(addItemMockCallCount).toBe(1);
    });
    test('input box clear on submit', () => {
        expect(wrapper.instance().inputRef.current.value).toBe('');
    });
});
