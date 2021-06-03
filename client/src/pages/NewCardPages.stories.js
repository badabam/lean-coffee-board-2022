import React from 'react'
import NewCardPage from './NewCardPage'

export default {
  title: 'Pages/NewCardPage',
  component: NewCardPage,
}

export const DefaultForm = args => <NewCardPage {...args} />
