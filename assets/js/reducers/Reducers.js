import { TransactionTypes, RequestType } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const initState = {
    balance: 500.00,
    transactions: [],
    transactionRequest: {
        text: '',
        showTransactionInput: false,
        currentRequest: null
    }
}
//need to account for error state if debit amount > balance
function balance(state = initState.balance, action) {
    let new_balance;

    switch (action.type) {
        case TransactionTypes.CREDIT:
            new_balance = state + action.amount;
            break;

        case TransactionTypes.DEBIT:
            new_balance = action.amount > state ? state : state - action.amount;
            break;

        default:
            new_balance = state;
    }

    return new_balance;
}

function transactions(state = [], action) {
    switch (action.type) {
        default:
            return state;
    }
}

function transactionRequest(state = initState.transactionRequest, action) {
    switch (action.type) {
        case RequestType.CREDIT:
         return Object.assign({}, state, {showTransactionInput: true, text:'Enter Credit Amount:', currentRequest: RequestType.CREDIT} );
        case RequestType.DEBIT:
            return Object.assign({}, state, {showTransactionInput: true, text:'Enter Debit Amount:', currentRequest: RequestType.DEBIT} );
        default:
            return initState.transactionRequest;
    }
}

const BankApp = combineReducers({
    balance, transactions, transactionRequest
});

export default BankApp;
