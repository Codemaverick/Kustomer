import React, { Component } from 'react';
import Transaction from './Transaction';

const TransactionListView = (props) => {
    return (
        <ul className="transaction-list">
            {props.items.map((data_item) => {
               return <Transaction {...data_item} key={data_item.id} />
            })}
        </ul>
    )
}

TransactionListView.defaultProps = {
    items: React.PropTypes.array
};

export default TransactionListView;