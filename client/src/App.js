import Card from './components/Card'
import styled from 'styled-components'

export default function App() {
  return (
    <Container>
      <Card text={'What does Mongo mean?'} author={'John Doe'} />
      <Card
        text={'What does Mongo mean?'}
        author={'John DoeLongNameThatCantGetDisplayed'}
      />
      <Card text={'What does Mongo mean?'} author={'John Doe'} />
    </Container>
  )
}

const Container = styled.main`
  display: grid;
  gap: 20px;
  padding: 20px;
`
