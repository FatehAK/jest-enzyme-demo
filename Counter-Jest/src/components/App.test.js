import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

//factory function
const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App {...props} />);
    if (state) {
        wrapper.setState(state);
    }
    return wrapper;
};

//findByAttr function
const findByAttr = (wrapper, attr) => {
    return wrapper.find(`[data-test="${attr}"]`);
};

describe('Initial Setup', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = setup();
    });
    test('renders without crashing', () => {
        const appComponent = findByAttr(wrapper, 'component-app');
        expect(appComponent.length).toBe(1);
    });
    test('renders counter display', () => {
        const counterDisplay = findByAttr(wrapper, 'counter-display');
        expect(counterDisplay.length).toBe(1);
    });
    test('counter starts at 0', () => {
        const initialCounterState = wrapper.state('counter');
        expect(initialCounterState).toBe(0);
    });
});

//increment counter
describe('Increment', () => {
    test('renders the increment counter button', () => {
        const wrapper = setup();
        const incrementButton = findByAttr(wrapper, 'increment-button');
        expect(incrementButton.length).toBe(1);
    });
    //testing behavior here rather than implementaion
    test('counter display increments on increment button click', () => {
        const counter = 6;
        const wrapper = setup(null, { counter });
        //find button and click
        const incrementButton = findByAttr(wrapper, 'increment-button');
        incrementButton.simulate('click');
        wrapper.update();
        //find display and increment
        const counterDisplay = findByAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(counter + 1);
    });
});

//decrement counter
describe('Decrement', () => {
    test('renders the decrement counter button', () => {
        const wrapper = setup();
        const decrementButton = findByAttr(wrapper, 'decrement-button');
        expect(decrementButton.length).toBe(1);
    });
    test('counter display decrements on decrement button click', () => {
        const counter = 7;
        const wrapper = setup(null, { counter });
        //find button and click
        const decrementButton = findByAttr(wrapper, 'decrement-button');
        decrementButton.simulate('click');
        wrapper.update();
        //find display and decrement
        const counterDisplay = findByAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(counter - 1);
    });
    test('error not shown when count > 0', () => {
        const wrapper = setup();
        const errorDisplay = findByAttr(wrapper, 'error-display');
        expect(errorDisplay.length).toBe(0);
    });
    test('display error when count < 0', () => {
        const counter = 0;
        const wrapper = setup(null, { counter });
        //find button and click
        const decrementButton = findByAttr(wrapper, 'decrement-button');
        decrementButton.simulate('click');
        wrapper.update();
        //find error and display
        const errorDisplay = findByAttr(wrapper, 'error-display');
        expect(errorDisplay.length).toBe(1);
    });
});
