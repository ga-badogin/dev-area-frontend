import cls from './DropdownItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, memo, MouseEventHandler, SVGProps } from 'react'
import { Button, ButtonTheme } from '../../Button/Button'
import { Paragraph } from '../../Paragraph/Paragraph'
import { Loader } from '../../Loader/Loader'

export interface IDropdownItem {
  text: string
  Icon: FC<SVGProps<SVGSVGElement>>
  onClick: MouseEventHandler<HTMLButtonElement>
  visibility?: boolean
  isLoading?: boolean
}

export const DropdownItem = memo((props: IDropdownItem) => {
  const { isLoading, visibility, onClick, text, Icon } = props

  return visibility === undefined || visibility ? (
    <Button
      className={cls.dropdownItem}
      theme={ButtonTheme.CLEAR}
      onClick={onClick}
      disabled={isLoading}
    >
      {!isLoading ? <Icon className={cls.icon} /> : <Loader size="20px" />}
      <Paragraph>{text}</Paragraph>
    </Button>
  ) : null
})
