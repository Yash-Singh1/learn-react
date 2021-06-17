import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const mockDeposit = jest.fn();
  const mockWithrawal = jest.fn();
  const props = {
    balance: 20,
    deposit: mockDeposit,
    withdraw: mockWithrawal
  };
  const wallet = shallow(<Wallet {...props} />);

  it('renders properly', () => {
    expect(wallet.instance()).toMatchSnapshot();
  });

  it('displays the balance', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
  });

  it('creates an input to deposit into or withdraw from the balance', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  });

  describe('when the user types into the wallet input', () => {
    const userBalance = '25';

    beforeEach(() => {
      wallet
        .find('.input-wallet')
        .simulate('change', { target: { value: userBalance } });
    });

    it('updates the local wallet balance in `state` and converts it to a number', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe('and the user wants to make a deposit', () => {
      it('dispatches the `deposit()` it recieves from props with the local balance', () => {
        wallet.find('.btn-deposit').simulate('click');
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });

      it("doesn't dispatch the `deposit()` if a non number is recieved from props with local balance", () => {
        wallet
          .find('.input-wallet')
          .simulate('change', { target: { value: 'abc' } });
        wallet.find('.btn-deposit').simulate('click');
        expect(mockDeposit).toHaveBeenCalledTimes(0);
        wallet
          .find('.input-wallet')
          .simulate('change', { target: { value: 'afsfa.f84safa' } });
        wallet.find('.btn-deposit').simulate('click');
        expect(mockDeposit).toHaveBeenCalledTimes(0);
      });
    });

    describe('and the user wants to make a withdrawal', () => {
      beforeEach(() => {
        wallet.find('.btn-withdraw').simulate('click');
      });

      it('dispatches the `withdraw()` it recieves from props with the local balance', () => {
        expect(mockWithrawal).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });

      it("doesn't dispatch the `withdraw()` if a non number is recieved from props with local balance", () => {
        wallet
          .find('.input-wallet')
          .simulate('change', { target: { value: 'abc' } });
        wallet.find('.btn-withdraw').simulate('click');
        expect(mockDeposit).toHaveBeenCalledTimes(0);
        wallet
          .find('.input-wallet')
          .simulate('change', { target: { value: 'afsfa.f84safa' } });
        wallet.find('.btn-withdraw').simulate('click');
        expect(mockDeposit).toHaveBeenCalledTimes(0);
      });
    });
  });
});
