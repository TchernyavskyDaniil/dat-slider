import React, { FC } from 'react';
import styled from 'reshadow';

export const Wrapper: FC = ({ children }) =>
  styled`
    div {
      height: 100vh;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      background-image: url('frontassets/images/shapes.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
`(<div>{children}</div>);
