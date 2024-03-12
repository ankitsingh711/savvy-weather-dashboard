import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Dashboard from './index';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Dashboard component', () => {
  test('renders Dashboard component with input fields and button', () => {
    render(<Dashboard />);
    
    expect(screen.getByLabelText(/City Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Get Weather/i)).toBeInTheDocument();
  });

  test('does not navigate when city or country is missing', async () => {
    const navigateMock = jest.fn();
    useNavigate.mockImplementation(() => navigateMock);

    render(<Dashboard />);

    fireEvent.change(screen.getByLabelText(/City Name/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Country Name/i), { target: { value: 'UK' } });

    fireEvent.click(screen.getByText(/Get Weather/i));

    fireEvent.change(screen.getByLabelText(/City Name/i), { target: { value: 'London' } });
    fireEvent.change(screen.getByLabelText(/Country Name/i), { target: { value: '' } });

    fireEvent.click(screen.getByText(/Get Weather/i));

    await waitFor(() => {
      expect(navigateMock).not.toHaveBeenCalled();
    });
  });
});
