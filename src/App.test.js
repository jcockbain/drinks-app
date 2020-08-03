import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders search helper text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Search for an event by its title, or the name of its venue/i);
  expect(linkElement).toBeInTheDocument();
});
