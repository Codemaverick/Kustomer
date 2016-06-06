/**
 * Action Creators
 */

import { TransactionTypes, RequestType } from '../constants/ActionTypes';

export function debitAccount(amount){
    return {
        type: TransactionTypes.DEBIT,
        amount: amount,
        date: new Date()
    };
}

export function creditAccount(amount) {
    return {
        type: TransactionTypes.CREDIT,
        amount: amount,
        date: new Date()
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