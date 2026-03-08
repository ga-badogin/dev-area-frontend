import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithRefresh } from './baseQuery'

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  tagTypes: ['User'],
  baseQuery: baseQueryWithRefresh,
  endpoints: () => ({})
})
