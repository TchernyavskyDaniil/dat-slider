import React, { FC } from 'react';
import styled from 'reshadow';

export const Picture: FC<{ src: string; alt: string }> = ({ src, alt }) =>
  styled``(<img src={src} alt={alt} />);
