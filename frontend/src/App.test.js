import { render, screen } from '@testing-library/react';
import App from './App';

test('renders task manager heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /manchester united task manager/i });
  expect(headingElement).toBeInTheDocument();
});
