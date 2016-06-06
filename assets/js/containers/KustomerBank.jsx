import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import OverviewSection from '../components/OverviewSection';
import TransactionListView from '../components/TransactionListView';
import TransactionInput from '../components/TransactionInput';
import MenuBar from '../components/MenuBar';
import {
    debitAccount,
    creditAccount,
    requestCreditTransaction,
    requestDebitTransaction,
    requestCancelTransaction
} from '../actions/ActionCreators';


class KustomerBank extends Component {
    renderOverviewSection() {
        return (
            <section>
                <OverviewSection currentBalance={this.props.balance} />
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
        const item_list = [];
        return (
            <section id="transactions">
                <TransactionListView items={item_list} />
            </section>
        )
    }

    renderTransactionInput() {
        return (
            <section id="transaction_input">
                <TransactionInput
                    onSubmitClick={this.handleSubmitTransaction.bind(this) }
                    onCancelClick={() => this.props.store.dispatch(requestCancelTransaction()) }
                    show={this.props.transactionRequest.showTransactionInput}
                    text={this.props.transactionRequest.text}
                    />
            </section>
        )
    }

    handleDepositClick() {
        console.log('deposit button clicked');
        this.props.store.dispatch(requestCreditTransaction());
    }

    handleWithdrawalClick() {
        console.log('withdrawal button clicked');
        this.props.store.dispatch(requestDebitTransaction());
    }

    handleSubmitTransaction() {
        console.log('handle submit transaction');
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