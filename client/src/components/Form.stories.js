import React from 'react'
  import Form from './Form'
  
  export default {
    title: 'Form',
    component: Form,
  }
  
  const Template = args => <Form {...args} />
  
  export const DefaultForm = Template.bind({})
  DefaultForm.args = {}