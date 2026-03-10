import cls from './Block.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { ValueOf } from '@/shared/types'
import { Title } from '../Title/Title'
import { Sizes } from '@/shared/consts/ui'
import { Button, ButtonTheme } from '../Button/Button'
import CrossIcon from '@/shared/assets/icons/Cross.svg'
import PlusIcon from '@/shared/assets/icons/PlusIcon.svg'

export const BlockTheme = {
  MAIN: 'main',
  CLEAR: 'clear',
  SMALL: 'small'
} as const

interface BlockWrapperProps extends HTMLAttributes<HTMLDivElement> {
  wrapperClassName?: string
  children: ReactNode
  title?: string
  theme?: ValueOf<typeof BlockTheme>
  handleCross?: () => void
  handleAdd?: () => void
}

export const Block = forwardRef<HTMLDivElement, BlockWrapperProps>(
  (props, ref) => {
    const {
      className,
      wrapperClassName,
      children,
      title,
      theme = BlockTheme.MAIN,
      handleCross,
      handleAdd,
      ...otherProps
    } = props

    return (
      <div className={classNames(cls.wrapper, {}, [wrapperClassName])}>
        {title && (
          <div className={cls.panel}>
            <Title size={Sizes.XL} className={cls.title} as="h1">
              {title}
            </Title>
            {handleAdd && (
              <Button
                theme={ButtonTheme.CLEAR}
                className={cls.addBtn}
                onClick={handleAdd}
              >
                <PlusIcon className={cls.plus} />
              </Button>
            )}
          </div>
        )}
        <div
          ref={ref}
          className={classNames(cls.block, {}, [className, cls[theme]])}
          {...otherProps}
        >
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
      </div>
    )
  }
)
