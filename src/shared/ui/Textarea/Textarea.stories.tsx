import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { StoryList } from '@/shared/lib/storybook/ui/StoryList'
import { ComponentProps } from 'react'
import { Textarea } from './Textarea'
import { FieldTheme } from '@/shared/types/style'

const meta = {
  title: 'shared/Textarea',
  component: Textarea
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

const state: ComponentProps<typeof Textarea>[] = [
  {},
  { error: { message: 'Error', type: 'required' } }
]

export const Main: Story = {
  render: (args) => (
    <StoryList states={state} baseProps={args} Component={Textarea} />
  ),
  args: { theme: FieldTheme.MAIN }
}

export const Minimal: Story = {
  render: (args) => (
    <StoryList states={state} baseProps={args} Component={Textarea} />
  ),
  args: { theme: FieldTheme.MINIMAL }
}
