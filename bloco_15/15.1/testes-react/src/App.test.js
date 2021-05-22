import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// testa o App
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Veja o manual.../i);
  expect(linkElement).toBeInTheDocument();
});
