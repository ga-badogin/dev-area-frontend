import cls from './Block.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { ValueOf } from '@/shared/types'
import { Title } from '../Title/Title'
import { Sizes } from '@/shared/consts/ui'
import { Button, ButtonTheme } from '../Button/Button'
import CrossIcon from '@/shared/assets/icons/Cross.svg'

export const BlockTheme = {
  MAIN: 'main',
  CLEAR: 'clear',
  SMALL: 'small'
} as const

interface BlockWrapperProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  title?: string
  theme?: ValueOf<typeof BlockTheme>
  handleCross?: () => void
  padding?: string
}

export const Block = forwardRef<HTMLDivElement, BlockWrapperProps>(
  (props, ref) => {
    const {
      className,
      children,
      title,
      theme = BlockTheme.MAIN,
      handleCross,
      padding = '20px',
      ...otherProps
    } = props

    return (
      <div
        ref={ref}
        className={classNames(cls.block, {}, [className, cls[theme]])}
        style={{ padding }}
        {...otherProps}
      >
        <Title size={Sizes.XL} className={cls.title} as="h1">
          {title}
        </Title>
        {handleCross && (
          <Button
            theme={ButtonTheme.CLEAR}
            className={cls.deleteBtn}
            onClick={handleCross}
          >
            <CrossIcon className={cls.cross} />
          </Button>
        )}
        {children}
      </div>
    )
  }
)
