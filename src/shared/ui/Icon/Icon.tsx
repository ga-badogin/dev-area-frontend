import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

interface IconProps {
  className?: string
  src?: string
}

export const Icon = memo((props: IconProps) => {
  const { className, src } = props

  return <img src={src} alt="Icon" />
})
