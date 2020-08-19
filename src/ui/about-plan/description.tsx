import React, { FC } from 'react';
import styled from 'reshadow';

export const Description: FC<{ text: string }> = ({ text }) =>
  styled`
    p {
      max-height: 180px;
      font-family: Gotham Book, serif;
      font-size: 16px;
      line-height: 21px;
      color: #DBDBF0;
      margin-top: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
`(<p>{text}</p>);
