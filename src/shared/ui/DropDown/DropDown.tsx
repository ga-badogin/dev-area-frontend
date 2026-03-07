import cls from './DropDown.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, memo, ReactNode, SVGProps } from 'react'
import { Button, ButtonTheme } from '../Button/Button'
import { Paragraph } from '../Paragraph/Paragraph'
import { Block } from '../Block/Block'
import { useHover } from '@/shared/lib/hooks/useHover/useHover'

interface DropDownProps {
  className?: string
  children: ReactNode
  options: {
    text: string
    Icon?: FC<SVGProps<SVGSVGElement>>
    onClick: () => void
  }[]
}

export const DropDown = memo((props: DropDownProps) => {
  const { className, children, options } = props

  const [isActive, handlers] = useHover()
  const { onMouseLeave } = handlers

  return (
    <div className={classNames(cls.dropDown, {}, [className])} {...handlers}>
      {children}
      <Block className={classNames(cls.items, { [cls.isActive]: isActive })}>
        {options.map(({ text, Icon, onClick }, index) => (
          <Button
            key={index}
            className={cls.item}
            theme={ButtonTheme.CLEAR}
            onClick={(e) => {
              onClick()
              onMouseLeave(e)
            }}
          >
            {Icon && <Icon className={cls.icon} />}
            <Paragraph>{text}</Paragraph>
          </Button>
        ))}
      </Block>
    </div>
  )
})
