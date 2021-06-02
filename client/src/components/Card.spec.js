import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders its text and author', () => {
    render(<Card text={'What is your favorite color?'} author={'John Doe'} />)
    expect(screen.getByText('What is your favorite color?')).toBeInTheDocument()
    expect(screen.getByText('– John Doe')).toBeInTheDocument()
  })
})
