import cls from './Input.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, InputHTMLAttributes, memo, SVGProps } from 'react'

export enum InputTheme {
  MAIN = 'main',
  ICON = 'icon'
}

type InputProps =
  | (BaseInputProps & {
      theme?: InputTheme.ICON
      Image: FC<SVGProps<SVGSVGElement>>
    })
  | (BaseInputProps & {
      theme?: Exclude<InputTheme, InputTheme.ICON>
      Image?: never
    })

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = memo((props: InputProps) => {
  const {
    className,
    Image,
    type = 'text',
    theme = InputTheme.MAIN,
    ...otherProps
  } = props

  return (
    <div className={cls.inputWrapper}>
      <input
        className={classNames(cls.input, {}, [className, cls[theme]])}
        type={type}
        {...otherProps}
      />
      {Image && <Image className={cls.image} />}
    </div>
  )
})
