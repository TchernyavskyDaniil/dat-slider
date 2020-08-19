import React, { FC } from 'react';
import styled from 'reshadow';

export const CircleWrapper: FC = ({ children }) =>
  styled`
    div {
      width: 84px;
      height: 76px;
      position: relative;
    }
  `(<div>{children}</div>);
