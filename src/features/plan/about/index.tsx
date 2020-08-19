import React, { FC } from 'react';

import { Description } from '../../../ui/about-plan/description';
import { Title } from '../../../ui/about-plan/title';
import { Wrapper } from '../../../ui/about-plan/wrapper';

export const About: FC<{ title: string; description: string }> = ({ title, description }) => (
  <Wrapper>
    <Title text={title} />
    <Description text={description} />
  </Wrapper>
);
