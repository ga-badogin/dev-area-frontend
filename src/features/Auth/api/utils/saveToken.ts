import { IAuthResponse } from '../../model/types/authApi'

export const saveToken = async (
  queryFulfilled: Promise<{ data: IAuthResponse }>
) => {
  const { data } = await queryFulfilled

  if (data.accessToken) {
    localStorage.setItem(__ACCESS_TOKEN_KEY__, data.accessToken)
  }
}
