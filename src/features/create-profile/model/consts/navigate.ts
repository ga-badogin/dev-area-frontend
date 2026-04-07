import { TView } from '../types/createProfileSchema'

export const chainNavigation: Record<TView, TView> = {
  welcome: 'about',
  about: 'experience',
  experience: 'education',
  education: 'skill',
  skill: 'about'
}
