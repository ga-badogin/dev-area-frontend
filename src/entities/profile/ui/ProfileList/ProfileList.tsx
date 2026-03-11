import cls from './ProfileList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ProfileCard } from '../ProfileCard/ProfileCard'
import { VirtuosoGrid } from 'react-virtuoso'
import { IAbout } from '../../model/types/profileApi'
import { typedMemo } from '@/shared/consts/memo'
import { RefObject, useEffect, useState } from 'react'
import { TProfileListView } from '../../model/types/types'
import { ProfileListView } from '../../model/consts/consts'

export type TListType = 'lines' | 'tiles'

interface BaseProps {
  className?: string
  profiles: IAbout[]
  view?: TProfileListView
}

type ProfileListProps<T extends boolean = false> = BaseProps & {
  virtualized?: T
} & (T extends true
    ? { scrollParent: RefObject<HTMLElement | null> }
    : { scrollParent?: never })

export const ProfileList = typedMemo(
  <T extends boolean = false>(props: ProfileListProps<T>) => {
    const {
      className,
      virtualized = false,
      profiles,
      scrollParent,
      view = ProfileListView.LINE
    } = props

    const [customScrollParent, setCustomScrollParent] = useState<
      HTMLElement | undefined
    >(undefined)

    useEffect(() => {
      setCustomScrollParent(scrollParent?.current || undefined)
    }, [])

    const renderProfiles = (index: number, profile: IAbout) => (
      <ProfileCard profile={profile} key={profile.id} />
    )

    const listClassName = classNames(cls.profileList, {}, [
      className,
      cls[view]
    ])

    return virtualized ? (
      <VirtuosoGrid
        data={profiles}
        itemContent={renderProfiles}
        listClassName={listClassName}
        customScrollParent={customScrollParent}
      />
    ) : (
      <div className={listClassName}>
        {profiles.map((profile, index) => renderProfiles(index, profile))}
      </div>
    )
  }
)
