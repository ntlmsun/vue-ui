import Vue from 'vue';

/** MsunUI component common definition */
export declare class MsunUIComponent extends Vue {
  /** Install component into Vue */
  static install(vue: typeof Vue): void;
}

/** Component size definition for button, input, etc */
export type MsunUIComponentSize = 'large' | 'medium' | 'small' | 'mini';

/** Horizontal alignment */
export type MsunUIHorizontalAlignment = 'left' | 'center' | 'right';
