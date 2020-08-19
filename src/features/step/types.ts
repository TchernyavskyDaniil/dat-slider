import { ICONS } from '../../constants/icons';

import { DotsPosition } from '../dots-position/types';
import { PlanImages } from '../plan/types';

export type Step = {
  id: string;
  title: string;
  description: string;
  iconType: ICONS;
  previews: PlanImages;
  dots: DotsPosition;
  isActive: boolean;
};
