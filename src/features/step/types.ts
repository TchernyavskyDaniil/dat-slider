import { PlanImages } from '../plan/types';

export type Step = {
  title: string;
  description: string;
  iconType: string;
  previews: PlanImages;
  isActive: boolean;
};
