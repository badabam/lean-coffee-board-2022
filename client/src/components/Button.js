import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

const StyledButton = styled.button`
  border: 2px solid var(--color-black);
  background-color: var(--color-cta);
  border-radius: 8px;
  padding: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    color: #fff;
    background-color: steelblue;
  }
`
