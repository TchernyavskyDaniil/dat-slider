import React, { FC } from 'react';

import { Circle } from '../../ui/circle';
import { CircleWrapper } from '../../ui/steps/step/circle-wrapper';
import { Icon } from '../../ui/steps/step/icon';
import { Text } from '../../ui/steps/step/text';
import { Wrapper } from '../../ui/steps/step/wrapper';

export const Step: FC<{ title: string; icon: string; isActive: boolean }> = ({
  title,
  icon,
  isActive,
}) => (
  <Wrapper>
    <Text text={title} />
    <Icon icon={icon} alt={`icon by ${title}`} />
    <CircleWrapper>{isActive && <Circle />}</CircleWrapper>
  </Wrapper>
);
