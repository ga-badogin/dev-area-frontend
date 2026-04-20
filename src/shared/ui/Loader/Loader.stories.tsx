import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Loader, LoaderTheme } from './Loader'

const meta = {
  title: 'shared/Loader',
  component: Loader
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Accent: Story = {
  args: {
    size: '100px',
    theme: LoaderTheme.ACCENT
  }
}

export const Light: Story = {
  args: {
    size: '100px',
    theme: LoaderTheme.LIGHT
  }
}
