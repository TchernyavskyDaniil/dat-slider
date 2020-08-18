import React, { FC } from 'react';
import styled from 'reshadow';

export const Wrapper: FC = ({ children }) =>
  styled`
    div {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin-bottom: 45px;
    }
`(<div>{children}</div>);
