import React, { FC } from 'react';
import styled from 'reshadow';

export const Title: FC<{ text: string }> = ({ text }) =>
  styled`
    h2 { 
      max-height: 170px;
      min-height: 60px;
      font-family: Playfair Display, serif;
      font-size: 50px;
      line-height: 54px;
      color: white;
      overflow: hidden;
      text-overflow: ellipsis;
    }
`(<h2>{text}</h2>);
