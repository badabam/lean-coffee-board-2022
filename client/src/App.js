import Card from './components/Card'
import styled from 'styled-components'
import Button from './helper/Button'
import { useState, useEffect } from 'react'
import Form from './components/Form'
import useLocalStorage from './helper/useLocalStorage'
import { v4 as uuidv4 } from 'uuid'

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
    const modifiedCard = { ...card, id: uuidv4() }
    setCards(cards => [modifiedCard, ...cards])
  }
}

const Container = styled.main`
  display: grid;
  gap: 20px;
`

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 48px;
  padding: 16px;

  div {
    overflow-y: auto;
    padding: 16px;
  }
`
