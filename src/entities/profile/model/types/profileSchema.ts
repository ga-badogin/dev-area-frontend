export interface IProfileSchema {
  profile?: IProfile
}

export interface IProfile {
  firstName: string
  lastName: string
  title?: string
  bio?: string
  avatarUrl?: string

  experience?: IExperience[]
  education?: IEducation[]
  skill?: ISkill[]
}

export interface IExperience {
  company: string
  position: string
  description: string
  startDate: string
  endDate?: string
}

export interface IEducation {
  institution: string
  speciality: string
  startDate: string
  endDate?: string
}

export interface ISkill {
  name: string
}
