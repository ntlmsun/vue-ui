import { MsunUIComponent } from './component';

export type ContentPosition = 'left' | 'center' | 'right';

/** Divider Component */
export declare class MsDivider extends MsunUIComponent {
  /** enable vertical divider */
  vertical: boolean;

  /** customize the content on the divider line */
  posiiton: ContentPosition;
}
