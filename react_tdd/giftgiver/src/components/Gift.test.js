import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
  const mockRemove = jest.fn();
  const mockModify = jest.fn();
  const id = 1;
  const props = {
    gift: { id },
    removeGift: mockRemove,
    modifyGift: mockModify,
    person: '',
    present: ''
  };
  const gift = shallow(<Gift {...props} />);

  it('renders properly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('accepts a different person and present prop', () => {
    const differentGift = shallow(<Gift person="John" present="A tree" />);
    differentGift.instance().componentDidMount();
    expect(differentGift.state()).toEqual({
      person: 'John',
      present: 'A tree'
    });
  });

  it('initializes a person and a present in `state`', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  });

  describe('when typing in the person input', () => {
    const person = 'Uncle';

    beforeEach(() => {
      gift
        .find('.input-person')
        .simulate('change', { target: { value: person } });
    });

    afterEach(() => {
      gift.find('.input-person').simulate('change', { target: { value: '' } });
    });

    it('updates the person in `state`', () => {
      expect(gift.state().person).toEqual(person);
    });

    it('calls the modify gift callback', () => {
      expect(mockModify).toHaveBeenCalledWith(id, {
        person: 'Uncle',
        present: ''
      });
    });
  });

  describe('when typing in the present input', () => {
    const present = 'Teddy Bear';

    beforeEach(() => {
      gift
        .find('.input-present')
        .simulate('change', { target: { value: present } });
    });

    it('updates the present in `state`', () => {
      expect(gift.state().present).toEqual(present);
    });

    it('calls the modify gift callback', () => {
      expect(mockModify).toHaveBeenCalledWith(id, {
        person: '',
        present: 'Teddy Bear'
      });
    });
  });

  describe('when clicking the remove gift button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    });

    it('calls the remove gift callback', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
