import cls from './SearchFilter.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ChangeEvent, memo, useState } from 'react'
import { Input } from '@/shared/ui/Input/Input'
import SearchIcon from '@/shared/assets/icons/SearchIcon.svg'
import { useSearchProfile } from '@/entities/profile'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { useProfileSearchActions } from '../../model/slice/profileSearchSlice'
import { profileSearchSelectConfig } from '../../lib/profileSearchSelectConfig'
import { Select } from '@/shared/ui/Select/Select'
import { useView } from '../../model/selectors/getView'

interface SearchFilterProps {
  className?: string
}

export const SearchFilter = memo((props: SearchFilterProps) => {
  const { className } = props

  const [searchValue, setSearchValue] = useState<string>('')

  const { data: profiles } = useSearchProfile(searchValue)
  const { setView } = useProfileSearchActions()
  const view = useView()

  const searchProfiles = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }, 500)

  return (
    <div className={classNames(cls.searchFilter, {}, [className])}>
      <Input
        onChange={searchProfiles}
        className={cls.input}
        Icon={SearchIcon}
      />
      <Select
        options={profileSearchSelectConfig}
        selectedValue={view}
        onSelect={(value) => setView(value)}
      />
    </div>
  )
})
