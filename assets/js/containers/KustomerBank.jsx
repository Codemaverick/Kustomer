import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import OverviewSection from '../components/OverviewSection';
import TransactionListView from '../components/TransactionListView';
import TransactionInput from '../components/TransactionInput';
import MenuBar from '../components/MenuBar';
import { TransactionType, RequestType } from '../constants/ActionTypes';
import {
    debitAccount,
    creditAccount,
    requestCreditTransaction,
    requestDebitTransaction,
    requestCancelTransaction,
    transactionError
} from '../actions/ActionCreators';


class KustomerBank extends Component {
    constructor(props) {
        super(props);
        this.counter = 0;    
    }
    
    renderOverviewSection() {
        return (
            <section>
                <OverviewSection currentBalance={this.props.account.balance} />
            </section>
        )
    }

    renderMenuButtons() {
        return (
            <section id="menu">
                <MenuBar
                    onDepositClick={this.handleDepositClick.bind(this) }
                    onWithdrawalClick={this.handleWithdrawalClick.bind(this) }
                    />
            </section>
        )
    }

    renderTransactionsList() {
        return (
            <section id="transactions">
                <TransactionListView items={this.props.account.transactions} />
            </section>
        )
    }

    renderTransactionInput() {
        const { store, transactionRequest } = this.props;
        if (transactionRequest.showTransactionInput){
            return (
                <section id="transaction_input">
                    <TransactionInput
                        onSubmitClick={this.handleSubmitTransaction.bind(this) }
                        onCancelClick={() => store.dispatch(requestCancelTransaction()) }
                        text={transactionRequest.text}
                        error={transactionRequest.error}
                        />
                </section>
            )
        }
        else {
            return (<section id="transaction_input"></section>)
        }
        
    }

    handleDepositClick() {
        console.log('deposit button clicked');
        this.props.store.dispatch(requestCreditTransaction());
    }

    handleWithdrawalClick() {
        console.log('withdrawal button clicked');
        this.props.store.dispatch(requestDebitTransaction());
    }

    handleSubmitTransaction(value) {
        console.log('handle submit transaction');
        const { account, transactionRequest, store } = this.props;
        const transaction_amt = parseFloat(value);
        if (isNaN(transaction_amt)) {
            store.dispatch(transactionError("Please enter a valid number"));
        }
        else if ((transactionRequest.currentRequest === RequestType.DEBIT) && (value > account.balance)) {
            store.dispatch(transactionError('Not enough funds to complete transaction'));
        }
        else {
            let current = new Date().getFullYear();
            let next_id = `${current}-${++this.counter}`;
            switch(transactionRequest.currentRequest) {
                case RequestType.CREDIT:
                    store.dispatch(creditAccount(transaction_amt, next_id));
                    break;
                    
                case RequestType.DEBIT:
                    store.dispatch(debitAccount(transaction_amt, next_id));
                    break;
            }
        }
        
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.renderOverviewSection() }
                </div>
                <div className="row">
                    {this.renderMenuButtons() }
                </div>
                <div className="row">
                    {this.renderTransactionInput() }
                </div>
                <div className="row">
                    {this.renderTransactionsList() }
                </div>
            </div>
        )
    }
}

export default KustomerBank;