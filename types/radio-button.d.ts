import { MsunUIComponent } from './component';

/** Radio Button Component */
export declare class MsRadioButton extends MsunUIComponent {
  /** The form input value */
  value: string;

  /** The value of radio */
  label: string | number;

  /** Whether radio is disabled */
  disabled: boolean;

  /** Native 'name' attribute */
  name: string;
}
