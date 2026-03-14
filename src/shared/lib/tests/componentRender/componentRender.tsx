import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { IStateSchema, StoreProvider } from '@/app/providers/store/exclude'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<IStateSchema>
}

export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {}
) {
  const { route = '/', initialState } = options

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
    </StoreProvider>
  )
}
