import type { Preview } from '@storybook/react-webpack5'
import { StyleDecorator } from '../../src/shared/lib/storybook/decorators/StyleDecorator/StyleDecorator'
import { RouterDecorator } from '../../src/shared/lib/storybook/decorators/RouterDecorator/RouterDecorator'
import { ThemeDecorator } from '../../src/shared/lib/storybook/decorators/ThemeDecorator/ThemeDecorator'
import { AppTheme } from '../../src/entities/theme'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [StyleDecorator, ThemeDecorator(AppTheme.DARK), RouterDecorator]
}

export default preview
