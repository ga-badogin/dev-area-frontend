import { IPeriod } from './profileApi'

export interface IProfileForm {
  firstName: string
  lastName: string
  title?: string
  bio?: string
  avatarUrl?: File | string

  experience?: IExperienceForm[]
  education?: IEducationForm[]
  skill?: ISkillForm[]
}

export interface IExperienceForm extends IPeriod {
  company: string
  position: string
  description: string
}

export interface IEducationForm extends IPeriod {
  institution: string
  speciality: string
}

export interface ISkillForm {
  name: string
}
