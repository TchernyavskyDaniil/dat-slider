import React, { CSSProperties, FC } from 'react';

import { Capacity } from '../../ui/icons/capacity';
import { Communication } from '../../ui/icons/communication';
import { Management } from '../../ui/icons/management';
import { Schedule } from '../../ui/icons/schedule';
import { Wrapper } from '../../ui/icons/wrapper';

import { ICONS } from '../../constants/icons';

export const SwitchIcons: FC<{ iconType: string; fill: string; wrapperStyles: CSSProperties }> = ({
  iconType,
  fill,
  wrapperStyles,
}) => {
  let renderIcon = null;
  switch (iconType) {
    case ICONS.communication: {
      renderIcon = <Communication fill={fill} />;
      break;
    }

    case ICONS.management: {
      renderIcon = <Management fill={fill} />;
      break;
    }

    case ICONS.schedule: {
      renderIcon = <Schedule fill={fill} />;
      break;
    }

    case ICONS.capacity: {
      renderIcon = <Capacity fill={fill} />;
      break;
    }

    default: {
      break;
    }
  }

  return <Wrapper wrapperStyles={wrapperStyles}>{renderIcon}</Wrapper>;
};
