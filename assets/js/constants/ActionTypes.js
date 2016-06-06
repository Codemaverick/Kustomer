// Bank Action Types
const TransactionTypes  = {
    CREDIT: 'credit',
    DEBIT: 'debit',
    TRANSFER: 'transfer'
};

const RequestType = {
    CREDIT: 'request_credit',
    DEBIT: 'request_debit',
    CANCEL: 'request_cancel'
};

export const ADD_TRANSACTION = 'add_transaction';
export const CANCEL_TRANSACTION = 'cancel_transaction';

export { TransactionTypes, RequestType };