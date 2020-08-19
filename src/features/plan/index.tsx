import React, { FC } from 'react';
import { useStore } from 'effector-react';

import { About } from './about';
import { $currentPlan } from './model/current-plan';

export const Plan: FC = () => {
  const { title, description } = useStore($currentPlan);

  return (
    <>
      <About title={title} description={description} />
    </>
  );
};
