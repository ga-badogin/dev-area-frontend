import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createProfileInitiate,
  IProfileForm,
  updateAvatarInitiate
} from '@/entities/profile'
import { IThunkConfig } from '@/app/providers/store/exclude'
import { getNotificationThunks } from '@/entities/notification'
import { rtkApi } from '@/shared/api/rtkApi'

export const createProfile = createAsyncThunk<
  any,
  IProfileForm,
  IThunkConfig<string>
>('profile/create', async (profileForm, thunkAPI) => {
  const { extra, rejectWithValue, dispatch } = thunkAPI
  const { avatarUrl, ...profile } = profileForm

  const { addNotification } = getNotificationThunks(dispatch)

  try {
    const profileRes = await dispatch(createProfileInitiate(profile)).unwrap()

    if (!profileRes) {
      throw new Error()
    }

    if (avatarUrl instanceof File) {
      const avatarRes = await dispatch(updateAvatarInitiate(avatarUrl)).unwrap()

      if (!avatarRes) {
        throw new Error()
      }
    }

    dispatch(rtkApi.util.invalidateTags(['User']))
    addNotification({ title: 'Успех', paragraph: 'Профиль создан' })

    return profileRes
  } catch (e) {
    console.log(e)
    return rejectWithValue('')
  }
})
