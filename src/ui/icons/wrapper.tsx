import React, { CSSProperties, FC } from 'react';
import styled from 'reshadow';

import { styles } from './styles';

export const Wrapper: FC<{ wrapperStyles: CSSProperties }> = ({ children, wrapperStyles }) =>
  styled(styles)(<div style={wrapperStyles}>{children}</div>);
