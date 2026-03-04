import cls from './AuthForm.module.scss'
import { memo } from 'react'
import { RenderRouter } from '@/app/providers/router/exclude'
import { authRouteConfig } from '../../lib/authRouteConfig'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AuthFormWrapper } from '../AuthFormWrapper/AuthFormWrapper'

interface AuthFormProps {
  className?: string
}

export const AuthForm = memo((props: AuthFormProps) => {
  const { className } = props

  return (
    <AuthFormWrapper className={classNames(cls.authForm, {}, [className])}>
      <RenderRouter routeConfig={authRouteConfig} isChildRouter />
    </AuthFormWrapper>
  )
})
