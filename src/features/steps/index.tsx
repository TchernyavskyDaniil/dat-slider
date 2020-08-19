import React, { FC } from 'react';
import { useList } from 'effector-react';

import { useInterval } from '../../lib/useInterval';
import { Step } from '../step';
import { $steps, setupNextActiveStep } from './model/steps';

import { Wrapper } from '../../ui/steps/wrapper';

const INTERVAL_TIMER = {
  ms: 5000,
};

export const Steps: FC = () => {
  useInterval({ callback: setupNextActiveStep, ms: INTERVAL_TIMER.ms });

  return (
    <Wrapper>
      {useList($steps, ({ title, icon, isActive }) => (
        <Step title={title} icon={icon} isActive={isActive} />
      ))}
    </Wrapper>
  );
};
