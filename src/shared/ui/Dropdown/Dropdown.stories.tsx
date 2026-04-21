import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Dropdown } from './Dropdown'
import Icon from '@/shared/assets/icons/Logout.svg'

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Dropdown',
    options: [
      { text: 'Exit', Icon: Icon, onClick: () => null },
      { text: 'Exit', Icon: Icon, onClick: () => null, isLoading: true },
      { text: 'Exit', Icon: Icon, onClick: () => null, visibility: false }
    ]
  }
}
