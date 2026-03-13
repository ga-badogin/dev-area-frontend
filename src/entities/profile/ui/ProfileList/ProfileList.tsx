import cls from './ProfileList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ProfileCard } from '../ProfileCard/ProfileCard'
import { VirtuosoGrid } from 'react-virtuoso'
import { IAbout } from '../../model/types/profileApi'
import { typedMemo } from '@/shared/consts/memo'
import { RefObject, useEffect, useMemo, useState } from 'react'
import { TProfileListView } from '../../model/types/types'
import { ProfileListView } from '../../model/consts/consts'
import { ProfileCardSkeleton } from '../ProfileCard/ProfileCardSkeleton'

interface BaseProps {
  className?: string
  profiles: IAbout[]
  view?: TProfileListView
  isLoading?: boolean
  limit?: number
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
      view = ProfileListView.LINE,
      isLoading,
      limit = 2
    } = props

    const [customScrollParent, setCustomScrollParent] = useState<
      HTMLElement | undefined
    >(undefined)

    useEffect(() => {
      setCustomScrollParent(scrollParent?.current || undefined)
    }, [])

    const renderProfiles = (index: number, profile: IAbout | null) => {
      if (!profile) return <ProfileCardSkeleton />
      return <ProfileCard profile={profile} key={profile.id} />
    }

    const listClassName = classNames(cls.profileList, {}, [
      className,
      cls[view]
    ])

    const displayProfiles = useMemo(() => {
      if (isLoading) {
        return [...profiles, ...Array.from({ length: limit }).map(() => null)]
      }

      return profiles
    }, [isLoading, profiles, limit])

    return virtualized ? (
      <VirtuosoGrid
        data={displayProfiles}
        itemContent={renderProfiles}
        listClassName={listClassName}
        itemClassName={cls.profileListItem}
        customScrollParent={customScrollParent}
      />
    ) : (
      <div className={listClassName}>
        {displayProfiles.map((profile, index) =>
          renderProfiles(index, profile)
        )}
      </div>
    )
  }
)
