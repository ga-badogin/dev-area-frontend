import cls from './Dropdown.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, ReactNode, useRef, useState } from 'react'
import { Block } from '../Block/Block'
import { DropdownItem, IDropdownItem } from './DropdownItem/DropdownItem'
import { useClickOutside } from '@/shared/lib/hooks/useClickOutside/useClickOutside'

export type TDropdownItems = IDropdownItem[]

interface DropdownProps {
  className?: string
  children: ReactNode
  options: TDropdownItems
}

export const Dropdown = memo((props: DropdownProps) => {
  const { className, children, options } = props

  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const [isActive, setIsActive] = useState<boolean>(false)

  useClickOutside(dropdownRef, () => setIsActive(false))

  return (
    <div
      ref={dropdownRef}
      onClick={() => setIsActive(true)}
      className={classNames(cls.dropDown, {}, [className])}
    >
      {children}
      <Block
        id={cls.items}
        className={classNames('', { [cls.isActive]: isActive })}
      >
        {options.map(({ onClick, isLoading, ...other }, index) => (
          <DropdownItem
            onClick={(e) => {
              e.stopPropagation()
              onClick(e)
              if (isLoading === undefined) setIsActive(false)
            }}
            isLoading={isLoading}
            {...other}
            key={index}
          />
        ))}
      </Block>
    </div>
  )
})
