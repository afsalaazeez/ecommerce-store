// ********RoostGPT********
// Test generated by RoostGPT for test cart-react using AI Type Open AI and AI Model gpt-4-turbo-2024-04-09



// ********RoostGPT********
// Import dependencies
import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CartIcon from '../../../../../../frontend/src/components/cart-icon/cart-icon.component';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

// Mock Redux selectors and dispatch functions
jest.mock('../../../../../../frontend/src/redux/cart/cart.selectors', () => ({
  selectCartItemsCount: jest.fn(() => 5)
}));

const store = mockStore({ cart: { cartItems: [] }});

describe('CartIcon Component', () => {
  let wrapper;
  const mockToggleCartHidden = jest.fn();

  beforeEach(() => {
    const mockProps = {
      toggleCartHidden: mockToggleCartHidden,
      itemCount: 5
    };

    wrapper = mount(
      <Provider store={store}>
        <CartIcon {...mockProps} />
      </Provider>
    );
  });

  test('should render CartIcon component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('should call toggleCartHidden when icon is clicked', () => {
    wrapper.find('CartIcon').simulate('click');
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  test('should display an itemCount equal to the itemCount prop', () => {
    expect(wrapper.find('.item-count').text()).toBe('5');
  });
});

