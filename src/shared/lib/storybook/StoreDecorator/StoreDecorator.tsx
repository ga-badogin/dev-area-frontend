import { Decorator } from '@storybook/react-webpack5'
import { TReducersList } from '../../components/DynamicModuleLoader/DynamicModuleLoader'
import { IStateSchema, StoreProvider } from '@/app/providers/store/exclude'

const defaultAsyncReducers: TReducersList = {}

export const StoreDecorator =
  (state: DeepPartial<IStateSchema>, asyncReducers: TReducersList): Decorator =>
  (Story) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{
        ...defaultAsyncReducers,
        ...asyncReducers
      }}
    >
      <Story />
    </StoreProvider>
  )
