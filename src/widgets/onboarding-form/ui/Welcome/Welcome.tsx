import cls from './Welcome.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Title } from '@/shared/ui/Title/Title'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { Button } from '@/shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { getOnboardingRoute } from '@/shared/lib/router/getRoute'

interface WelcomeProps {
  className?: string
}

export const Welcome = memo((props: WelcomeProps) => {
  const { className } = props

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(getOnboardingRoute(['about']))
  }

  return (
    <div className={classNames(cls.welcome, {}, [className])}>
      <Title className={cls.title} as="h1">
        Добро пожаловать в DevArea!
      </Title>
      <Paragraph className={cls.paragraph}>
        Рады видеть тебя здесь. Давай создадим твой профиль — это займёт всего
        пару минут и поможет нам настроить приложение под тебя.
      </Paragraph>
      <Button onClick={handleClick} className={cls.btn}>
        Начнем!
      </Button>
    </div>
  )
})
