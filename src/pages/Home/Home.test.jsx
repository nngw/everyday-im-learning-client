import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Home from '.';

describe('Home Page', () => {
    beforeEach(()=>{
        render(<Home />)
    })

    afterEach(() => {
        cleanup()
    })
    //it could also be test
    it('should display home', () => {
        const element = screen.getByRole('heading')
        expect(element).toBeInTheDocument()
    })

})
