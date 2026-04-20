import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { ComponentProps } from 'react'
import { Sizes } from '@/shared/consts/ui'
import { StoryList } from '@/shared/lib/storybook/ui/StoryList'
import { Title } from './Title'

const meta = {
  title: 'shared/Title',
  component: Title
} satisfies Meta<typeof Title>

export default meta
type Story = DeepPartial<StoryObj<typeof meta>>

const states: ComponentProps<typeof Title>[] = [
  { as: 'h6', size: Sizes.XS },
  { as: 'h5', size: Sizes.S },
  { as: 'h4', size: Sizes.M },
  { as: 'h3', size: Sizes.L },
  { as: 'h2', size: Sizes.XL },
  { as: 'h1', size: Sizes.XXL }
]

export const Default: Story = {
  render: (args) => (
    <StoryList states={states} baseProps={args} Component={Title} />
  ),
  args: {
    children: 'Title'
  }
}
