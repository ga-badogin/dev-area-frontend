import { rtkApi } from '@/shared/api/rtkApi'
import { IAbout } from '@/entities/profile'
import { IProfileSearchQueryParams } from '../model/types/profileSearchSchema'

const profileSearchApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    searchProfile: build.query<IAbout[], IProfileSearchQueryParams>({
      query: (params) => ({
        url: '/profile/search',
        method: 'GET',
        params
      })
    })
  })
})

export const {
  searchProfile: { initiate: searchProfileInitiate }
} = profileSearchApi.endpoints
