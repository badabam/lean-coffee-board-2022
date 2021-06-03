import { render, screen } from '@testing-library/react'
  import Form from './Form'
  
  describe('Form', () => {
    it('has af Carcasonne as text', () => {
      const { container } = render(<Form />)
  
      expect(container.firstChild).toHaveTextContent('Form')
    })
  })
  