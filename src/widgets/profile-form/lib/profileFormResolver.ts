import {
  FieldError,
  FieldErrors,
  FieldErrorsImpl,
  Merge,
  Resolver
} from 'react-hook-form'
import { IProfileForm } from '@/entities/profile'
import {
  IEducation,
  IExperience,
  ISkill
} from '../../../entities/profile/model/types/profileApi'

export const profileFormResolver: Resolver<IProfileForm> = (values) => {
  const errors: FieldErrors<IProfileForm> = {}

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

  values.experience.forEach((exp, index) => {
    const experienceErrors: Merge<
      FieldError,
      FieldErrorsImpl<Omit<IExperience, 'id'>>
    > = {}

    if (!exp.position?.trim()) {
      experienceErrors.position = {
        type: 'required',
        message: 'Должность обязательна'
      }
    }

    if (!exp.company?.trim()) {
      experienceErrors.company = {
        type: 'required',
        message: 'Компания обязательна'
      }
    }

    if (Object.keys(experienceErrors).length > 0) {
      errors.experience ??= []
      errors.experience[index] = experienceErrors
    }
  })

  values.education.forEach((ed, index) => {
    const educationErrors: Merge<
      FieldError,
      FieldErrorsImpl<Omit<IEducation, 'id'>>
    > = {}

    if (!ed.institution?.trim()) {
      educationErrors.institution = {
        type: 'required',
        message: 'Институт обязателен'
      }
    }

    if (!ed.speciality?.trim()) {
      educationErrors.speciality = {
        type: 'required',
        message: 'Специальность обязательна'
      }
    }

    if (Object.keys(educationErrors).length > 0) {
      errors.education ??= []
      errors.education[index] = educationErrors
    }
  })

  values.skill.forEach((ski, index) => {
    const skillErrors: Merge<
      FieldError,
      FieldErrorsImpl<Omit<ISkill, 'id'>>
    > = {}

    if (!ski.name?.trim()) {
      skillErrors.name = {
        type: 'required',
        message: 'Название обязательно'
      }
    }

    if (Object.keys(skillErrors).length > 0) {
      errors.skill ??= []
      errors.skill[index] = skillErrors
    }
  })

  console.log(errors)

  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors
  }
}
