import { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Text } from '@produtor-online/react'

export default {
  title: 'Sufaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: { type: null },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
