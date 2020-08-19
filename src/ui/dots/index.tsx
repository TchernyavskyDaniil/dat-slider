import React, { FC } from 'react';
import styled from 'reshadow';

export const Dots: FC<{ position: 'topRight' | 'bottomLeft' }> = ({ position }) =>
  styled`
    div {
      width: 142px;
      height: 142px;
      background-image: radial-gradient(circle at 3.5px 3.5px, white 3.5px, transparent 0);
      opacity: 0.15;
      background-size: 12px 18px;
      background-repeat: repeat;
      position: absolute;
      transform: translate(0,-40%);
    }
    
    div[data-position=bottomLeft] {
      right: 45%;
      top: 75%;
    }
    
    div[data-position=topRight] {
      right: 14%;
      top: 40%;
    }
`(<div data-position={position} />);
