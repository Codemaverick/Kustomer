import expect from 'expect';
import * as types from '../../js/constants/ActionTypes';
import * as actions from '../../js/actions/ActionCreators';


describe('Account actions', () => {
    it('debitAccount should create a CREDIT action', () => {
       const expected = {
           type: types.TransactionTypes.CREDIT,
           amount: 50,
           id: 101
       };
       expect(actions.creditAccount(50, 101)).toEqual(expected);
    }); 
});
