import cls from './OnboardingPage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from '@/shared/ui/Page/Page'
import { OnboardingForm } from '@/widgets/onboarding-form'
import {
  DynamicModuleLoader,
  TReducersList
} from '@/shared/lib/components/DynamicModuleLoader'
import { profileReducer } from '@/entities/profile'

const reducers: TReducersList = {
  profile: profileReducer
}

interface OnboardingPageProps {
  className?: string
}

const OnboardingPage = memo((props: OnboardingPageProps) => {
  const { className } = props

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        container
        className={classNames(cls.onboardingPage, {}, [className])}
      >
        <OnboardingForm />
      </Page>
    </DynamicModuleLoader>
  )
})

export default OnboardingPage
