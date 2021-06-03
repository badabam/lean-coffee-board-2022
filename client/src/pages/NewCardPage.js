import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

NewCardPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
}

export default function NewCardPage({ onSubmit, onGoBack }) {
  const [isActive, setIsActive] = useState(true)
  return (
    <Container>
      <BackButton onClick={onGoBack}>◀️ back</BackButton>
      <Form
        onSubmit={handleSubmit}
        onChange={validateForm}
        aria-label="create a card"
        role="form"
      >
        <label>
          Text:
          <textarea name="text" placeholder="Please insert a text"></textarea>
        </label>

        <label>
          Author:
          <input name="author" type="text" placeholder="Author name"></input>
        </label>
        <button disabled={isActive}>Create card</button>
      </Form>
    </Container>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const text = form.elements.text.value
    const author = form.elements.author.value

    const newCard = { text, author }

    onSubmit(newCard)
    form.reset()
    event.target.elements.text.focus()
    setIsActive(true)
  }

  function validateForm(event) {
    const form = event.target.parentElement.parentElement
    const inputText = form.elements.text.value.trim()
    const inputAuthor = form.elements.author.value.trim()
    setIsActive(inputText && inputAuthor ? false : true)
  }
}

const Container = styled.section`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 6px 10px #0006;
  display: grid;
`
const BackButton = styled.button`
  padding: 5px;
  border-radius: 8px;
  width: 25%;
`

const Form = styled.form`
  padding: 20px;
  border-radius: 8px;
  display: grid;
  gap: 20px;

  label {
    display: grid;
  }
`
