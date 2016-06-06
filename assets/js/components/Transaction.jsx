import React, { PropTypes } from 'react';

const Transaction = ({type, amount, date}) => {
    const details = `${type} $${amount} ${date}`;
    return (
        <li>{details}</li>  
    );
}

Transaction.propTypes = {
    item: PropTypes.object  
};

export default Transaction;