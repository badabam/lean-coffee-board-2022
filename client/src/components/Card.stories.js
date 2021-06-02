import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

const Template = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Hello world',
  author: 'John Doe',
}

export const longAuthor = Template.bind({})
longAuthor.args = {
  text: 'Hello world',
  author: 'Neville Longbottom',
}
