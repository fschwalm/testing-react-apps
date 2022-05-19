// Avoid implementation details
// http://localhost:3000/counter

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  render(<Counter />)

  const message = screen.getByText(/current count/i)
  const incrementButton = screen.getByRole('button', {
    name: /increment/i,
  })
  const decrementButton = screen.getByRole('button', {
    name: /decrement/i,
  })

  expect(message).toHaveTextContent('Current count: 0')
  fireEvent.click(incrementButton)
  expect(message).toHaveTextContent('Current count: 1')
  fireEvent.click(decrementButton)
  expect(message).toHaveTextContent('Current count: 0')
})
