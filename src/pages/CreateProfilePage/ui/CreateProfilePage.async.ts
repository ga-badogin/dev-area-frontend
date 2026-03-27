import { lazy } from 'react'

export const CreateProfilePageAsync = Object.assign(
  lazy(() => import('./CreateProfilePage')),
  { preload: () => import('./CreateProfilePage') }
)
