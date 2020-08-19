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
      padding: 0 10%;
      box-sizing: border-box;
      background-image: url('frontassets/images/shapes.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      position: relative;
      &:before {
        content: '';
        width: 142px;
        height: 142px;
        background-image: radial-gradient(circle at 3.5px 3.5px, white 3.5px, transparent 0);
        opacity: 0.15;
        background-size: 12px 18px;
        background-repeat: repeat;
        position: absolute;
        right: 200px;
        top: 40%;
        transform: translate(0,-40%);
      }
    }
`(<div>{children}</div>);
