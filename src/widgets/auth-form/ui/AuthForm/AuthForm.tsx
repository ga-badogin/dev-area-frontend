import { memo } from 'react'
import {
  DynamicModuleLoader,
  TReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { authReducer } from '@/entities/auth'
import { AuthFormWrapper } from '../AuthFormWrapper/AuthFormWrapper'
import { RenderRouter } from '@/shared/lib/router/RenderRouter'
import { authRouteConfig } from '../../lib/authRouteConfig'

const reducers: TReducersList = {
  auth: authReducer
}

interface AuthFormProps {
  className?: string
}

export const AuthForm = memo((props: AuthFormProps) => {
  const { className } = props

  return (
    <DynamicModuleLoader reducers={reducers}>
      <AuthFormWrapper>
        <RenderRouter routeConfig={authRouteConfig} />
      </AuthFormWrapper>
    </DynamicModuleLoader>
  )
})
