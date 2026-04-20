import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { StoryList } from '@/shared/lib/storybook/ui/StoryList'
import { DatePicker } from './DatePicker'
import { ComponentProps } from 'react'

const meta = {
  title: 'shared/DatePicker',
  component: DatePicker
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

const states: ComponentProps<typeof DatePicker>[] = [{}, { error: 'error' }]

export const Default: Story = {
  render: (args) => (
    <StoryList states={states} baseProps={args} Component={DatePicker} />
  ),
  args: {}
}
