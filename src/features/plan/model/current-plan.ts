import { createStore } from 'effector';

import { INITIAL_STEP } from '../../step/initialStep';
import { $currentStep } from '../../step/model/current-step';

const { title, description } = INITIAL_STEP;

export const $currentPlan = createStore<{ title: string; description: string }>({
  title,
  description,
});

$currentPlan.on($currentStep, (_, step) => step);
