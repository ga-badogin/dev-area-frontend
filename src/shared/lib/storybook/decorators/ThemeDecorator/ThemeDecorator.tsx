import { Decorator } from '@storybook/react-webpack5'
import { TAppTheme } from '../../../../../entities/theme/model/types/themeSchema'

export const ThemeDecorator =
  (theme: TAppTheme): Decorator =>
  (Story) => (
    <div
      className={`app ${theme}`}
      style={{ padding: '10px', overflow: 'auto' }}
    >
      <Story />
    </div>
  )
