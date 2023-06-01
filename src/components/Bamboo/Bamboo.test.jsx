import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Bamboo from '.';

describe('Bamboo Compnonet', () => {
    beforeEach(()=>{
        render(<Bamboo />)
    })

    afterEach(() => {
        cleanup()
    })
    //it could also be test
    it('should display img of bamboo', () => {
        const element = screen.getByRole('img')
        expect(element).toBeInTheDocument()
    })
})
