// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import faker from 'faker';
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

const buildLoginForm = () => ({
  username: faker.internet.userName(),
  password: faker.internet.password(),
})

test('submitting the form calls onSubmit with username and password', async () => {
  const handleSubmit = jest.fn()

  render(<Login onSubmit={handleSubmit} />)

  const usernameField = screen.getByLabelText(/username/i)
  const passwordField = screen.getByLabelText(/password/i)
  const submitButton = screen.getByRole('button', {
    name: /submit/i,
  })

  const {username, password} = buildLoginForm()

  await userEvent.type(usernameField, username)
  await userEvent.type(passwordField, password)
  await userEvent.click(submitButton)

  expect(handleSubmit).toHaveBeenCalledWith({password, username})
  expect(handleSubmit).toBeCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
