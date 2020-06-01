import { VNode } from 'vue';
import { MsunUIComponent } from './component';

export type StepStatus = 'wait' | 'process' | 'finish' | 'error' | 'success';

export interface StepRenderSlots {
  /** Custom icon */
  icon: VNode[];

  /** Step title */
  title: VNode[];

  /** Step description */
  description: VNode[];

  [key: string]: VNode[];
}

/** Step Component */
export declare class MsStep extends MsunUIComponent {
  /** Step title */
  title: string;

  /** Step description */
  description: string;

  /** Step icon */
  icon: string;

  /** Current status. It will be automatically set by Steps if not configured. */
  status: StepStatus;

  readonly $slots: StepRenderSlots;
}