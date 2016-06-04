
import { combineReducers } from 'redux';
import { account, transactions } from './Reducers';

const mainReducer = combineReducers({
   account, transactions
});