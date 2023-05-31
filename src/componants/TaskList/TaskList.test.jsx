import React from 'react';
//has vi included
import {describe,it,expect,beforeEach, afterEach,vi} from 'vitest'
import {screen,render,cleanup} from '@testing-library/react'
import userEvent from'@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)
//needs axios for testing
//import axios from 'axios'

import TaskList from '.'

// describe('FetchTest Compnonet', () => {
  
//     it('displays 1 element if the API returns only 1 element', async () => {
//         vi.spyOn(axios,"get").mockResolvedValueOnce({
//             data:[
//                 {
//                     "task":"mock data -the element info for the text element"
//                 }
//             ]

//         })
//         render(<TaskList />)

//         const element = await screen.findByRole('listitem')
//         expect(element.childNodes.length).toBe(1)
//         expect(element.childNodes[0].textContent).toBe("mock data -the element info for the text element")
//     })

// })



describe('TaskList Compnonet', () => {
    beforeEach(()=>{
        render(<TaskList />)
    })

    afterEach(() => {
        cleanup()
    })
    //it could also be test
    it('should display a list appropriate text', () => {
        const element = screen.getByRole('list')
        expect(element).toBeInTheDocument()
    })

    it('should increment the display when the button is clicked', async () => {
        const display = screen.getByRole('number')
        const button = screen.getByRole('button')
        expect(display.textContent).toEqual('0')
        await userEvent.click(button)
        expect(display.textContent).toEqual('1')
    })
})
