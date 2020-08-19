import { PlanImages } from '../plan/types';

export type Step = {
  title: string;
  description: string;
  iconType: string;
  previews: PlanImages;
  dots: 'bottomLeft' | 'topRight';
  isActive: boolean;
};
