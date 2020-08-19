import { createStore } from 'effector';

import { $currentStep } from '../../step/model/current-step';

import { DotsPosition } from '../types';

export const $dotsPosition = createStore<DotsPosition>('topRight');

$dotsPosition.on($currentStep, (_, { dots }) => dots);
