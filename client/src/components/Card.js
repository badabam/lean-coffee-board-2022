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
      <AuthorText>- {author}</AuthorText>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 6px 10px #0006;
  display: grid;
`

const AuthorText = styled.div`
  width: 100%;
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
