import { createEvent, createStore } from 'effector';

import { INITIAL_STEPS } from '../initialSteps';

import { Step } from '../../step/types';

type Steps = Array<Step>;

export const $steps = createStore<Steps>(<Array<Step>>INITIAL_STEPS);

export const setupNextActiveStep = createEvent();
export const stepsUpdated = createEvent<Steps>();

$steps
  .on(setupNextActiveStep, steps => {
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
  })
  .on(stepsUpdated, (_, steps) => steps);
