import cls from './AuthFormWrapper.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { authRoutesContent } from '@/entities/auth'
import { Title } from '@/shared/ui/Title/Title'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'

interface AuthFormWrapperProps {
  className?: string
  children: ReactNode
}

export const AuthFormWrapper = (props: AuthFormWrapperProps) => {
  const { className, children } = props

  const { pathname } = useLocation()

  const { title, paragraph } = authRoutesContent[pathname]

  return (
    <div className={classNames(cls.authFormWrapper, {}, [className])}>
      <Title as="h1">{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
      {children}
    </div>
  )
}
