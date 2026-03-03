import cls from './AuthPage.module.scss'
import { memo } from 'react'
import { AuthForm } from '@/widgets/auth-form'
import { Page } from '@/shared/ui/Page/Page'

interface AuthPageProps {
  className?: string
}

const AuthPage = memo((props: AuthPageProps) => {
  const { className } = props

  return (
    <Page className={cls.authPage}>
      <AuthForm />
    </Page>
  )
})

export default AuthPage
