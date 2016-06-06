import React, { Component } from 'react';

class TransactionInput extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmitClick(e) {
        const input = document.querySelector('#transaction_value');
        this.props.onSubmitClick(input.value);
    }
    
    

    render() {
        const { text, error} = this.props;
        let item_class = 'transaction-input';

        return (
            <div className={item_class}>
                <div className="row">
                    <div className="col-md-6">
                        <label>{text}</label>
                        <input type="text" id="transaction_value"  />
                    </div>
                    <div className="col-md-6">
                        <button onClick={this.handleSubmitClick.bind(this)}>
                            Submit
                        </button>
                        <a onClick={this.props.onCancelClick}>
                            Cancel
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 error">{error}</div>
                </div>
            </div>
        );
    }
}

export default TransactionInput;