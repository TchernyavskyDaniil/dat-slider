import React, { FC } from 'react';
import styled from 'reshadow';

import { styles } from './styles';

export const Wrapper: FC<{ iconsRatio: 'active' | 'default' }> = ({ children, iconsRatio }) =>
  styled(styles)(<div data-ratio={iconsRatio}>{children}</div>);
