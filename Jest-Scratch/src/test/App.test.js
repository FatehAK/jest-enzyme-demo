import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import { findByAttr } from './testUtils';

const setup = (props = {}, state = null) => {
    return shallow(<App {...props} />);
};

test('it renders without error', () => {
    const wrapper = setup();
    const component = findByAttr(wrapper, 'component-app');
    expect(component.length).toBe(1);
});
