import cls from './AuthFormTemplate.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { useIsCode } from '../../model/selectors/getIsCode'
import {
  Controller,
  FieldValues,
  Path,
  Resolver,
  useForm
} from 'react-hook-form'
import { FC, HTMLInputTypeAttribute, SVGProps } from 'react'
import { typedMemo } from '@/shared/consts/memo'
import { useLocation } from 'react-router-dom'
import { authRoutesContent } from '../../model/consts/content'
import { SegmentedInput } from '@/shared/ui/SegmentedInput/SegmentedInput'

interface AuthFormProps<T extends FieldValues> {
  className?: string

  onSubmit: (data: T) => void
  resolver: Resolver<T>
  codeName: Path<T>

  inputs: {
    name: Path<T>
    Icon: FC<SVGProps<SVGSVGElement>>
    placeholder: string
    type?: HTMLInputTypeAttribute
    isLoading?: boolean
  }[]
}

export const AuthFormTemplate = typedMemo(
  <T extends FieldValues>(props: AuthFormProps<T>) => {
    const { className, onSubmit, resolver, inputs, codeName } = props

    const {
      control,
      register,
      handleSubmit,
      formState: { errors, isSubmitting }
    } = useForm<T>({
      resolver,
      mode: 'onChange'
    })
    const isCode = useIsCode()
    const { pathname } = useLocation()

    return (
      <form
        className={classNames(cls.authForm, {}, [className])}
        onSubmit={handleSubmit(onSubmit)}
      >
        {isCode ? (
          inputs.map(({ name, isLoading, ...restArgs }, index) => {
            const { ref, ...restRegister } = register(name)

            return (
              <Input
                key={index}
                className={cls.input}
                error={errors?.[name]?.message?.toString()}
                isLoading={isLoading && !isSubmitting}
                ref={ref}
                {...restRegister}
                {...restArgs}
              />
            )
          })
        ) : (
          <Controller
            name={codeName}
            control={control}
            render={({ field }) => (
              <SegmentedInput
                length={6}
                value={field.value ?? ''}
                onChange={field.onChange}
                className={cls.codeInput}
                error={errors[codeName]?.message?.toString()}
              />
            )}
          />
        )}

        <Button isLoading={isSubmitting} className={cls.btn}>
          {authRoutesContent[pathname].btn}
        </Button>
      </form>
    )
  }
)
