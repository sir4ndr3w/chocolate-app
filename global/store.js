import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import from 'redux-saga';
import { reducer } from "./reducer";

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
