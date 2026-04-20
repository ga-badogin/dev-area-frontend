import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    height: '200px',
    width: '50%'
  }
}
