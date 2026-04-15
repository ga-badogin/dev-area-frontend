import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { StoryList } from '@/shared/lib/storybook/ui/StoryList'
import { SegmentedInput } from './SegmentedInput'
import { FieldTheme } from '@/shared/types/style'
import { ComponentProps } from 'react'

const meta = {
  title: 'shared/SegmentedInput',
  component: SegmentedInput
} satisfies Meta<typeof SegmentedInput>

export default meta
type Story = StoryObj<typeof meta>

const state: ComponentProps<typeof SegmentedInput>[] = [{}, { error: 'error' }]

export const Main: Story = {
  render: (args) => (
    <StoryList states={state} baseProps={args} Component={SegmentedInput} />
  ),
  args: { length: 6, theme: FieldTheme.MAIN }
}

export const Minimal: Story = {
  render: (args) => (
    <StoryList states={state} baseProps={args} Component={SegmentedInput} />
  ),
  args: { length: 6, theme: FieldTheme.MINIMAL }
}
