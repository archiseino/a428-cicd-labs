import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders app heading', () => {
  render(<App />);
  const heading = screen.getByText(/welcome to react/i);
  expect(heading).toBeInTheDocument();
});
