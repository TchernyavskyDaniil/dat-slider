import { sleep } from '../../../lib/sleep';
import { setupNextActiveStep } from '../model/steps';

import { planRef } from '../../plan/refs';

import { SLEEP_PAUSE } from '../../../constants/time';

export const nextStep = async () => {
  planRef.current.classList.add('poof');

  await sleep(SLEEP_PAUSE);
  setupNextActiveStep();

  planRef.current.classList.remove('poof');
};
