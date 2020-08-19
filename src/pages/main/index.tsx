import React, { FC } from 'react';

import { Plan } from '../../features/plan';
import { Steps } from '../../features/steps';
import { usePrefetchImages } from '../../features/use-prefetch-images';

import { Wrapper } from '../../ui/slider/wrapper';

import { planRef } from '../../features/plan/refs';

import './styles.pcss';

export const Main: FC = () => {
  usePrefetchImages();

  return (
    <Wrapper>
      <Steps />
      <div ref={planRef} className="poof-segment">
        <Plan />
      </div>
    </Wrapper>
  );
};
