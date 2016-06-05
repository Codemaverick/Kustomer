import React from 'react';

const Transaction = (item) => {
    return (
        <li>`${item.type} ${item.amount} ${item.date.toString()} `</li>  
    );
}

Transaction.propTypes = {
    item: React.propTypes.object  
};

export default Transaction;