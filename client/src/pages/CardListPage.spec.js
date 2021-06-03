import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CardListPage from './CardListPage'

describe('CardListPage', () => {
  it('renders a list of cards', () => {
    render(
      <CardListPage
        goToCreateCard={jest.fn()}
        cards={[
          {
            key: 0,
            text: 'Hola amigos',
            author: 'Till',
          },
        ]}
      />
    )
    expect(screen.getByRole('list')).toBeInTheDocument
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(1)
    expect(listItems[0]).toHaveTextContent('Hola amigos')
    expect(listItems[0]).toHaveTextContent('Till')
  })
})
