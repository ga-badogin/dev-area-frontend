import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Button, ButtonTheme } from './Button'
import { StoryList } from '@/shared/lib/storybook/ui/StoryList'
import { ComponentProps } from 'react'

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

const states: ComponentProps<typeof Button>[] = [
  {},
  { isLoading: true },
  { disabled: true },
  { error: 'asdasd' }
]

export const Clear: Story = {
  args: {
    children: 'Push',
    theme: ButtonTheme.CLEAR
  }
}

export const Outline: Story = {
  render: (args) => (
    <StoryList baseProps={args} Component={Button} states={states} />
  ),
  args: {
    children: 'Push',
    theme: ButtonTheme.OUTLINE
  }
}

export const Main: Story = {
  render: (args) => (
    <StoryList baseProps={args} Component={Button} states={states} />
  ),
  args: {
    children: 'Push',
    theme: ButtonTheme.MAIN
  }
}
