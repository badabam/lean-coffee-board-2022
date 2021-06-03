import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import Card from './components/Card'
import Form from './components/Form'
import Button from './helper/Button'
import useLocalStorage from './helper/useLocalStorage'

export default function App() {
  const [activePage, setActivePage] = useState('card')
  const [localStorage, setLocalStorage] = useLocalStorage('cards', [])
  const [cards, setCards] = useState(localStorage)

  useEffect(() => {
    setLocalStorage(cards)
  }, [cards])

  return (
    <>
      {activePage === 'card' && (
        <Wrapper>
          <div>
            {cards.map(({ text, author, id }) => (
              <Card key={id} text={text} author={author} />
            ))}
          </div>
          <Button onClick={() => handleActivePage('create')}>Add Card</Button>{' '}
        </Wrapper>
      )}
      {activePage === 'create' && (
        <Form onClick={handleActivePage} onSubmit={handleSubmit} />
      )}
    </>
  )

  function handleActivePage(page) {
    setActivePage(page)
  }
  function handleSubmit(card) {
    const cardWithId = { ...card, id: uuidv4() }
    setCards(cards => [cardWithId, ...cards])
  }
}

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 48px;
  padding: 16px;

  div {
    overflow-y: auto;
    padding: 16px;
    padding-top: 0;
    background-color: transparent;
  }
`
