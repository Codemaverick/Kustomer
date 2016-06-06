import React, { PropTypes } from 'react';

const Transaction = (item) => {
    return (
        <li>`${item.type} ${item.amount} ${item.date.toString()} `</li>  
    );
}

Transaction.propTypes = {
    item: PropTypes.object  
};

export default Transaction;