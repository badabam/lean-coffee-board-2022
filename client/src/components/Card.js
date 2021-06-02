import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  children: PropTypes.node,
}

export default function Card({ text, author }) {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Author>– {author}</Author>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 16px var(--color-shadow);
`
const Text = styled.p`
  margin: 0;
  margin-bottom: 8px;
`
const Author = styled.span`
  max-width: 60%;
  font-size: 0.9rem;
  align-self: flex-end;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip ellipsis;
  text-overflow: '…';
`
