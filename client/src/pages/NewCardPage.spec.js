import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewCardPage from './NewCardPage'

describe('NewCardPage', () => {
  it('renders two input fields and two buttons', () => {
    render(<NewCardPage onSubmit={jest.fn()} onGoBack={jest.fn()} />)

    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(2)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })

  it('calls handleSubmit by click', () => {
    const testHandleSubmit = jest.fn()

    render(<NewCardPage onSubmit={testHandleSubmit} onGoBack={jest.fn()} />)

    userEvent.type(screen.getByRole('textbox', { name: 'Text:' }), 'Hallo')
    userEvent.type(screen.getByRole('textbox', { name: 'Author:' }), 'Rob')

    const button = screen.getByRole('button', { name: 'Create card' })
    userEvent.click(button)

    expect(testHandleSubmit).toHaveBeenCalledWith({
      text: 'Hallo',
      author: 'Rob',
    })
  })

  it('calls onGoBack by click', () => {
    const testOnGoBack = jest.fn()

    render(<NewCardPage onSubmit={jest.fn()} onGoBack={testOnGoBack} />)

    const button = screen.getByRole('button', { name: '◀️ back' })
    userEvent.click(button)

    expect(testOnGoBack).toHaveBeenCalled()
  })
})
