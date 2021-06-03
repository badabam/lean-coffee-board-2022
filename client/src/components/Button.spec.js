import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('calls onClick', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Add Card</Button>)
    const button = screen.getByRole('button', { name: 'Add Card' })
    userEvent.click(button)
    expect(handleClick).toBeCalledTimes(1)
  })

  it('contains a text', async () => {
    render(<Button onClick={() => {}}>Click me</Button>)

    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
  })
})
