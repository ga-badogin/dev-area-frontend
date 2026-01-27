import { IEducation, IExperience, ISkill } from '../types/profileApi'

export const EMPTY_EXPERIENCE: Omit<IExperience, 'id'> = {
  company: '',
  position: '',
  description: '',
  period: {
    firstDate: '',
    secondDate: null
  }
}

export const EMPTY_EDUCATION: Omit<IEducation, 'id'> = {
  institution: '',
  speciality: '',
  period: {
    firstDate: '',
    secondDate: null
  }
}

export const EMPTY_SKILL: Omit<ISkill, 'id'> = {
  name: ''
}
