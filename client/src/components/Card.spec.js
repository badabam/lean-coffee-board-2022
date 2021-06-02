import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders its text and author', () => {
    render(<Card text={'What is your favorite color?'} author={'John Doe'} />)
    expect(screen.getByText('What is your favorite color?')).toBeInTheDocument()
    expect(screen.getByText('– John Doe')).toBeInTheDocument()
  })

  // it('Shorten the author name with "…" if it is too long', () => {
  //   const authorName =
  //     'John ThisNameIsWayTooLongToDisplayIfTheScreenIsDesignedForMobile'
  //   render(<Card text={'What is your favorite color?'} author={authorName} />)
  //   Object.assign(window, {
  //     innerWidth: 100,
  //   })
  //   const authorWidth = screen.getByText(`– ${authorName}`).clientWidth
  //   console.log(authorWidth)
  //   const auth = document.querySelector('[data="test"]').clientWidth
  //   console.log(auth)
  //   // expect(window.innerWidth > authorWidth).toBeTruthy()
  // })
})
