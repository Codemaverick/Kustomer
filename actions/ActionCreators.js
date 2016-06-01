/**
 * Action Creators
 */

import { TransactionTypes } from '../constants/ActionTypes';

function debitAccount(amount){
    return {
        type: TransactionTypes.DEBIT,
        amount: amount,
        date: new Date()
    };
}

function creditAccount(amount) {
    return {
        type: TransactionTypes.CREDIT,
        amount: amount,
        date: new Date()
    }
}