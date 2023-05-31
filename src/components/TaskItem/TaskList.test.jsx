import React from 'react';
//has vi included
import {describe,it,expect,beforeEach, afterEach,vi} from 'vitest'
import {screen,render,cleanup} from '@testing-library/react'
import userEvent from'@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import TestUtils from 'react-dom/test-utils'
import expect from 'expect'
//needs axios for testing
//import axios from 'axios'

import TaskItem from '.'

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
        render(<TaskItem />)
    })

    afterEach(() => {
        cleanup()
    })
    //it could also be test
    it('can be tested independently', () => {
        // Obtain the reference to the component before React DnD wrapping
        const OriginalItem = TaskItem.DecoratedComponent
      
        // Stub the React DnD connector functions with an identity function
        const identity = (el) => el
      
        // Render with one set of props and test
        let root = TestUtils.renderIntoDocument(
          <OriginalItem name="test" connectDragSource={identity} />
        )
        let div = TestUtils.findRenderedDOMComponentWithTag(root, 'div')
        expect(div.props.style.opacity).toEqual(1)
      
        // Render with another set of props and test
        root = TestUtils.renderIntoDocument(
          <OriginalItem name="test" connectDragSource={identity} isDragging />
        )
        div = TestUtils.findRenderedDOMComponentWithTag(root, 'div')
        expect(div.props.style.opacity).toEqual(0.4)
      })

})
