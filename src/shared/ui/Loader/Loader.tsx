import cls from './Loader.module.scss'
import { memo } from 'react'

interface LoaderProps {
  height?: string
}

export const Loader = memo((props: LoaderProps) => {
  const { height = '100%' } = props

  return <div className={cls.loader} style={{ height }} />
})
