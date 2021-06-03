import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

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
  background: linear-gradient(180deg, #fafafa, #eaeaea);
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 8px var(--color-shadow);
  margin: 16px 0;
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
