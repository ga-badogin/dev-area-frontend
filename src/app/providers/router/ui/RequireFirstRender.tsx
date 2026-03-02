import { ReactNode, useRef } from 'react'
import { Navigate } from 'react-router-dom'

interface RequireFirstRenderProps {
  children: ReactNode
  firstRenderRoute?: string
}

export const RequireFirstRender = (props: RequireFirstRenderProps) => {
  const { children, firstRenderRoute } = props

  const isFirstRender = useRef(true)

  if (isFirstRender.current && firstRenderRoute) {
    console.log('FIRST RENDER')
    isFirstRender.current = false
    return <Navigate to={firstRenderRoute} replace />
  }

  return children
}
