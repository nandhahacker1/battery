import { combineReducers, createStore } from 'redux';
import apiData from "./reducer/apiData";
import utile from './reducer/utile';

const rootReducer = combineReducers({ apiData, utile })

export const store = createStore(rootReducer)