import { render, screen, fireEvent } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
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
    fireEvent.submit(form)
    expect(handleSubmit).toHaveBeenCalled()
  })
})
