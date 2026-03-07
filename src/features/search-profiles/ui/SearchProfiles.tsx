import cls from './SearchProfiles.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ChangeEvent, memo, useEffect, useState } from 'react'
import { IAbout, ProfileCard, useSearchProfile } from '@/entities/profile'
import { Input } from '@/shared/ui/Input/Input'
import SearchIcon from '@/shared/assets/icons/SearchIcon.svg'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { Select } from '@/shared/ui/Select/Select'
import { searchProfileSelectConfig } from '../lib/searchProfileSelectConfig'
import { VirtuosoGrid } from 'react-virtuoso'

interface SearchProfilesProps {
  className?: string
}

export type TListType = 'lines' | 'tiles'

export const SearchProfiles = memo((props: SearchProfilesProps) => {
  const { className } = props

  const [searchValue, setSearchValue] = useState<string>('')
  const [listType, setListType] = useState<TListType>('lines')
  const [scrollParent, setScrollParent] = useState<HTMLElement | null>(null)

  const { data: profiles } = useSearchProfile(searchValue)

  useEffect(() => {
    setScrollParent(document.getElementById('MAIN_PAGE_ID'))
  }, [])

  const searchProfiles = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }, 500)

  return (
    <div className={classNames(cls.searchProfiles, {}, [className])}>
      <div className={cls.toolbar}>
        <Input
          onChange={searchProfiles}
          className={cls.input}
          Icon={SearchIcon}
        />
        <Select
          options={searchProfileSelectConfig}
          selectedValue={listType}
          onSelect={(value) => setListType(value)}
        />
      </div>
      <VirtuosoGrid
        data={Array.from(
          { length: 50 },
          (_, i): IAbout => ({
            firstName: 'Gleb',
            lastName: 'Badogin',
            id: `${i}-lksjdfk`,
            userId: `${i}-aslkklgoisa`
          })
        )}
        itemContent={(_, profile) => <ProfileCard profile={profile} />}
        listClassName={classNames(cls.list, {}, [cls[listType]])}
        customScrollParent={scrollParent ?? undefined}
      />
    </div>
  )
})
