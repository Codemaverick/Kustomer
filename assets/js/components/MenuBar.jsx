import React from 'react';

const MenuBar = ({onDepositClick, onWithdrawalClick}) => {
    return (
        <nav>
            <div className="col-md-6">
                <button onClick={onDepositClick}>
                Make a Deposit
                </button>
            </div>
            <div className="col-md-6">
                <button onClick={onWithdrawalClick}>
                Make a Withdrawal
                </button>
            </div>
        </nav>
    )
}

export default MenuBar;