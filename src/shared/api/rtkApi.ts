import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithRefresh } from './baseQueryWithReauth'

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  tagTypes: ['Profile'],
  baseQuery: baseQueryWithRefresh,
  endpoints: () => ({})
})
