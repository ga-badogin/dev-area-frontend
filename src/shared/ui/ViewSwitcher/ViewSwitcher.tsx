import { ReactNode, Suspense } from 'react'

type TViewSwitcher = string | number

export type TViewSwitcherConfig<T extends TViewSwitcher> = Record<
  T,
  { element: ReactNode; fallback?: ReactNode }
>

interface ViewSwitcherProps<T extends TViewSwitcher> {
  selectedView: T
  elements: TViewSwitcherConfig<T>
}

export const ViewSwitcher = <T extends TViewSwitcher>(
  props: ViewSwitcherProps<T>
) => {
  const { elements, selectedView } = props

  const { fallback, element } = elements[selectedView]

  return fallback ? <Suspense fallback={fallback}>{element}</Suspense> : element
}
