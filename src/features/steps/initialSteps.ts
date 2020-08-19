import { INITIAL_STEP } from '../step/initialStep';

import { IMAGES } from '../../assets/images';

import { ICONS } from '../../constants/icons';

export const INITIAL_STEPS = [
  INITIAL_STEP,
  {
    title: 'Staggered schedules',
    description:
      'Create multiple user groups and assign staggered schedules to users. Deny access outside of a set schedule. Change and update schedules easily that employees can check from\n' +
      'the app.',
    iconType: ICONS.schedule,
    previews: IMAGES.schedule.plan,
    dots: 'bottomLeft',
    isActive: false,
  },
  {
    title: 'PPE management',
    description:
      'Keep track of all your critical PPE inventory. Prioritize and track PPE allocation to highest at-risk employees.',
    iconType: ICONS.management,
    previews: IMAGES.management.plan,
    dots: 'topRight',
    isActive: false,
  },
  {
    title: 'Employee communication',
    description:
      'Send out timely announcements for COVID-19 health-related news and guidelines, directly in the app. Ensure employees update critical contacts in case\n' +
      'of emergency.',
    iconType: ICONS.communication,
    previews: IMAGES.communication.plan,
    dots: 'bottomLeft',
    isActive: false,
  },
];
