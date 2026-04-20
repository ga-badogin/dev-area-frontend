import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Block, BlockTheme } from './Block'
import { ComponentProps } from 'react'
import { StoryList } from '@/shared/lib/storybook/ui/StoryList'

const meta = {
  title: 'shared/Block',
  component: Block
} satisfies Meta<typeof Block>

export default meta
type Story = StoryObj<typeof meta>

const states: DeepPartial<ComponentProps<typeof Block>>[] = [
  { handleCross: () => null },
  { title: 'Title', handleAdd: () => null }
]

export const Clear: Story = {
  render: (args) => (
    <StoryList states={states} baseProps={args} Component={Block} />
  ),
  args: {
    children: 'Content',
    theme: BlockTheme.CLEAR
  }
}

export const Main: Story = {
  render: (args) => (
    <StoryList states={states} baseProps={args} Component={Block} />
  ),
  args: {
    children: 'Content',
    theme: BlockTheme.MAIN
  }
}

export const Fit: Story = {
  render: (args) => (
    <StoryList states={states} baseProps={args} Component={Block} />
  ),
  args: {
    children: 'Content',
    theme: BlockTheme.FIT
  }
}
