import React, { FC } from 'react';
import styled from 'reshadow';

export const Wrapper: FC = ({ children }) =>
  styled`
    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 45px;
      padding: 0 18px;
    }
`(<div>{children}</div>);
