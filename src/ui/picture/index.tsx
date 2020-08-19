import React, { FC } from 'react';
import styled from 'reshadow';

export const Picture: FC<{
  webpSet: string;
  pngSet: string;
  alt: string;
  src: string;
  srcSet: string;
}> = ({ webpSet, pngSet, alt, src, srcSet }) =>
  styled`
    img {
      max-width: max-content;
      max-height: max-content;
    }
  `(
    <picture>
      <source type="image/webp" srcSet={webpSet} />
      <source type="image/png" srcSet={pngSet} />
      <img src={src} srcSet={srcSet} alt={alt} />
    </picture>,
  );
