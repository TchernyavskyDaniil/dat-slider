import React, { FC } from 'react';

import { AboutPlan } from '../plan/about';

export const Plans: FC = () => (
  <>
    <AboutPlan
      title="Capacity planning"
      description="Set capacity limits and turn on alerts to limit access when the building reaches capacity. Ensure social distancing and avoid overcrowding."
    />
    {/* <Plan */}
    {/*  title="Staggered schedules" */}
    {/*  description="Create multiple user groups and assign staggered schedules to users. Deny access outside of a set schedule. Change and update schedules easily that employees can check from */}
    {/*    the app." */}
    {/* /> */}
    {/* <Plan */}
    {/*  title="PPE management" */}
    {/*  description="Keep track of all your critical PPE inventory. Prioritize and track PPE allocation to highest at-risk employees." */}
    {/* /> */}
    {/* <Plan */}
    {/*  title="Employee */}
    {/*    communication" */}
    {/*  description="Send out timely announcements for COVID-19 health-related news and guidelines, directly in the app. Ensure employees update critical contacts in case */}
    {/*    of emergency." */}
    {/* /> */}
  </>
);
