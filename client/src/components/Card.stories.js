import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

const Template = args => <Card {...args} />

export const DefaultCard = Template.bind({})
DefaultCard.args = {
  text: 'Hello world',
  author: 'John Doe',
}

export const LongAuthorCard = Template.bind({})
LongAuthorCard.args = {
  text: 'Hallo world',
  author: 'John Doe and his brother, mother, father and friends',
}
