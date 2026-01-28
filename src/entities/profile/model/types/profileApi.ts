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

export interface IExperience extends IPeriod {
  id: string
  company: string
  position: string
  description: string
}

export interface IEducation extends IPeriod {
  id: string
  institution: string
  speciality: string
}

export interface ISkill {
  id: string
  name: string
}

interface IPeriod {
  period: {
    firstDate: string | null
    secondDate: string | null
  }
}

export interface IProfileForm
  extends Omit<IProfile, 'id' | 'experience' | 'education' | 'skill'> {
  experience: Omit<IExperience, 'id'>[]
  education: Omit<IEducation, 'id'>[]
  skill: Omit<ISkill, 'id'>[]
}
