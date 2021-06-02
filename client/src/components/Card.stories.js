import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

const Template = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Hello world',
  author: 'Mel',
}

export const longName = Template.bind({})
longName.args = {
  text: 'Hello world',
  author: 'Jonas jose maria del rio cuenca',
}
