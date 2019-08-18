import React from 'react';
import { shallow } from 'enzyme';
import { findByAttr, checkProps } from '../../utils/testUtils';
import TodoItem from './TodoItem';

const defaultProps = {
    item: {
        id: 'id_1',
        content: 'first item'
    }
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props  };
    return shallow(<TodoItem {...setupProps} />);
};

test('does not throw warning with expected props', () => {
    expect(checkProps(TodoItem, defaultProps)).toBeUndefined();
});

describe('render', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const component = findByAttr(wrapper, 'component-todo-item');
        expect(component.length).toBe(1);
    });

    test('renders the todo content', () => {
        const wrapper = setup();
        const todoContent = findByAttr(wrapper, 'todo-content');
        expect(todoContent.length).toBe(1);
    });
    test('renders the delete todo button', () => {
        const wrapper = setup();
        const deleteButton = findByAttr(wrapper, 'delete-button');
        expect(deleteButton.length).toBe(1);
    });
});

test('check if correct content is displayed', () => {
    const item = {
        id: 'id_1',
        content: 'first item'
    };
    const wrapper = setup({ item });
    const todoContent = findByAttr(wrapper, 'todo-content');
    expect(todoContent.text()).toBe(item.content);
});

test('calls `deleteItem` action creator on button click', () => {
    const deleteItemMock = jest.fn();
    const mockProps = {
        deleteItem: deleteItemMock
    };
    const wrapper = setup({ ...mockProps });
    //simulate click on delete button
    const deleteButton = findByAttr(wrapper, 'delete-button');
    deleteButton.simulate('click');
    const deleteItemMockCallCount = deleteItemMock.mock.calls.length;
    expect(deleteItemMockCallCount).toBe(1);
});
