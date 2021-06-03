import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Card from '../components/Card'

CardListPage.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, author: PropTypes.string })
  ),
  goToCreateCard: PropTypes.func.isRequired,
}

export default function CardListPage({ cards, goToCreateCard }) {
  return (
    <Container>
      <CardList>
        {cards.map(({ text, author }, index) => (
          <li key={index}>
            <Card text={text} author={author} />
          </li>
        ))}
      </CardList>
      <AddCard onClick={goToCreateCard}>Add card</AddCard>
    </Container>
  )
}

const Container = styled.section`
  display: grid;
  gap: 20px;
  height: 100vh;
  grid-template-rows: auto 60px;
  overflow-y: scroll;
  justify-items: center;
`

const CardList = styled.ul`
  padding: 0;
  width: 80%;
  list-style-type: none;
  display: grid;
  gap: 20px;
`

const AddCard = styled.button`
  position: fixed;
  bottom: 10px;
  overflow: hidden;
  width: 80%;
  padding: 20px;
`
