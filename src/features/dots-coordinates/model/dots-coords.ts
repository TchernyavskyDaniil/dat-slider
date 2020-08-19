import { createStore } from 'effector';

import { $currentStep } from '../../step/model/current-step';

const coords = {
  topRight: {
    x: '14%',
    y: '40%',
  },
  bottomLeft: {
    x: '45%',
    y: '75%',
  },
};

export const $dotsCoords = createStore<{ x: string; y: string }>(coords.topRight);

$dotsCoords.on($currentStep, (_, { dots }) => coords[dots]);
