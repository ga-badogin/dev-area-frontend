import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { StoryList } from '@/shared/lib/storybook/ui/StoryList'
import { Calendar } from './Calendar'
import { ComponentProps } from 'react'

const meta = {
  title: 'shared/Calendar',
  component: Calendar
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

const states: ComponentProps<typeof Calendar>[] = [
  {},
  { mode: 'range' },
  { isFutureDateDisabled: true }
]

export const Days: Story = {
  render: (args) => (
    <StoryList states={states} baseProps={args} Component={Calendar} />
  ),
  args: {
    initialView: 'days'
  }
}

export const Months: Story = {
  render: (args) => (
    <StoryList states={states} baseProps={args} Component={Calendar} />
  ),
  args: {
    initialView: 'months'
  }
}

export const Years: Story = {
  render: (args) => (
    <StoryList states={states} baseProps={args} Component={Calendar} />
  ),
  args: {
    initialView: 'years'
  }
}
