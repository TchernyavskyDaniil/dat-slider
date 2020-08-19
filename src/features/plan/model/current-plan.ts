import { createStore } from 'effector';

import { INITIAL_STEP } from '../../step/initialStep';
import { $currentStep } from '../../step/model/current-step';

import { PlanImages } from '../types';

const { title, description, previews } = INITIAL_STEP;

export const $currentPlan = createStore<{
  title: string;
  description: string;
  previews: PlanImages;
}>({
  title,
  description,
  previews,
});

$currentPlan.on($currentStep, (_, step) => ({
  title: step.title,
  description: step.description,
  previews: step.previews,
}));
