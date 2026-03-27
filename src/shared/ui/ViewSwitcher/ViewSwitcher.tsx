import { ReactNode, Suspense } from 'react'

export type TViewSwitcherElements<T> = {
  element: ReactNode
  fallback?: ReactNode
  view: T
}[]

interface ViewSwitcherProps<T> {
  selectedView: T
  elements: TViewSwitcherElements<T>
}

export const ViewSwitcher = <T,>(props: ViewSwitcherProps<T>) => {
  const { elements, selectedView } = props

  const foundElement = elements.find(({ view }) => view === selectedView)

  if (!foundElement) return null

  const { fallback, element } = foundElement

  return fallback ? <Suspense fallback={fallback}>{element}</Suspense> : element
}
