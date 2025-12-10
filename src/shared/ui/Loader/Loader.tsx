import cls from './Loader.module.scss'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'

export enum LoaderTheme {
  ACCENT = 'accent',
  LIGHT = 'light'
}

interface LoaderProps {
  size?: string
  className?: string
  theme?: LoaderTheme
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
