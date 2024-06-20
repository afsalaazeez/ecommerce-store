// ********RoostGPT********
// Test generated by RoostGPT for test cart-react using AI Type Open AI and AI Model gpt-4-turbo-2024-04-09



// ********RoostGPT********
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { FormInput } from '../../../../../frontend/src/components/form-input/form-input.component';
import '@testing-library/jest-dom';

// Test suite for FormInput component
describe('FormInput Component Tests', () => {
    afterEach(cleanup);

    test('renders FormInput component without crashing', () => {
        const { getByTestId } = render(<FormInput />);
        expect(getByTestId('form-input')).toBeInTheDocument();
    });

    test('shows label when label prop is provided', () => {
        const label = 'Email';
        const { getByText } = render(<FormInput label={label} />);
        expect(getByText(label)).toBeInTheDocument();
    });

    test('does not display a label when none is provided', () => {
        const { queryByText } = render(<FormInput />);
        expect(queryByText(/\w/)).toBeNull();
    });

    test('calls handleChange on typing in the input', () => {
        const onChangeMock = jest.fn();
        const { getByTestId } = render(<FormInput handleChange={onChangeMock} />);
        const input = getByTestId('form-input');
        fireEvent.change(input, { target: { value: 'test value' } });
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
});

