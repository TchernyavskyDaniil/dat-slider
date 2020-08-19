import React, { FC } from 'react';

import { activeStep } from '../steps/model/active-step';
import { SwitchIcons } from '../switch-icons';

import { Circle } from '../../ui/circle';
import { CircleWrapper } from '../../ui/step/circle-wrapper';
import { Text } from '../../ui/step/text';
import { Wrapper } from '../../ui/step/wrapper';

export const Step: FC<{ title: string; iconType: string; isActive: boolean; id: string }> = ({
  title,
  iconType,
  isActive,
  id,
}) => {
  const iconsRatio = isActive ? 'active' : 'default';

  return (
    <div data-id={id} onClick={activeStep}>
      <Wrapper>
        <Text text={title} />
        <SwitchIcons
          iconType={iconType}
          fill={isActive ? '#F20D59' : 'white'}
          iconsRatio={iconsRatio}
        />
        <CircleWrapper>{isActive && <Circle />}</CircleWrapper>
      </Wrapper>
    </div>
  );
};
