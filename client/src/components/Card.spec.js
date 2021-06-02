import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders text and author', () => {
    render(<Card text="This is a text" author="John Doe" />)
    expect(screen.getByText('This is a text', 'John Doe')).toBeInTheDocument()
  })
})
