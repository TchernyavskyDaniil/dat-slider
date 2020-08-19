import React, { FC } from 'react';
import { useList } from 'effector-react';

import { useInterval } from '../../lib/use-interval';
import { Step } from '../step';
import { nextStep } from './lib/next-step';
import { $steps } from './model/steps';

import { Wrapper } from '../../ui/steps/wrapper';

import { INTERVAL_TIMER } from '../../constants/time';

export const Steps: FC = () => {
  useInterval({
    callback: nextStep,
    ms: INTERVAL_TIMER,
  });

  return (
    <Wrapper>
      {useList($steps, ({ title, iconType, isActive }) => (
        <Step title={title} iconType={iconType} isActive={isActive} />
      ))}
    </Wrapper>
  );
};
