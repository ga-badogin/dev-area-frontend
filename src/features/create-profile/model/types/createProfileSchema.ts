export interface ICreateProfileSchema {
  isLoading: boolean
  view: TView
}

export type TView = 'welcome' | 'about' | 'experience' | 'education' | 'skill'
