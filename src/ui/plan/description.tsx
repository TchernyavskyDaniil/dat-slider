import React, { FC } from 'react';
import styled from 'reshadow';

export const Description: FC<{ text: string }> = ({ text }) =>
  styled`
    p {
      font-family: Gotham Book, serif;
      font-size: 16px;
      line-height: 18px;
      color: #DBDBF0;
      margin-top: 15px;
    }
`(<p>{text}</p>);
