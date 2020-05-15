import { VNode } from 'vue'
import { MsunUIComponent } from './component'

export interface CardSlots {
  /** Content of the card */
  default: VNode[],

  /** Title of the card */
  header: VNode[]

  [key: string]: VNode[]
}

/** Integrate information in a card container */
export declare class ElCard extends MsunUIComponent {
  /** Title of the card */
  header: string

  /** CSS style of body */
  bodyStyle: object

  /** When to show card shadows */
  shadow: string

  $slots: CardSlots
}
