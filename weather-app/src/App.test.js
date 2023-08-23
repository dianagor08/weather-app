import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders the App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/My React Weather Application/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders the Graph component', async () => {
  render(<App />);

  waitFor(() => {
    const graphElement = screen.getByText(/Hourly Temperature data/i);
    expect(graphElement).toBeInTheDocument();
  }).then();
});