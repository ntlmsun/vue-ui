import { MsunUIComponent } from './component';

export type DateType = Date | String | Number;

/** Calendar Component */
export declare class MsCalendar extends MsunUIComponent {
  /** Binding value */
  value: DateType;

  /** Specify the display range of the calendar */
  range: DateType[];

  /** First day of week */
  firstDayOfWeek: number;
}
