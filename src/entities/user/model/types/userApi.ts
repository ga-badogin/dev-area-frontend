export interface IGetMeResponse {
  id: string
  username: string
  profile: {
    avatarUrl: string | null
    firstName: string
    lastName: string
  } | null
}
