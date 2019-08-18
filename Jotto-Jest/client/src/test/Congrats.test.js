import React from 'react';
import { shallow } from 'enzyme';
import { findByAttr, checkProps } from './testUtils';
import Congrats from '../components/Congrats';

const defaultProps = { success: false };

//setup function
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
};

test('it renders without error', () => {
    const wrapper = setup();
    const component = findByAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders text when `success` prop is true', () => {
    const wrapper = setup({ success: true });
    const message = findByAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});

test('does not throw error with default props', () => {
    expect(checkProps(Congrats, defaultProps)).toBeUndefined();
});
