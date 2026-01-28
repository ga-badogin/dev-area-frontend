import { Resolver } from 'react-hook-form'
import { IProfileForm } from '@/entities/profile'

export const profileFormResolver: Resolver<IProfileForm> = (values) => {
  const errors: Record<string, any> = {}

  if (!values.firstName || values.firstName.trim() === '') {
    errors.firstName = {
      type: 'required',
      message: 'Имя обязательно'
    }
  }

  if (!values.lastName || values.lastName.trim() === '') {
    errors.lastName = {
      type: 'required',
      message: 'Фамилия обязательна'
    }
  }

  if (!values.bio || values.bio.trim() === '') {
    errors.bio = {
      type: 'required',
      message: 'Описание обязательно обязательна'
    }
  }

  if (!errors.experience) {
    errors.experience = []
  }

  values.experience.forEach((exp, index) => {
    if (!errors.experience[index]) {
      errors.experience[index] = {}
    }

    if (!exp.company || exp.company.trim() === '') {
      errors.experience[index].company = {
        type: 'required',
        message: 'Компания обязательна'
      }
    }

    if (!exp.position || exp.position.trim() === '') {
      errors.experience[index].position = {
        type: 'required',
        message: 'Должность обязательна'
      }
    }
  })

  if (!errors.education) {
    errors.education = []
  }

  values.education.forEach((ed, index) => {
    if (!errors.education[index]) {
      errors.education[index] = {}
    }

    if (!ed.institution || ed.institution.trim() === '') {
      errors.education[index].institution = {
        type: 'required',
        message: 'Институт обязателен'
      }
    }

    if (!ed.speciality || ed.speciality.trim() === '') {
      errors.education[index].speciality = {
        type: 'required',
        message: 'Специальность обязательна'
      }
    }
  })

  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors
  }
}
