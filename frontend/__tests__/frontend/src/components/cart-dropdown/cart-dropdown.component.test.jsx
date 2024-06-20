// ********RoostGPT********
// Test generated by RoostGPT for test cart-react using AI Type Open AI and AI Model gpt-4-turbo-2024-04-09



// ********RoostGPT********
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CartDropdown from '../../../../../frontend/src/components/cart-dropdown/cart-dropdown.component';

describe('CartDropdown Component', () => {
  afterEach(cleanup);

  test('renders without crashing', () => {
    const { getByTestId } = render(<CartDropdown />);
    expect(getByTestId('cart-dropdown')).not.toBe(null);
  });

  test('displays correct initial empty message when cart is empty', () => {
    const { getByText } = render(<CartDropdown cartItems={[]} />);
    expect(getByText('Your cart is empty')).toBeInTheDocument();
  });

  test('shows items in the cart when provided', () => {
    const mockItems = [{ id: 1, name: 'Product 1', quantity: 3, price: 9.99 }];
    const { getByText } = render(<CartDropdown cartItems={mockItems} />);
    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('Quantity: 3')).toBeInTheDocument();
    expect(getByText('Total: $29.97')).toBeInTheDocument(); // Assuming there's logic to calculate total
  });

  test('calls toggleCartHidden on button click', () => {
    const mockToggleCartHidden = jest.fn();
    const { getByText } = render(<CartDropdown toggleCartHidden={mockToggleCartHidden} />);
    fireEvent.click(getByText('GO TO CHECKOUT'));
    expect(mockToggleCartHidden).toHaveBeenCalledTimes(1);
  });

  test('renders error message on faulty prop types', () => {
    const originalError = console.error;
    console.error = jest.fn();
    
    // Intentionally providing the wrong prop type to test error boundary handling
    render(<CartDropdown toggleCartHidden={'this-should-be-a-function'} />);
    
    expect(console.error).toHaveBeenCalled();
    console.error = originalError;
  });
});
