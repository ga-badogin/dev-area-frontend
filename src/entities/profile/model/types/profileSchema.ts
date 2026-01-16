export interface IProfileSchema {
  profile?: IProfile
  isEdit: boolean
}

export interface IProfile {
  id: string
  firstName: string
  lastName: string
  title?: string
  bio?: string
  avatarUrl?: string

  experience: IExperience[]
  education: IEducation[]
  skill: ISkill[]
}

export interface IExperience {
  id: string
  company: string
  position: string
  description: string
  startDate: string
  endDate?: string
}

export interface IEducation {
  id: string
  institution: string
  speciality: string
  startDate: string
  endDate?: string
}

export interface ISkill {
  id: string
  name: string
}
