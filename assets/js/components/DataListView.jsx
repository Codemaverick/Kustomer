import React, { Component } from 'react';
import Transaction from './Transaction';

const DataListView = (items) => {
    return (
        <ul>
            {items.map((data_item) => {
               return <Transaction item={data_item} />
            })}
        </ul>
    )
}

DataListView.defaultProps = {
    items: React.propTypes.array
};

export default DataListView;