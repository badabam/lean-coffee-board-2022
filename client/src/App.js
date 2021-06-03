import { useState } from 'react'
import styled from 'styled-components/macro'
import CardListPage from './pages/CardListPage'
import NewCardPage from './pages/NewCardPage'
import useLocalStorage from './sort/useLocalStorage'

export default function App() {
  const [cards, setCards] = useLocalStorage('cards', [])
  const [currentPage, setCurrentPage] = useState('newCardPage')

  return (
    <div>
      {currentPage === 'newCardPage' && (
        <NewCardPage onGoBack={handleGoBack} onSubmit={handleNewCard} />
      )}

      {currentPage === 'cardListPage' && (
        <CardListPage cards={cards} goToCreateCard={handleGoToCreateCard} />
      )}
    </div>
  )

  function handleGoBack() {
    setCurrentPage('cardListPage')
  }

  function handleGoToCreateCard() {
    setCurrentPage('newCardPage')
  }

  function handleNewCard(newCard) {
    setCards([newCard, ...cards])
  }
}
