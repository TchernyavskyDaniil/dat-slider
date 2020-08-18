import React, { FC } from 'react';
import { useList } from 'effector-react';

import { useInterval } from '../../lib/useInterval';
import { Step } from '../step';
import { $steps, setupNextActiveStep } from './model';

import { Wrapper } from '../../ui/steps/wrapper';

export const Steps: FC = () => {
  useInterval({ callback: setupNextActiveStep, ms: 5000 });

  return (
    <Wrapper>
      {useList($steps, ({ text, icon, isActive }) => (
        <Step text={text} icon={icon} isActive={isActive} />
      ))}
    </Wrapper>
  );
};
