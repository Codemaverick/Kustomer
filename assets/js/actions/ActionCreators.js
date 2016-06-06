/**
 * Action Creators
 */

import { TransactionTypes, RequestType } from '../constants/ActionTypes';

export function debitAccount(amount, id){
    return {
        type: TransactionTypes.DEBIT,
        amount: amount,
        date: new Date(),
        id: id
    };
}

export function creditAccount(amount, id) {
    return {
        type: TransactionTypes.CREDIT,
        amount: amount,
        date: new Date(),
        id: id
    }
}

export function requestCreditTransaction() {
    return {
        type: RequestType.CREDIT,
        text: 'Enter Credit Amount'
    }
}

export function requestDebitTransaction() {
    return {
        type: RequestType.DEBIT,
        text: 'Enter Debit Amount'
    }
}


export function requestCancelTransaction() {
    return {
        type: RequestType.CANCEL
    }
}

export function transactionError(msg) {
    return {
        type: RequestType.ERROR,
        message: msg
    }
}