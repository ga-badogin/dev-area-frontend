import cls from './Loader.module.scss'
import { memo } from 'react'

interface LoaderProps {
  size?: string
}

export const Loader = memo((props: LoaderProps) => {
  const { size = '100%' } = props

  return (
    <div className={cls.loader} style={{ height: size }}>
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
