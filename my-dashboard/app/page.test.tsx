import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './page';

test('renders Page heading', () => {
  render(<Dashboard />);
  const headingElement = screen.getByText(/Dashboard/i);
  expect(headingElement).toBeInTheDocument();
});
