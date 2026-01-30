import {
  IEducationForm,
  IExperienceForm,
  ISkillForm
} from '../types/profileForm'

export const EMPTY_EXPERIENCE: IExperienceForm = {
  company: '',
  position: '',
  description: '',
  startDate: null,
  endDate: null
}

export const EMPTY_EDUCATION: IEducationForm = {
  institution: '',
  speciality: '',
  startDate: null,
  endDate: null
}

export const EMPTY_SKILL: ISkillForm = {
  name: ''
}
