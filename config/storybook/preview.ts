import type { Preview } from '@storybook/react-webpack5'
import { StyleDecorator } from '../../src/shared/lib/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/lib/storybook/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/lib/storybook/RouterDecorator/RouterDecorator'
import { Theme } from '../../src/widgets/ThemeSwitcher/model/consts/consts'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator]
}

export default preview
