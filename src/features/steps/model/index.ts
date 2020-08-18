import { createEvent, createStore } from 'effector';

import { IMAGES } from '../../../assets/images';

const INITIAL_STORE = [
  {
    serialNumber: 1,
    text: 'Capacity planning',
    icon: IMAGES.capacity,
    isActive: true,
  },
  {
    serialNumber: 2,
    text: 'Staggered schedules',
    icon: IMAGES.shedule,
    isActive: false,
  },
  {
    serialNumber: 3,
    text: 'PPE management',
    icon: IMAGES.management,
    isActive: false,
  },
  {
    serialNumber: 4,
    text: 'Employee communication',
    icon: IMAGES.communication,
    isActive: false,
  },
];

export const $steps = createStore<typeof INITIAL_STORE>(INITIAL_STORE);

export const setupNextActiveStep = createEvent();

$steps.on(setupNextActiveStep, steps => {
  let indexOfActiveStep = steps.findIndex(({ isActive }) => isActive);

  if (indexOfActiveStep + 1 === steps.length) {
    indexOfActiveStep = -1;
  }

  const normalizedSteps = steps.map((step, index) => {
    if (indexOfActiveStep + 1 === index) {
      return {
        ...step,
        isActive: true,
      };
    }

    return {
      ...step,
      isActive: false,
    };
  });

  return normalizedSteps;
});
