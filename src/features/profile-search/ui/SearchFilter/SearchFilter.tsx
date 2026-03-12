import cls from './SearchFilter.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ChangeEvent, memo } from 'react'
import { Input } from '@/shared/ui/Input/Input'
import SearchIcon from '@/shared/assets/icons/SearchIcon.svg'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { useProfileSearchActions } from '../../model/slice/profileSearchSlice'
import { profileSearchSelectConfig } from '../../lib/profileSearchSelectConfig'
import { Select } from '@/shared/ui/Select/Select'
import { useView } from '../../model/selectors/getView'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { profileSearch } from '../../model/services/profileSearch'

interface SearchFilterProps {
  className?: string
}

export const SearchFilter = memo((props: SearchFilterProps) => {
  const { className } = props

  const { setView, setSearch, setPage } = useProfileSearchActions()
  const dispatch = useAppDispatch()
  const view = useView()

  const searchProfiles = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setPage(1)
    dispatch(profileSearch({ replace: true }))
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
