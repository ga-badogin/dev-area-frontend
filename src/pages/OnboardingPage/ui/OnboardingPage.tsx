import cls from './OnboardingPage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

interface OnboardingPageProps {
  className?: string
}

const OnboardingPage = memo((props: OnboardingPageProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.onboardingPage, {}, [className])}>
      OnboardingPage
    </div>
  )
})

export default OnboardingPage
