import React, { FC } from 'react';
import styled from 'reshadow';

export const Wrapper: FC = ({ children }) =>
  styled`
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 10%;
      padding: 0 10%;
    }
`(<div>{children}</div>);
