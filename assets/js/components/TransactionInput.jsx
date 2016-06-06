import React, { Component } from 'react';

class TransactionInput extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmitClick(e) {
        const val = e.target.value.trim();
        this.props.onSubmitClick(val);
    }

    render() {
        const { text, show} = this.props;
        let item_class = 'row transaction-input';
        item_class += show ? '' : ' hide';

        return (
            <div className={item_class}>
                <div className="col-md-6">
                    <label>{text}</label>
                    <input type="text" value='' />
                </div>
                <div className="col-md-6">
                    <button onClick={this.handleSubmitClick}>
                        Submit
                    </button>
                    <a onClick={this.props.onCancelClick}>
                       Cancel
                    </a>
                </div>
            </div>
        );
    }
}

export default TransactionInput;