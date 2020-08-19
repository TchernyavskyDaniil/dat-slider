import { INITIAL_STEP } from '../step/initialStep';

import { IMAGES } from '../../assets/images';

export const INITIAL_STEPS = [
  INITIAL_STEP,
  {
    title: 'Staggered schedules',
    description:
      'Create multiple user groups and assign staggered schedules to users. Deny access outside of a set schedule. Change and update schedules easily that employees can check from\n' +
      'the app.',
    icon: IMAGES.schedule.step,
    previews: IMAGES.schedule.plan,
    isActive: false,
  },
  {
    title: 'PPE management',
    description:
      'Keep track of all your critical PPE inventory. Prioritize and track PPE allocation to highest at-risk employees.',
    icon: IMAGES.management.step,
    previews: IMAGES.management.plan,
    isActive: false,
  },
  {
    title: 'Employee communication',
    description:
      'Send out timely announcements for COVID-19 health-related news and guidelines, directly in the app. Ensure employees update critical contacts in case\n' +
      'of emergency.',
    icon: IMAGES.communication.step,
    previews: IMAGES.communication.plan,
    isActive: false,
  },
];
