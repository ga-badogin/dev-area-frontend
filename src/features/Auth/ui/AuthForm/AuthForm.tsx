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

  codeRegisterName: Path<T>

  inputs: {
    name: Path<T>
    Icon: FC<SVGProps<SVGSVGElement>>
    placeholder: string
    type?: HTMLInputTypeAttribute
    onChange?: (args: any) => void
  }[]
  isLoading: boolean
}

export const AuthForm = typedMemo(
  <T extends FieldValues>(props: AuthFormProps<T>) => {
    const {
      className,
      onSubmit,
      resolver,
      inputs,
      codeRegisterName,
      isLoading
    } = props

    const isCode = useIsCode()

    const { pathname } = useLocation()

    const {
      control,
      register,
      handleSubmit,
      formState: { errors }
    } = useForm({ resolver, mode: 'onChange' })

    return (
      <form
        className={classNames(cls.authForm, {}, [className])}
        onSubmit={handleSubmit(onSubmit)}
      >
        {!isCode ? (
          inputs.map((input, index) => {
            const { onChange: registerOnChange, ...restRegister } = register(
              input.name
            )

            return (
              <Input
                key={index}
                Icon={input.Icon}
                placeholder={input.placeholder}
                className={cls.input}
                type={input.type}
                onChange={(e) => {
                  void registerOnChange(e)
                  input.onChange?.(e)
                }}
                error={errors[input.name]?.message?.toString()}
                {...restRegister}
              />
            )
          })
        ) : (
          <CodeInput
            className={cls.codeInput}
            control={control}
            name={codeRegisterName}
          />
        )}

        <Button isLoading={isLoading} className={cls.btn}>
          {locationAuthText[pathname].btn}
        </Button>
      </form>
    )
  }
)
