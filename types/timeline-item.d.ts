import { MsunUIComponent } from './component';

export type TimelineItemPlacement = 'top' | 'bottom';
export type TimelineItemType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type TimelineItemSize = 'normal' | 'large';

/** TimelineItem Component */
export declare class MsTimelineItem extends MsunUIComponent {
  timestamp: string;

  hideTimestamp: boolean;

  placement: TimelineItemPlacement;

  type: TimelineItemType;

  size: TimelineItemSize;

  icon: string;
}