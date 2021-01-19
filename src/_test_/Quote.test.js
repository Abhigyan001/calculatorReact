import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../components/Quote';

describe('rendered Quote', () => {
  test('has Title', () => {
    render(<Quote />);
    const element = screen.getByText('Mathematics is not about numbers', { exact: false });
    expect(element).toBeInTheDocument();
  });
});
