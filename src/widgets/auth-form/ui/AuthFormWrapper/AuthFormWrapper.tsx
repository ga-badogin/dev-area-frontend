import cls from './AuthFormWrapper.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Block } from '@/shared/ui/Block/Block'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { Title } from '@/shared/ui/Title/Title'
import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { authRoutesContent } from '@/entities/auth'

interface AuthFormWrapperProps {
  className?: string
  children: ReactNode
}

export const AuthFormWrapper = (props: AuthFormWrapperProps) => {
  const { className, children } = props

  const { pathname } = useLocation()

  const { title, paragraph } = authRoutesContent[pathname]

  return (
    <Block className={cls.authFormWrapper} wrapperClassName={className}>
      <Title as="h1">{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
      {children}
    </Block>
  )
}
