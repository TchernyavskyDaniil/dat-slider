import React, { FC } from 'react';
import styled from 'reshadow';

export const Circle: FC = () =>
  styled`
    svg {
      position: absolute;
      top: -31px;
      right: -34px;
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
    <svg width="90">
      <circle cx="43" cy="42" r="40" stroke="#F20D59" strokeWidth="4" fill="transparent" />
    </svg>,
  );
