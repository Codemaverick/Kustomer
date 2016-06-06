import React from 'react';

const OverviewSection = (props) => {
    let balance_amount = `$${props.currentBalance}`;
    
    return (
        <div className="row">
            <div className="col-md-8">
                Current Balance: {balance_amount}
            </div> 
            <div className="col-md-4">
                Date: {Date.now().toString()}
            </div>
        </div>
    )
};

export default OverviewSection;

