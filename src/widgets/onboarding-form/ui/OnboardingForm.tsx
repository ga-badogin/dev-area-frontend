import cls from './OnboardingForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { profileFormResolver } from '../../profile-form/lib/profileFormResolver'
import { IProfileForm } from '@/entities/profile'
import { RenderRouter } from '@/app/providers/router/exclude'
import { onboardingRouteConfig } from '../lib/onboardingRouteConfig'
import { ActionBar } from '@/shared/ui/ActionBar/ActionBar'
import { Select } from '@/shared/ui/Select/Select'
import { onboardingSelectConfig } from '../lib/selectConfig'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui/Button/Button'

interface OnboardingFormProps {
  className?: string
}

export const OnboardingForm = memo((props: OnboardingFormProps) => {
  const { className } = props

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const methods = useForm<IProfileForm>({
    mode: 'onSubmit',
    resolver: profileFormResolver
  })

  const {} = methods

  return (
    <FormProvider {...methods}>
      <form className={classNames(cls.onboardingForm, {}, [className])}>
        <RenderRouter routeConfig={onboardingRouteConfig} />
        <ActionBar>
          <Select
            className={cls.select}
            selectedValue={pathname}
            onSelect={(value) => navigate(value)}
            options={onboardingSelectConfig}
          />
          <Button>Сохранить</Button>
        </ActionBar>
      </form>
    </FormProvider>
  )
})
