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
        
        let yr = new Date().getFullYear();
        let counter = 0;
        
        let testCredits = [50, 230];
        let testDebits = [45, 800, 340];
        
        testCredits.forEach((amt)=> {
            let id =  `${yr}-${++counter}`;
            this.store.dispatch(creditAccount(amt, id));
            console.log(this.store.getState());
        });
        
        testDebits.forEach((amt) => {
             let id =  `${yr}-${++counter}`;
             this.store.dispatch(debitAccount(amt, id));
             console.log(this.store.getState());
        });
       
    }
    
    run() {
        let app_container = document.querySelector('#app_container');
        render(<KustomerBank store={this.store} {...this.store.getState()} />, app_container);
        
    }
}


window.Application = Application;
export default Application;

new Application();
