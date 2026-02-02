export interface IProfile extends IAbout {
  experience: IExperience[]
  education: IEducation[]
  skill: ISkill[]
}

export interface IAbout {
  id: string
  userId: string
  firstName: string
  lastName: string
  title?: string
  bio?: string
  avatarUrl?: string
}

export interface IExperience extends IPeriod {
  id: string
  profileId: string
  company: string
  position: string
  description: string
}

export interface IEducation extends IPeriod {
  id: string
  profileId: string
  institution: string
  speciality: string
}

export interface ISkill {
  id: string
  profileId: string
  name: string
}

export interface IPeriod {
  startDate: string | null
  endDate: string | null
}
