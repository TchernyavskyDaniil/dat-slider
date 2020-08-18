import React, { FC } from 'react';
import styled from 'reshadow';

export const Text: FC<{ text: string }> = ({ text }) =>
  styled`
    h4 { font-family: Playfair Display,serif;
      width: 75%;
      font-size: 20px;
      line-height: 24px;
      margin-right: 36px;
      text-align: right;
      color: white;
    }
`(<h4>{text}</h4>);
