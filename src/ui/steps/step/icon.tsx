import React, { FC } from 'react';
import styled from 'reshadow';

export const Icon: FC<{ icon: string; text: string }> = ({ icon, text }) =>
  styled`   
    div {
      width: 70px;
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
    }
    img {
      width: 30px;
      height: 30px;
      z-index: 2;
    }
`(
    <div>
      <img src={icon} alt={`icon by ${text}`} />
    </div>,
  );
