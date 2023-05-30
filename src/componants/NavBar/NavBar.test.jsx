import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import NavBar from '.';

describe('Header', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      );
    });
  
    afterEach(() => {
      cleanup();
    });
  
    it('renders the Home link', () => {
      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toBeInTheDocument();
    });
  
    it('renders the Profile link', () => {
      const profileLink = screen.getByRole('link', { name: /user/i });
      expect(profileLink).toBeInTheDocument();
    });

    it('renders the Focus link', () => {
      const focusLink = screen.getByRole('link', { name: /focus/i });
      expect(focusLink).toBeInTheDocument();
    });
  
    it('renders the Login link', () => {
      const loginLink = screen.getByRole('link', { name: /login/i });
      expect(loginLink).toBeInTheDocument();
    });

    it('renders the Register link', () => {
        const registerLink = screen.getByRole('link', { name: /register/i });
        expect(registerLink).toBeInTheDocument();
    });
 
});

describe('Footer', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      );
    });
    
    afterEach(() => {
        cleanup();
    });

    it('renders a message', () => {
        const textName = screen.getByText(/Click/i)
        expect(textName).toBeInTheDocument();
    });

    it('renders and takes user to the Panda link', () => {
        const pandaLink = screen.getByRole('link', { name: /here/i });
        expect(pandaLink).toBeInTheDocument();
        expect(pandaLink.getAttribute("href")).toBe("https://wwf.panda.org/discover/knowledge_hub/endangered_species/giant_panda/whatyoucando/");
    });

})

  