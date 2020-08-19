import React, { FC } from 'react';

import { Capacity } from '../../ui/steps/capacity';
import { Communication } from '../../ui/steps/communication';
import { Management } from '../../ui/steps/management';
import { Schedule } from '../../ui/steps/schedule';

import { ICONS } from '../../constants/icons';

export const SwitchIcons: FC<{ iconType: string; fill: string }> = ({ iconType, fill }) => {
  switch (iconType) {
    case ICONS.communication: {
      return <Communication fill={fill} />;
    }

    case ICONS.management: {
      return <Management fill={fill} />;
    }

    case ICONS.schedule: {
      return <Schedule fill={fill} />;
    }

    case ICONS.capacity: {
      return <Capacity fill={fill} />;
    }

    default: {
      return null;
    }
  }
};
