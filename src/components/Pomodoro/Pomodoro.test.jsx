import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import matchers from '@testing-library/jest-dom/matchers';
import userEvent from '@testing-library/user-event';
expect.extend(matchers);

import Pomodoro from '.'
import image from '../../../assets/lying_panda.png'

describe('Pomodoro Component', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Pomodoro />
        </MemoryRouter>
      );
    });
  
    afterEach(() => {
      cleanup();
    });

    it("renders a 'Start' button", () => {
        const startButton = screen.getByRole('button', { name: /Start/i });
        expect(startButton).toBeInTheDocument();
      });  

    it("renders a 'Reset' button", () => {
        const resetButton = screen.getByRole('button', { name: /Reset/i });
        expect(resetButton).toBeInTheDocument();
    });
    
    it("displays a countdown when the 'Start' button is clicked", async () => {
        const startButton = screen.getByRole('button', { name: /Start/i });
        userEvent.click(startButton);
        const countdown = await screen.findByTestId('pomodoro-text');
        expect(countdown).toBeInTheDocument();
    });

    it("displays an image of a panda lying down", () => {
        const pandaImage = screen.getByAltText('panda lying down');
        expect(pandaImage).toBeInTheDocument();
        expect(pandaImage).toHaveAttribute('src', image);
      });      
})