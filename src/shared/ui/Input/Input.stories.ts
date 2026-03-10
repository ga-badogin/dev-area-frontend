import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Input, InputTheme } from './Input'
import SearchIcon from '@/shared/assets/icons/SearchIcon.svg'

const meta = {
  title: 'shared/Input',
  component: Input
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    theme: InputTheme.MAIN,
    Icon: SearchIcon
  }
}

export const Minimal: Story = {
  args: {
    theme: InputTheme.MINIMAL
  }
}
