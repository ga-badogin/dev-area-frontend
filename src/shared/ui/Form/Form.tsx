import cls from './Form.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { FormHTMLAttributes } from 'react'
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'

interface FormProps<T extends FieldValues>
  extends FormHTMLAttributes<HTMLFormElement> {
  methods?: UseFormReturn<T, any, T>
}

export const Form = <T extends FieldValues>(props: FormProps<T>) => {
  const { className, methods, ...otherProps } = props

  const form = (
    <form className={classNames(cls.form, {}, [className])} {...otherProps} />
  )

  return methods ? <FormProvider {...methods}>{form}</FormProvider> : form
}
