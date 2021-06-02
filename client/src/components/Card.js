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
      <AuthorText>
        - {author.length > 20 ? author.substr(0, 19) + '...' : author}
      </AuthorText>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 16px #0006;
  display: grid;
`

const AuthorText = styled.span`
  text-align: right;
  width: 100%;
`
