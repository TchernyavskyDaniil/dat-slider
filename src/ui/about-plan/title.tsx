import React, { FC } from 'react';
import styled from 'reshadow';

export const Title: FC<{ text: string }> = ({ text }) =>
  styled`
    h2 { 
      font-family: Playfair Display, serif;
      font-size: 50px;
      line-height: 54px;
      color: white;
    }
`(<h2>{text}</h2>);
