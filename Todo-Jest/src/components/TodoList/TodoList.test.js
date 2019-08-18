import React from 'react';
import { shallow } from 'enzyme';
import { findByAttr, checkProps } from '../../utils/testUtils';
import TodoList from './TodoList';

const defaultProps = {
    items: [
        {
            id: 'id_1',
            content: 'first item'
        }
    ]
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<TodoList {...setupProps} />);
};

test('does not throw warning with expected props', () => {
    expect(checkProps(TodoList, defaultProps)).toBeUndefined();
});

describe('if there are no todo items', () => {
    test('does not render at all', () => {
        const wrapper = setup({ items: [] });
        const component = findByAttr(wrapper, 'component-todo-list');
        expect(component.length).toBe(0);
    });
});

describe('if there are todo items', () => {
    const items = [
        { id: 'id_1', content: 'first item' },
        { id: 'id_2', content: 'second item' },
        { id: 'id_3', content: 'third item' }
    ];
    test('renders without error', () => {
        const wrapper = setup({ items });
        const component = findByAttr(wrapper, 'component-todo-list');
        expect(component.length).toBe(1);
    });
    test('renders correct number of todo items', () => {
        const wrapper = setup({ items });
        const component = findByAttr(wrapper, 'component-todo-item');
        expect(component.length).toBe(3);
    });
});
