import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  IProfile,
  IProfileForm,
  updateAvatarInitiate,
  updateProfileInitiate
} from '@/entities/profile'
import { IThunkConfig } from '@/app/providers/store/exclude'

export const updateProfile = createAsyncThunk<
  IProfile,
  IProfileForm,
  IThunkConfig<string>
>('profile/update', async (profileForm, thunkAPI) => {
  const { extra, rejectWithValue, dispatch } = thunkAPI

  const { avatarUrl, ...profile } = profileForm

  try {
    if (avatarUrl instanceof File) {
      const avatarRes = await dispatch(updateAvatarInitiate(avatarUrl)).unwrap()

      if (!avatarRes) {
        throw new Error()
      }
    }
    const profileRes = await dispatch(updateProfileInitiate(profile)).unwrap()

    if (!profileRes) {
      throw new Error()
    }

    return profileRes
  } catch (e) {
    console.log(e)
    return rejectWithValue('')
  }
})
