import cls from './AuthForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Input } from '@/shared/ui/Input/Input'
import { CodeInput } from '@/shared/ui/CodeInput/CodeInput'
import { Button } from '@/shared/ui/Button/Button'
import { useIsCode } from '../../model/selectors/getIsCode'
import { FieldValues, Path, Resolver, useForm } from 'react-hook-form'
import { FC, HTMLInputTypeAttribute, SVGProps } from 'react'
import { typedMemo } from '@/shared/consts/memo'
import { useLocation } from 'react-router-dom'
import { locationAuthText } from '../../model/consts/authFormWrapper'

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

export const AuthForm = typedMemo(
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
        {!isCode ? (
          inputs.map(({ name, isLoading, ...restArgs }, index) => (
            <Input
              key={index}
              className={cls.input}
              error={errors?.[name]?.message?.toString()}
              isLoading={isLoading && !isSubmitting}
              {...register(name)}
              {...restArgs}
            />
          ))
        ) : (
          <CodeInput
            className={cls.codeInput}
            control={control}
            codeName={codeName}
          />
        )}

        <Button isLoading={isSubmitting} className={cls.btn}>
          {locationAuthText[pathname].btn}
        </Button>
      </form>
    )
  }
)
