import cls from './AuthPage.module.scss'
import { memo } from 'react'
import { AuthForm } from '@/widgets/auth-form'
import { Page } from '@/shared/ui/Page/Page'
import {
  DynamicModuleLoader,
  TReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { authReducer } from '@/entities/auth'

interface AuthPageProps {
  className?: string
}

const reducers: TReducersList = {
  auth: authReducer
}

const AuthPage = memo((props: AuthPageProps) => {
  const { className } = props

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={cls.authPage}>
        <AuthForm />
      </Page>
    </DynamicModuleLoader>
  )
})

export default AuthPage
