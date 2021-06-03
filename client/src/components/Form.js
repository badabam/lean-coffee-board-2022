import styled from 'styled-components/macro'
import Button from './Button'

export default function Form() {
  return (
    <Container>
      <button>&lt; back</button>
      <StyledForm>
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
}
const Container = styled.section`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 16px var(--color-shadow);

  button {
    margin-bottom: 16px;
  }
`

const StyledForm = styled.form`
  display: grid;
  gap: 8px;

  label {
    display: grid;
  }
`
