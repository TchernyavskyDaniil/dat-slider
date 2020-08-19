import { DotsPosition } from '../dots-position/types';
import { PlanImages } from '../plan/types';

export type Step = {
  title: string;
  description: string;
  iconType: string;
  previews: PlanImages;
  dots: DotsPosition;
  isActive: boolean;
};
