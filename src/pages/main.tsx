import React, { FC } from 'react';

import { Plan } from '../features/plan';
import { Steps } from '../features/steps';

import { Wrapper } from '../ui/slider/wrapper';

export const Main: FC = () => (
  <Wrapper>
    <Steps />
    <Plan />
  </Wrapper>
);
