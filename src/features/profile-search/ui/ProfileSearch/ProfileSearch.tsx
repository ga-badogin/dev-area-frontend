import cls from './ProfileSearch.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, RefObject } from 'react'
import { IAbout, ProfileList } from '@/entities/profile'
import { SearchFilter } from '../SearchFilter/SearchFilter'
import { useView } from '../../model/selectors/getView'

interface ProfileSearchProps {
  className?: string
  scrollParent: RefObject<HTMLElement | null>
}

export const ProfileSearch = memo((props: ProfileSearchProps) => {
  const { className, scrollParent } = props

  const view = useView()

  return (
    <div className={classNames(cls.profileSearch, {}, [className])}>
      <SearchFilter />
      <ProfileList
        profiles={Array.from(
          { length: 50 },
          (_, i): IAbout => ({
            firstName: 'Gleb',
            lastName: 'Badogin',
            id: `${i}-lksjdfk`,
            userId: `${i}-aslkklgoisa`
          })
        )}
        virtualized
        scrollParent={scrollParent}
        view={view}
      />
    </div>
  )
})
