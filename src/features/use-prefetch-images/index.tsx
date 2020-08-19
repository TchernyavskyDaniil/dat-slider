import { useLayoutEffect } from 'react';

import { IMAGES } from '../../assets/images';

export const usePrefetchImages = () => {
  useLayoutEffect(() => {
    const pixelRatio = window.devicePixelRatio;

    function testWebP() {
      return new Promise(resolve => {
        const webp = new Image();
        // 2x2
        webp.src =
          'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        // eslint-disable-next-line no-multi-assign
        webp.onload = webp.onerror = () => {
          resolve(webp.height === 2);
        };
      });
    }

    testWebP().then(hasWebP => {
      let type: 'png' | 'webp' | 'webp2x' | 'webp3x' | 'png2x' | 'png3x' = 'png';

      if (hasWebP) {
        type = 'webp';
      }

      switch (pixelRatio) {
        case 2: {
          // @ts-ignore
          type = `${type}2x`;

          break;
        }

        case 3: {
          // @ts-ignore
          type = `${type}3x`;

          break;
        }

        default: {
          break;
        }
      }

      // Все следующие в общем
      // Была идея через подгружать только следующий по очереди, но их тут всего 4, так что не критично
      const urls = [
        IMAGES.schedule.plan[type],
        IMAGES.management.plan[type],
        IMAGES.communication.plan[type],
      ];

      urls.forEach((url: string) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);

        const img = new Image();
        img.src = url;
      });
    });
  }, []);
};
