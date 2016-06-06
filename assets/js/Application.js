import { createStore } from 'redux';
import BankApp from './reducers/Reducers';
import { creditAccount, debitAccount } from './actions/actionCreators';
import { Provider } from 'react-redux';
import KustomerBank from './containers/KustomerBank';
import React from 'react';
import { render } from 'react-dom';


class Application{
    constructor(){
        this.store = createStore(BankApp);
        console.log(this.store.getState());
        
        let unsubscribe = this.store.subscribe(this.run.bind(this));
        this.run();
        
        this.store.dispatch(creditAccount(50));
        this.store.dispatch(creditAccount(230));
        this.store.dispatch(debitAccount(45));
        this.store.dispatch(debitAccount(800));
        this.store.dispatch(debitAccount(340));
    }
    
    run() {
        let app_container = document.querySelector('#app_container');
        render(<KustomerBank store={this.store} {...this.store.getState()} />, app_container);
        
    }
}


window.Application = Application;
export default Application;

new Application();
