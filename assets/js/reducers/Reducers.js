import { TransactionTypes, RequestType } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const initState = {
    account: {
        balance: 500.00,
        transactions: [
            {type:TransactionTypes.CREDIT, amount: 500.00, success: true, date: new Date(), id: '2016-00'}
        ]
    },
    transactionRequest: {
        text: '',
        showTransactionInput: false,
        currentRequest: null,
        error: ''
    }
}
//need to account for error state if debit amount > balance
function account(state = initState.account, action) {
    let new_balance, success;
    
    switch (action.type) {
        case TransactionTypes.CREDIT:
            new_balance = state.balance + action.amount;
            success = true;
            
            return Object.assign({}, state, { 
                balance: new_balance,
                transactions: [...state.transactions, {
                    type:action.type, 
                    amount: action.amount, 
                    success: success, 
                    date: action.date,
                    id: action.id
                }]
            });
           

        case TransactionTypes.DEBIT:
            if (action.amount > state.balance) {
                new_balance = state.balance;
                success = false;
            }
            else {
                new_balance = state.balance - action.amount;
                success = true;
            }
            return Object.assign({}, state, { 
                balance: new_balance,
                transactions: [...state.transactions, {
                    type:action.type, 
                    amount: action.amount, 
                    success: success, 
                    date: action.date,
                    id: action.id
                }]
            });

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
        case RequestType.ERROR:
            return Object.assign({}, state, {error: action.message});
        default:
            return initState.transactionRequest;
    }
}


const BankApp = combineReducers({
    account, transactionRequest
});

export default BankApp;
