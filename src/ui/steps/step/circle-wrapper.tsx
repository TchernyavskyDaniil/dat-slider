import React, { FC } from 'react';
import styled from 'reshadow';

export const CircleWrapper: FC = ({ children }) =>
  styled`
    div {
      width: 78px;
      height: 70px;
    }
  `(<div>{children}</div>);
