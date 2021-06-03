import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Button from '../helper/Button'

export default function Form({ onClick, onSubmit }) {
  const [isDisabled, setIsDisabled] = useState(true)
  const [inputStates, setInputStates] = useState({ text: '', author: '' })

  useEffect(() => {
    validateForm()
  }, [inputStates])

  return (
    <Container>
      <BackButton onClick={() => onClick('card')}>&lt; back</BackButton>
      <StyledForm onSubmit={handleSubmit} aria-label="form">
        <label>
          Text:
          <textarea
            onChange={handleChange}
            value={inputStates.text}
            name="text"
            cols="30"
            rows="3"
            placeholder="Type your Card text here"
          />
        </label>
        <label>
          Author:
          <input
            onChange={handleChange}
            value={inputStates.author}
            name="author"
            placeholder="Type your name here"
          />
        </label>
        <Button disabled={isDisabled}>Create Card</Button>
      </StyledForm>
    </Container>
  )

  function handleSubmit(event) {
    event.preventDefault()
    if (isDisabled) return
    const form = event.target
    onSubmit(inputStates)
    setInputStates({ text: '', author: '' })

    form.elements.text.focus()
  }

  function handleChange(event) {
    const {name, value} = event.target
    setInputStates({ ...inputStates, [event.target.name]: value })
  }

  function validateForm() {

    setIsDisabled(
      inputStates.text.trim().length === 0 || 
        inputStates.author.trim().length === 0)
  }
}
const Container = styled.section`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 16px var(--color-shadow);
  min-height: 95vh;
  margin: 0 20px;
  margin-top: 16px;

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

  textarea,
  input {
    border-radius: 4px;
    border: 1px solid black;
    padding: 5px 10px;
    font-size: 0.875rem;
    resize: none;

    ::placeholder {
      color: #33333370;
    }
  }
`
const BackButton = styled(Button)`
  background-color: transparent;
  border: none;
  padding: 3px 8px;
`
