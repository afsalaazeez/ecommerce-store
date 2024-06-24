// ********RoostGPT********
// Test generated by RoostGPT for test react-approostio-github using AI Type Open AI and AI Model gpt-4-turbo-2024-04-09



// ********RoostGPT********
// Importing necessary utilities and component to test
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import CartIcon from '../../../../../frontend/src/component/cart-icon/cart-icon.component.jsx';
import { ReactComponent as ShoppingIcon } from '../../../../../frontend/src/assets/shopping-bag.svg';

// Mocking redux store and SVGs
jest.mock('react-redux', () => ({
    ...(jest.requireActual('react-redux')), 
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));
jest.mock('../../../../../frontend/src/assets/shopping-bag.svg', () => () => 'ShoppingIcon');

const mockStore = configureMockStore();
const store = mockStore({
    cart: {
        cartItemsCount: 5
    }
});

describe('CartIcon component', () => {
    let wrapper;
    const mockToggleCartHidden = jest.fn();

    beforeEach(() => {
        wrapper = shallow(
            <Provider store={store}>
                <CartIcon toggleCartHidden={mockToggleCartHidden} />
            </Provider>
        );
    });

    test('renders CartIcon component correctly', () => {
       expect(wrapper).toMatchSnapshot();
    });

    test('calls toggleCart-hidden on cart icon click', () => {
        wrapper.find('.cart-icon').simulate('click');
        expect(mockToggleCartHidden).toHaveBeenCalled();
    });

    test('displays correct number of cart items', () => {
        const itemCount = wrapper.find('.item-count').text();
        expect(itemCount).toEqual('5');
    });
});

