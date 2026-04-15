import cls from './SearchFilter.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ChangeEvent, memo, useCallback } from 'react'
import { Input } from '@/shared/ui/Input/ui/Input'
import SearchIcon from '@/shared/assets/icons/SearchIcon.svg'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { useProfileSearchActions } from '../../model/slice/profileSearchSlice'
import { profileSearchSelectConfig } from '../../lib/profileSearchSelectConfig'
import { Select } from '@/shared/ui/Select/Select'
import { useView } from '../../model/selectors/getView'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { profileSearch } from '../../model/services/profileSearch'
import { useSearchParams } from '../../model/selectors/getSearchParams'
import { useIsLoading } from '../../model/selectors/getIsLoading'
import { Block } from '@/shared/ui/Block/Block'

interface SearchFilterProps {
  className?: string
}

export const SearchFilter = memo((props: SearchFilterProps) => {
  const { className } = props

  const { setView, setSearch, setPage } = useProfileSearchActions()
  const dispatch = useAppDispatch()
  const view = useView()
  const isLoading = useIsLoading()
  const { search } = useSearchParams()

  const searchProfiles = useDebounce(() => {
    dispatch(profileSearch({ replace: true }))
  }, 500)

  const onChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setPage(1)
    searchProfiles()
  }, [])

  return (
    <Block className={classNames(cls.searchFilter, {}, [className])}>
      <Input
        value={search}
        onChange={onChangeSearch}
        className={cls.input}
        Icon={SearchIcon}
        isLoading={isLoading}
      />
      <Select
        options={profileSearchSelectConfig}
        selectedValue={view}
        onSelect={(value) => setView(value)}
      />
    </Block>
  )
})
