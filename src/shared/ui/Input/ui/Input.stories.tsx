import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Input } from './Input'
import { StoryList } from '@/shared/lib/storybook/ui/StoryList'
import { ComponentProps } from 'react'
import SearchIcon from '@/shared/assets/icons/SearchIcon.svg'
import { Sizes } from '@/shared/consts/ui'
import { FieldTheme } from '@/shared/types/style'

const meta = {
  title: 'shared/Input',
  component: Input
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

const states: ComponentProps<typeof Input>[] = [
  { Icon: SearchIcon, isLoading: true },
  { type: 'password' },
  { isLoading: true },
  { error: 'error' },
  { isError: true },
  { isDynamic: true, placeholder: 'Skill' }
]

export const Main: Story = {
  render: (args) => (
    <StoryList states={states} baseProps={args} Component={Input} />
  ),
  args: {
    theme: FieldTheme.MAIN,
    fontSize: Sizes.M
  }
}

export const Minimal: Story = {
  render: (args) => (
    <StoryList states={states} baseProps={args} Component={Input} />
  ),
  args: {
    theme: FieldTheme.MINIMAL,
    fontSize: Sizes.M
  }
}
