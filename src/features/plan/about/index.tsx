import React, { FC } from 'react';

import { Description } from '../../../ui/plan/description';
import { Title } from '../../../ui/plan/title';
import { Wrapper } from '../../../ui/plan/wrapper';

export const About: FC<{ title: string; description: string }> = ({ title, description }) => (
  <Wrapper>
    <Title text={title} />
    <Description text={description} />
  </Wrapper>
);
