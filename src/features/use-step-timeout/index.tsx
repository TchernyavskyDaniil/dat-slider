import { useStore } from 'effector-react';

import { useTimeout } from '../../lib/use-timeout';
import { $currentStep } from '../step/model/current-step';
import { nextStep } from '../steps/lib/next-step';

import { INTERVAL_TIMER } from '../../constants/time';

export const useStepTimeout = () => {
  const { id } = useStore($currentStep);

  useTimeout({
    callback: nextStep,
    ms: INTERVAL_TIMER,
    optionsTriggers: id,
  });
};
