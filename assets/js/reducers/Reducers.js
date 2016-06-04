import { TransactionTypes } from '../constants/ActionTypes';

const initState = {
    balance: 500.00,
    transactions: []
}

function account(state = initState, action) {
    switch(action.type) {
        case TransactionTypes.CREDIT:
        let new_balance = () => {
            return state.balance + action.amount;
        }
    }

    return state;
}

function transactions(state = [], action) {
    switch(action.type) {

    }
}

export { account, transactions };