import React, { FC } from 'react';
import styled from 'reshadow';

export const Wrapper: FC = ({ children }) =>
  styled`
    div {
      display: flex;    
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: relative;
      margin-bottom: 30px;
      cursor: pointer;
      transition: 0.5s;
      
      &:hover {
        opacity: 0.7;
      }
    }
`(<div>{children}</div>);
