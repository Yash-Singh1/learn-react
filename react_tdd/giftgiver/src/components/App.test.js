import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import * as localstorage from '../helpers/localStorage';

describe('App', () => {
  const app = shallow(<App />);
  const localStorageSetItemSpy = jest.spyOn(localstorage, 'setItem');

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the `add-gift` button', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it('adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id: 1, person: '', present: '' }]);
    });

    it('adds a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('creates a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe('and the user wants to remove the gift (helper)', () => {
      beforeEach(() => {
        app.instance().removeGift(1);
      });

      it('removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      });

      it("doesn't render the gift", () => {
        expect(app.find('.gift-list').children().length).toEqual(0);
      });
    });

    describe('and the user wants to remove the gift (UI)', () => {
      beforeEach(() => {
        app.find('Gift').dive().find('Button.btn-remove').simulate('click');
      });

      it('removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      });

      it("doesn't render the gift", () => {
        expect(app.find('.gift-list').children().length).toEqual(0);
      });
    });

    describe('and the user wants to modify the gift', () => {
      const info = { person: 'Uncle', present: 'whatever he wants' };

      beforeEach(() => {
        app.instance().modifyGift(1, info);
      });

      it('modifies the `state`', () => {
        expect(app.state().gifts).toEqual([{ id: 1, ...info }]);
      });

      it('modifies the local storage', () => {
        app.instance().componentDidUpdate();
        expect(localStorageSetItemSpy).toHaveBeenCalledWith(
          'gifts',
          JSON.stringify([{ ...info, id: 1 }])
        );
      });

      it("makes an empty array when the local storage isn't there", () => {
        localStorage.clear();
        new App();
        expect(localStorage.getItem('gifts')).toEqual('[]');
      });

      describe('and the user wants to modify the gift in the UI', () => {
        beforeEach(() => {
          app
            .find('Gift')
            .dive()
            .find('.input-person')
            .simulate('change', { target: { value: 'Uncle2' } });
        });

        it('modifies the gift in state', () => {
          expect(app.state().gifts[0].person).toEqual('Uncle2');
        });
      });
    });

    describe('and the user wants to add another gift', () => {
      beforeEach(() => {
        app.find('.btn-add').simulate('click');
      });

      it('modifies the `state`', () => {
        expect(app.state().gifts).toEqual([
          { id: 1, person: '', present: '' },
          { id: 2, person: '', present: '' }
        ]);
      });

      it('renders the new gift', () => {
        expect(app.find('.gift-list').children().length).toEqual(2);
      });

      describe('and the user wants to modify the second gift', () => {
        const info = { person: 'Uncle', present: 'whatever he wants' };

        beforeEach(() => {
          app.instance().modifyGift(2, info);
        });

        it('modifies the `state`', () => {
          expect(app.state().gifts).toEqual([
            { id: 1, person: '', present: '' },
            { id: 2, ...info }
          ]);
        });
      });
    });
  });
});
