import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Button, ButtonTheme } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
    children: 'Push',
    theme: ButtonTheme.CLEAR
  }
}

export const Outline: Story = {
  args: {
    children: 'Push',
    theme: ButtonTheme.OUTLINE
  }
}

export const Main: Story = {
  args: {
    children: 'Push',
    theme: ButtonTheme.MAIN
  }
}
