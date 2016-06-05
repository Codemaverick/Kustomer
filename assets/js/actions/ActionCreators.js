/**
 * Action Creators
 */

import { TransactionTypes } from '../constants/ActionTypes';

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