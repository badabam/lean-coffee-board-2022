import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  children: PropTypes.node,
}

export default function Card({ children }) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.section`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 16px #0006;
`
