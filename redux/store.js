import {applyMiddleware, compose, createStore} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import reducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import reduxThunk from "redux-thunk";

export const configureStore = (initialState) => {
    const middlewares = [reduxThunk];
    const enhancer = process.env.NODE_ENV === 'production' ?
        compose(applyMiddleware(...middlewares)) :
        composeWithDevTools(
            applyMiddleware(...middlewares)
        );
    const store = createStore(reducer, initialState, enhancer);
    return store;
}

export const wrapper = createWrapper(configureStore, {debug: true});