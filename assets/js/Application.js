import { createStore } from 'redux';
import BankApp from './reducers/Reducers';
import { creditAccount, debitAccount } from './actions/actionCreators';


class Application{
    constructor(){
        const store = createStore(BankApp);
        console.log(store.getState());
        
        let unsubscribe = store.subscribe(() => {
            console.log(store.getState()); 
        });
        
        store.dispatch(creditAccount(50));
        store.dispatch(creditAccount(230));
        store.dispatch(debitAccount(45));
        store.dispatch(debitAccount(800));
        store.dispatch(debitAccount(340));
    }
    
    initialize() {
        
        
    }
}


window.Application = Application;
export default Application;

new Application();