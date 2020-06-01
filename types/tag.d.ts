import { MsunUIComponent, MsunUIComponentSize } from './component';

export type TagType = 'primary' | 'gray' | 'success' | 'warning' | 'danger';
export type TagTheme = 'dark' | 'light' | 'plain';

/** Tag Component */
export declare class MsTag extends MsunUIComponent {
  /** Tag type */
  type: TagType;

  /** Whether Tab can be removed */
  closable: boolean;

  /** Whether the removal animation is disabled */
  disableTransitions: boolean;

  /** Whether Tag has a highlighted border */
  hit: boolean;

  /** Background color of the tag */
  color: string;

  /** Tag size */
  size: MsunUIComponentSize;

  /** Tag theme */
  effect: TagTheme;
}
