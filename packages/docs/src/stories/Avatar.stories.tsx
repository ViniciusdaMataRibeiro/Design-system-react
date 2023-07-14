import { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@produtor-online/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://avatars.githubusercontent.com/u/499550?v=4',
    alt: 'Avatar',
  },
  argTypes: {
    src: {
      control: { type: 'text' },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
