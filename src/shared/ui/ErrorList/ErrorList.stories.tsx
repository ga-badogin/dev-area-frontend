import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { ErrorList } from './ErrorList'

const meta = {
  title: 'shared/ErrorList',
  component: ErrorList
} satisfies Meta<typeof ErrorList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    error: {
      message: 'Error',
      type: 'required',
      types: { minLength: 'Min length', required: 'Required' }
    }
  }
}
