import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { useHasProfile } from '@/entities/profile'

const initialState:  = {

}

const profileSlice = createSlice({
	name: '',
	initialState,
	reducers: {
	
	},
})

export const { actions: Actions } = profileSlice
export const { reducer: Reducer } = profileSlice
