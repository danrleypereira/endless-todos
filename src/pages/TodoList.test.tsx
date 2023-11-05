/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';
import useLocalStorage from '~/utils/hooks/LocalStorage';

// Mock the useLocalStorage hook
jest.mock('~/utils/hooks/LocalStorage', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('TodoList', () => {
  beforeEach(() => {
    (useLocalStorage as jest.Mock).mockReturnValue([
      [], // initial value
      jest.fn(), // setTasks mock
    ]);
  });

  test('renders without crashing', () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText(' ')).toBeInTheDocument();
  });

  test('can add tasks', async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(' ');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    await waitFor(() => {
      expect(screen.getByText('New Task')).toBeInTheDocument();
    });
  });

  // Add more tests as needed to cover the functionality of your component
});
