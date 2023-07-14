import { StoryObj, Meta } from '@storybook/react'

import { Heading, HeadingProps } from '@produtor-online/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'lorem ipsum dolor sit amet',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      story:
        'Por padrão o heading sempre sera um `h1`, mais podemos alterar isso com a propriedade `as`',
    },
  },
}
