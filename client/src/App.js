import Card from './components/Card'
import styled from 'styled-components'

export default function App() {
  return (
    <Container>
      <Card>What does Mongo mean?</Card>
      <Card>What does Mongo mean?</Card>
      <Card>What does Mongo mean?</Card>
    </Container>
  )
}

const Container = styled.main`
  display: grid;
  gap: 20px;
  padding: 20px;
`
