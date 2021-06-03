import Card from './components/Card'
import styled from 'styled-components'
import Button from './components/Button'
import { useState } from 'react'
import Form from './components/Form'

export default function App() {
  const [activePage, setActivePage] = useState('card')
  const [cards, setCards] = useState([])

  return (
    <Container>
      {activePage === 'card' && (
        <>
          {cards.map(({ text, author }) => (
            <Card text={text} author={author} />
          ))}
          <Button onClick={() => handleActivePage('create')}>Add Card</Button>{' '}
        </>
      )}
      {activePage === 'create' && (
        <Form onClick={handleActivePage} onSubmit={handleSubmit} />
      )}
    </Container>
  )

  function handleActivePage(page) {
    setActivePage(page)
  }
  function handleSubmit(card) {
    setCards([card, ...cards])
  }
}

const Container = styled.main`
  display: grid;
  gap: 20px;
  padding: 20px;
`
