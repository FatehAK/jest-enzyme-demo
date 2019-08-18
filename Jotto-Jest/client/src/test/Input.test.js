import React from 'react';
import { shallow } from 'enzyme';
import { findByAttr, storeFactory } from './testUtils';
import Input, { UnconnectedInput } from '../components/Input';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return shallow(<Input store={store} />).dive().dive();
};

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        });
        test('renders component without error', () => {
            const component = findByAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('renders the input box', () => {
            const inputBox = findByAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1);
        });
        test('renders the submit button', () => {
            const submitButton = findByAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1);
        });
    });
    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        });
        test('renders component without error', () => {
            const component = findByAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('does not renders the input box', () => {
            const inputBox = findByAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(0);
        });
        test('does not renders the submit button', () => {
            const submitButton = findByAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(0);
        });
    });
});

describe('redux props', () => {
    test('has `success` piece of state as prop', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });
    test('check if `guessWord` action creator is a function prop', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    });
});

describe('`guessWord` action creator called', () => {
    let guessWordMock;
    let wrapper;
    const guessedWord = 'train';
    beforeEach(() => {
        guessWordMock = jest.fn();
        const mockProps = {
            guessWord: guessWordMock,
        };
        wrapper = shallow(<UnconnectedInput {...mockProps} />);
        //add value to input box
        wrapper.instance().inputRef.current = { value: guessedWord };
        //simulate click on submit button
        const submitButton = findByAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() { } });
    });
    test('calls `guessWord` on submit button click', () => {
        const guessWordMockCallCount = guessWordMock.mock.calls.length;
        expect(guessWordMockCallCount).toBe(1);
    });
    test('calls `guessWord` with input value as an argument', () => {
        const guessWordArg = guessWordMock.mock.calls[0][0];
        expect(guessWordArg).toBe(guessedWord);
    });
    test('input box clear on submit', () => {
        expect(wrapper.instance().inputRef.current.value).toBe('');
    });
});
