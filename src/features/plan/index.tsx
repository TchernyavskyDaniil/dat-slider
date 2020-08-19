import React, { FC } from 'react';
import { useStore } from 'effector-react';

import { $dotsCoords } from '../dots-coordinates/model/dots-coords';
import { About } from './about';
import { $currentPlan } from './model/current-plan';

import { Dots } from '../../ui/dots';
import { Picture } from '../../ui/picture';
import { Wrapper } from '../../ui/plan/wrapper';

export const Plan: FC = () => {
  const {
    title,
    description,
    previews: { png, png2x, png3x, webp, webp2x, webp3x },
  } = useStore($currentPlan);
  const { x, y } = useStore($dotsCoords);

  return (
    <Wrapper>
      <Dots top={y} right={x} />
      <About title={title} description={description} />
      <Picture
        webpSet={`${webp} 1x, ${webp2x} 2x, ${webp3x} 3x`}
        pngSet={`${png} 1x, ${png2x} 2x, ${png3x} 3x`}
        alt={`preview ${title}`}
        src={png}
        srcSet={png2x}
      />
    </Wrapper>
  );
};
