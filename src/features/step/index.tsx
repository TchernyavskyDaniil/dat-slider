import React, { FC } from 'react';

import { SwitchIcons } from '../switch-icons';

import { Circle } from '../../ui/circle';
import { CircleWrapper } from '../../ui/step/circle-wrapper';
import { Text } from '../../ui/step/text';
import { Wrapper } from '../../ui/step/wrapper';

export const Step: FC<{ title: string; iconType: string; isActive: boolean }> = ({
  title,
  iconType,
  isActive,
}) => {
  const iconsRatio = isActive ? 'active' : 'default';

  return (
    <Wrapper>
      <Text text={title} />
      <SwitchIcons
        iconType={iconType}
        fill={isActive ? '#F20D59' : 'white'}
        iconsRatio={iconsRatio}
      />
      <CircleWrapper>{isActive && <Circle />}</CircleWrapper>
    </Wrapper>
  );
};
