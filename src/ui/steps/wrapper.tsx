import React, { FC } from 'react';
import styled from 'reshadow';

export const Wrapper: FC = ({ children }) =>
  styled`
  div {
    display: flex;
    flex-direction: column;
  }
`(<div>{children}</div>);
