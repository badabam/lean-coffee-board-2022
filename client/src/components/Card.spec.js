import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders text and author', () => {
    render(<Card text="Hello world" author="Mel" />)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
    expect(screen.getByText('Mel', { exact: false })).toBeInTheDocument()
  })
})
