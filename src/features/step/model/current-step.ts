import { createStore } from 'effector';

import { $steps } from '../../steps/model/steps';
import { INITIAL_STEP } from '../initialStep';

import { Step } from '../types';

export const $currentStep = createStore<Step>(<Step>INITIAL_STEP);

$currentStep.on($steps, (_, steps) => steps.find(({ isActive }) => isActive));
