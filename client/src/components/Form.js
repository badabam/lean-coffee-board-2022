import styled from 'styled-components/macro'
import Button from './Button'

export default function Form({ onClick, onSubmit }) {
  return (
    <Container>
      <button onClick={() => onClick('card')}>&lt; back</button>
      <StyledForm onSubmit={handleSubmit} aria-label="form">
        <label>
          Text:
          <textarea name="text" cols="30" rows="3" />
        </label>
        <label>
          Author:
          <input name="author" />
        </label>
        <Button>Create Card</Button>
      </StyledForm>
    </Container>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const text = form.elements.text.value
    const author = form.elements.author.value
    const card = { text, author }
    onSubmit(card)
    form.reset()
    form.elements.text.focus()
  }
}
const Container = styled.section`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 16px var(--color-shadow);

  button:first-child {
    margin-bottom: 16px;
  }
  button:last-child {
    margin-top: 16px;
  }
`

const StyledForm = styled.form`
  display: grid;
  gap: 8px;

  label {
    display: grid;
  }
`
