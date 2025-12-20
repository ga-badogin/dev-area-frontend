import cls from './Loader.module.scss'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ValueOf } from '@/shared/types'

export const LoaderTheme = {
  ACCENT: 'accent',
  LIGHT: 'light'
} as const

interface LoaderProps {
  size?: string
  className?: string
  theme?: ValueOf<typeof LoaderTheme>
}

export const Loader = memo((props: LoaderProps) => {
  const { size = '100%', className, theme = LoaderTheme.LIGHT } = props

  return (
    <div
      className={classNames(cls.loader, {}, [className, cls[theme]])}
      style={{ height: size }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
})
