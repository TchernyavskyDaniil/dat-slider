import { IMAGES } from '../../assets/images';

import { ICONS } from '../../constants/icons';

export const INITIAL_STEP = {
  title: 'Capacity planning',
  description:
    'Set capacity limits and turn on alerts to limit access when the building reaches capacity. Ensure social distancing and avoid overcrowding.',
  iconType: ICONS.capacity,
  previews: IMAGES.capacity.plan,
  dots: 'topRight',
  isActive: true,
};
