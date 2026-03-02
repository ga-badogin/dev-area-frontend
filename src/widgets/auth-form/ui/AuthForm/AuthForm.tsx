import cls from './AuthForm.module.scss'
import { memo } from 'react'
import {
  DynamicModuleLoader,
  TReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { authReducer } from '@/entities/auth'
import { RenderRouter } from '@/app/providers/router/exclude'
import { authRouteConfig } from '../../lib/authRouteConfig'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AuthFormWrapper } from '../AuthFormWrapper/AuthFormWrapper'

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
      <AuthFormWrapper className={classNames(cls.authForm, {}, [className])}>
        <RenderRouter routeConfig={authRouteConfig} isChildRouter />
      </AuthFormWrapper>
    </DynamicModuleLoader>
  )
})
