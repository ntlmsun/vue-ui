import { MsunUIComponent } from './component';

export type RadioGroupSize = 'large' | 'small';

/** Radio Group Component */
export declare class MsRadioGroup extends MsunUIComponent {
  /** The size of radio buttons */
  size: RadioGroupSize;

  /** Border and background color when button is active */
  fill: string;

  /** Whether the nesting radios are disabled */
  disabled: boolean;

  /** Font color when button is active */
  textColor: string;
}