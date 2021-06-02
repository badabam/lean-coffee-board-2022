import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
}

export default function Card({ text, author }) {
  return (
    <Wrapper>
      <p>{text}</p>
      <span>{author}</span>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 16px #0006;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: start;

  span {
    justify-self: end;
  }
`
