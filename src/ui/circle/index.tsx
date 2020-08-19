import React, { FC } from 'react';
import styled from 'reshadow';

export const Circle: FC = () =>
  styled`
    svg {
      position: absolute;
      right: 0;
      transform: rotate(-90deg);
      stroke-dasharray: 251; /* (2PI * 40px) */
      stroke-dashoffset: 251;
      animation: youspinme 5s linear forwards;
    }

    @keyframes youspinme {
       to {
         stroke-dashoffset: 0;
       }
    }
  `(
    <svg height="70" width="70">
      <circle cx="33" cy="35" r="30" stroke="#F20D59" strokeWidth="6" fill="white" />
    </svg>,
  );
