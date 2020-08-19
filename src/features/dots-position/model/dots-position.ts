import { createStore } from 'effector';

import { $currentStep } from '../../step/model/current-step';

type DotsPosition = 'topRight' | 'bottomLeft';

export const $dotsPosition = createStore<DotsPosition>('topRight');

$dotsPosition.on($currentStep, (_, { dots }) => dots);
