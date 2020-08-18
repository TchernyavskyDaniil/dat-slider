import React, { FC } from 'react';

import { Circle } from '../../ui/circle';
import { CircleWrapper } from '../../ui/steps/step/circle-wrapper';
import { Icon } from '../../ui/steps/step/icon';
import { Text } from '../../ui/steps/step/text';
import { Wrapper } from '../../ui/steps/step/wrapper';

export const Step: FC<{ text: string; icon: string; isActive: boolean }> = ({
  text,
  icon,
  isActive,
}) => (
  <Wrapper>
    <Text text={text} />
    <Icon icon={icon} text={text} />
    <CircleWrapper>{isActive && <Circle />}</CircleWrapper>
  </Wrapper>
);
