// Bank Action Types
const TransactionTypes  = {
    CREDIT: 'CREDIT',
    DEBIT: 'DEBIT'
};

const RequestType = {
    CREDIT: 'REQUEST_CREDIT',
    DEBIT: 'REQUEST_DEBIT',
    CANCEL: 'REQUEST_CANCEL',
    ERROR: 'REQUEST_ERROR'
};

export const ADD_TRANSACTION = 'add_transaction';
export const CANCEL_TRANSACTION = 'cancel_transaction';

export { TransactionTypes, RequestType };