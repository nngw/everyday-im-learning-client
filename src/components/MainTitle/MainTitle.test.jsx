import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import MainTitle from '.';


describe('TaskList Compnonet', () => {
    beforeEach(()=>{
        render(<MainTitle />)
    })

    afterEach(() => {
        cleanup()
    })
    //it could also be test
    it('should display main title', () => {
        const element = screen.getByRole('heading')
        expect(element).toBeInTheDocument()
    })

})
