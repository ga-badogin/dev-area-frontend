import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Select } from './Select'
import { useState } from 'react'

const meta: Meta<typeof Select<number>> = {
  title: 'shared/Select',
  component: Select
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: ({ selectedValue, ...args }) => {
    const [value, setValue] = useState(selectedValue)

    return (
      <Select
        {...args}
        selectedValue={value}
        onSelect={(value) => setValue(value)}
      />
    )
  },
  args: {
    options: [
      { value: 1, content: 'Первый' },
      { value: 2, content: 'Второй' },
      { value: 3, content: 'Третий' }
    ],
    selectedValue: 1
  }
}
