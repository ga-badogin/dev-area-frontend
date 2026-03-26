import cls from './AuthPage.module.scss'
import { memo } from 'react'
import { Page } from '@/shared/ui/Page/Page'
import {
  DynamicModuleLoader,
  TReducersList
} from '@/shared/lib/components/DynamicModuleLoader'
import { authReducer } from '@/entities/auth'
import { RenderRouter } from '@/app/providers/router/exclude'
import { authRouteConfig } from '../lib/authRouteConfig'

interface AuthPageProps {
  className?: string
}

const reducers: TReducersList = {
  auth: authReducer
}

export const AuthPage = memo((props: AuthPageProps) => {
  const { className } = props

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={cls.authPage}>
        <RenderRouter routeConfig={authRouteConfig} isChildRouter />
      </Page>
    </DynamicModuleLoader>
  )
})
