import React, { FC } from 'react';
import styled from 'reshadow';

export const Text: FC<{ text: string }> = ({ text }) =>
  styled`
    h4 { font-family: Playfair Display,serif;
      width: 75%;
      max-height: 75px;
      font-size: 20px;
      line-height: 24px;
      margin-right: 36px;
      text-align: right;
      color: white;
      overflow: hidden;
      text-overflow: ellipsis;
    }
`(<h4>{text}</h4>);
