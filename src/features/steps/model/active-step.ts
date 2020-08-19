import { MouseEvent } from 'react';
import { attach, createEffect } from 'effector';

import { $steps, stepsUpdated } from './steps';

import { Step } from '../../step/types';

export const activeStepFx = createEffect<{ e: MouseEvent<HTMLElement>; steps: Array<Step> }, any>(
  'activeStepFx',
  {
    handler: ({ e, steps }) => {
      const currentStepId = e.currentTarget.dataset.id;
      const normalizedSteps = steps.map(({ id, ...step }) => ({
        ...step,
        isActive: currentStepId === id,
        id,
      }));

      stepsUpdated(normalizedSteps);
    },
  },
);

export const activeStep = attach({
  effect: activeStepFx,
  source: $steps,
  mapParams: (e: MouseEvent<HTMLElement>, steps) => ({ e, steps }),
});
