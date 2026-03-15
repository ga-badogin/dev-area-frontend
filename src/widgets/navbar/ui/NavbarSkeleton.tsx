import cls from './Navbar.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Block } from '@/shared/ui/Block/Block'
import { Logo } from '@/shared/ui/Logo/Logo'
import { Loader } from '@/shared/ui/Loader/Loader'

interface NavbarSkeletonProps {
  className?: string
}

export const NavbarSkeleton = memo((props: NavbarSkeletonProps) => {
  const { className } = props

  return (
    <Block className={classNames(cls.navbar, {}, [className])}>
      <Logo className={cls.logo} />
      <Loader size="40px" />
    </Block>
  )
})
