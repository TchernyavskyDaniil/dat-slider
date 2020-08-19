import React, { FC } from 'react';
import { useList } from 'effector-react';

import { Step } from '../step';
import { useStepTimeout } from '../use-step-timeout';
import { $steps } from './model/steps';

import { Wrapper } from '../../ui/steps/wrapper';

export const Steps: FC = () => {
  useStepTimeout();

  return (
    <Wrapper>
      {useList($steps, ({ title, iconType, isActive, id }) => (
        <Step title={title} iconType={iconType} isActive={isActive} id={id} />
      ))}
    </Wrapper>
  );
};
