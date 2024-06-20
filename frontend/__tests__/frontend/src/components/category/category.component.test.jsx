// ********RoostGPT********
// Test generated by RoostGPT for test cart-react using AI Type Open AI and AI Model gpt-4-turbo-2024-04-09



// ********RoostGPT********
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CategoryComponent from '../../../../../frontend/src/components/category/category.component.jsx';

describe('CategoryComponent', () => {
  afterEach(cleanup);

  test('should render correctly with default props', () => {
    const { getByTestId } = render(<CategoryComponent />);
    expect(getByTestId('category-component')).toBeInTheDocument();
  });

  test('should display category name passed as a prop', () => {
    const categoryName = 'Electronics';
    const { getByText } = render(<CategoryComponent name={categoryName} />);
    expect(getByText(categoryName)).toBeInTheDocument();
  });

  test('should call onUpdate when the update button is clicked', () => {
    const onUpdate = jest.fn();
    const { getByText } = render(<CategoryComponent onUpdate={onUpdate} />);
    fireEvent.click(getByText('Update'));
    expect(onUpdate).toHaveBeenCalled();
  });

  test('should display error message when there is an error', () => {
    const { getByText } = render(<CategoryComponent hasError={true} errorMessage="Error loading category" />);
    expect(getByText('Error loading category')).toBeInTheDocument();
  });

  test('should handle empty category name', () => {
    const { queryByText } = render(<CategoryComponent name="" />);
    expect(queryByText("")).toBeNull();
  });

  test('should perform cleanup on component unmount', () => {
    const onUnmount = jest.fn();
    const { unmount } = render(<CategoryComponent onUnmount={onUnmount} />);
    unmount();
    expect(onUnmount).toHaveBeenCalled();
  });
});
