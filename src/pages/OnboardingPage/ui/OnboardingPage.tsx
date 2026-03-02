import cls from './OnboardingPage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from '@/shared/ui/Page/Page'
import { OnboardingForm } from '@/widgets/onboarding-form'
import {
  DynamicModuleLoader,
  TReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from '@/entities/profile'
import { OnboardingFormWrapper } from '../../../widgets/onboarding-form/ui/OnboardingFormWrapper/OnboardingFormWrapper'

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
      <Page className={classNames(cls.onboardingPage, {}, [className])}>
        <OnboardingFormWrapper>
          <OnboardingForm />
        </OnboardingFormWrapper>
      </Page>
    </DynamicModuleLoader>
  )
})

export default OnboardingPage
