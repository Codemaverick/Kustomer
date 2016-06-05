import { TransactionTypes } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const initState = {
    balance: 500.00,
    transactions: []
}
//need to account for error state if debit amount > balance
function balance(state = initState.balance, action) {
    let new_balance;
    
    switch(action.type) {
        case TransactionTypes.CREDIT:
            new_balance = state + action.amount;
            break;
                
        case TransactionTypes.DEBIT:
            new_balance =  action.amount > state ? state : state - action.amount;
            break;
            
        default: 
            new_balance = state;
    }
    
    return new_balance;
}

function transactions(state = [], action) {
    switch(action.type) {
        default:
            return state;
    }
}

const BankApp = combineReducers({
   balance, transactions
});

export default BankApp;
