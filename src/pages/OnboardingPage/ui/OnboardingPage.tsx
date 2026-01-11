import cls from './OnboardingPage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from '@/shared/ui/Page/Page'

interface OnboardingPageProps {
  className?: string
}

const OnboardingPage = memo((props: OnboardingPageProps) => {
  const { className } = props

  return (
    <Page className={classNames(cls.onboardingPage, {}, [className])}>
      OnboardingPagesdfsfsdhjfhjsdhjfksjdhfjsdhfjsdhfjhdsjk
    </Page>
  )
})

export default OnboardingPage
