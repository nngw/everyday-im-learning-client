import React from 'react'
import {describe, expect, it, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

import WeeklyCalendar from '.';

describe('Weekly Calendar component', () => {

    beforeEach(() => {
        render(<WeeklyCalendar/>);
    }) ;

    afterEach(() => {
        cleanup();
    });

    it('Displays a heading', () => {
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('Displays a heading with the text "Panda Calendar"', () => {
        expect(screen.getByRole('heading')).toHaveTextContent('Panda Calendar');
    });

})
