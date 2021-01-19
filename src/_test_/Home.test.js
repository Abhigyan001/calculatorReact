import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

describe('rendered Home', () => {
  test('has Title', () => {
    render(<Home />);
    const element = screen.getByText(/^Welcome to our page!$/i);
    expect(element).toBeInTheDocument();
  });
});
