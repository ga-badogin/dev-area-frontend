import cls from './SearchProfiles.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ChangeEvent, memo, useState } from 'react'
import { ProfileCard, useGetProfiles } from '@/entities/profile'
import { Input } from '@/shared/ui/Input/Input'
import SerachIcon from '@/shared/assets/icons/SearchIcon.svg'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'

interface SearchProfilesProps {
  className?: string
}

export const SearchProfiles = memo((props: SearchProfilesProps) => {
  const { className } = props

  const [searchValue, setSearchValue] = useState<string>('')

  const { data: profiles } = useGetProfiles(searchValue)

  const searchProfiles = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }, 500)

  return (
    <div className={classNames(cls.searchProfiles, {}, [className])}>
      <Input className={cls.input} Icon={SerachIcon} />
      <div className={cls.list}>
        {profiles?.map((profile) => (
          <ProfileCard profile={profile} key={profile.id} />
        ))}
      </div>
    </div>
  )
})
