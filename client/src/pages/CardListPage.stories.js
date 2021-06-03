import React from 'react'
import CardListPage from './CardListPage'

export default {
  title: 'Pages/CardListPage',
  component: CardListPage,
}

const Template = args => <CardListPage {...args} />

export const Default = Template.bind({})
Default.args = {
  cards: [
    {
      text: 'Hello world',
      author: 'Rob',
    },
    {
      text: 'Hello everyone',
      author: 'Mel',
    },
    {
      text: 'Hola amigos',
      author: 'Derian',
    },
    {
      text: 'Hello world',
      author: 'Rob',
    },
    {
      text: 'Hello everyone',
      author: 'Mel',
    },
    {
      text: 'Hola amigos',
      author: 'Derian',
    },
  ],
}
