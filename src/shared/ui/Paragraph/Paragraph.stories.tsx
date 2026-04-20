import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { ComponentProps } from 'react'
import { Paragraph } from './Paragraph'
import { FontTheme, Sizes } from '@/shared/consts/ui'
import { StoryList } from '@/shared/lib/storybook/ui/StoryList'

const meta = {
  title: 'shared/Paragraph',
  component: Paragraph
} satisfies Meta<typeof Paragraph>

export default meta
type Story = StoryObj<typeof meta>

const states: ComponentProps<typeof Paragraph>[] = [
  { size: Sizes.XS },
  { size: Sizes.S },
  { size: Sizes.M },
  { size: Sizes.L },
  { size: Sizes.XL },
  { size: Sizes.XXL }
]

export const Main: Story = {
  render: (args) => (
    <StoryList states={states} baseProps={args} Component={Paragraph} />
  ),
  args: {
    children: 'Paragraph',
    theme: FontTheme.MAIN
  }
}

export const Secondary: Story = {
  render: (args) => (
    <StoryList states={states} baseProps={args} Component={Paragraph} />
  ),
  args: {
    children: 'Paragraph',
    theme: FontTheme.SECONDARY
  }
}
