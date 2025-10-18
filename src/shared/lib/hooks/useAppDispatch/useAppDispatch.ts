import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/providers/store/exclude'

export const useAppDispatch = () => useDispatch<AppDispatch>()
