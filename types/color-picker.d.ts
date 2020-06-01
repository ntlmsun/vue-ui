import { MsunUIComponent, MsunUIComponentSize } from './component';

export type ColorFormat = 'hsl' | 'hsv' | 'hex' | 'rgb';

/** ColorPicker Component */
export declare class MsColorPicker extends MsunUIComponent {
  /** Whether to display the alpha slider */
  showAlpha: boolean;

  /** Whether to disable the ColorPicker */
  disabled: boolean;

  /** Size of ColorPicker */
  size: MsunUIComponentSize;

  /** Whether to display the alpha slider */
  popperClass: string;

  /** Custom class name for ColorPicker's dropdown */
  colorFormat: ColorFormat;
}
