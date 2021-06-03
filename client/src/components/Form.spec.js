import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form'

describe('Form', () => {
  it('renders a form', () => {
    render(<Form />)
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()
  })

  it('submits the form', () => {
    const handleSubmit = jest.fn()
    render(<Form onSubmit={handleSubmit} />)
    const form = screen.getByRole('form')
    const text = screen.getByLabelText('Text:')
    const author = screen.getByLabelText('Author:')
    userEvent.type(text, 'ratatam')
    userEvent.type(author, 'morten')
    fireEvent.submit(form)
    expect(handleSubmit).toHaveBeenCalled()
  })

  it('does not submit when one of the input fields is empty', () => {
    const handleSubmit = jest.fn()
    render(<Form onSubmit={handleSubmit} />)
    const button = screen.getByRole('button', { name: 'Create Card' })
    userEvent.click(button)
    expect(handleSubmit.mock.calls.length).toBe(0)
  })
})
