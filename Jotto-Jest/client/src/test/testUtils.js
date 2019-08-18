import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

//find by attr
export const findByAttr = (wrapper, attr) => {
    return wrapper.find(`[data-test="${attr}"]`);
};

//check props
export const checkProps = (component, props) => {
    const propsError = checkPropTypes(component.propTypes, props, 'prop', component.name);
    return propsError;
};

//redux store
export const storeFactory = (initialState) => {
    return createStore(reducers, initialState, applyMiddleware(thunk));
};
