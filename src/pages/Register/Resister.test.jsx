import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Register from '.';

describe('Clicker componant', () => {
  beforeEach(() => {
    render(<Register />)
  })

  afterEach(() => {
    cleanup()
  })

  it("should display heading with text", () => {
    const element = screen.getByRole('heading')
    expect(element).toBeInTheDocument()
  })

  it("should have a submit button"), () => {
    const button = getByRole('button');
    expect(button).toBeInTheDocument()
  }
})
