import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default function Button({ children, onClick, ...props }) {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  border: 2px solid var(--color-black);
  background-color: var(--color-cta);
  border-radius: 8px;
  padding: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-size: 1rem;

  :hover {
    color: #fff;
    background-color: steelblue;
  }

  :disabled {
    background-color: lightgrey;
    color: inherit;
  }
`
