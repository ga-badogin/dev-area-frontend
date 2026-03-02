import cls from './OnboardingFormWrapper.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { onboardingRoutesContent } from '../../model/consts/content'
import { Title } from '@/shared/ui/Title/Title'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'

interface OnboardingFormWrapperProps {
  className?: string
  children: ReactNode
}

export const OnboardingFormWrapper = (props: OnboardingFormWrapperProps) => {
  const { className, children } = props

  const { pathname } = useLocation()

  const content = onboardingRoutesContent[pathname]

  return (
    <>
      {content && (
        <>
          <Title className={cls.title} as="h1">
            {content.title}
          </Title>
          <Paragraph className={cls.paragraph}>{content.paragraph}</Paragraph>
        </>
      )}
      {children}
    </>
  )
}
