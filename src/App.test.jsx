import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import App from './App';

describe('main app test', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the NavBar component', () => {
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('renders the Home page by default', () => {
    const homePage = screen.getByText(/Home/i);
    expect(homePage).toBeInTheDocument();
  });
});
