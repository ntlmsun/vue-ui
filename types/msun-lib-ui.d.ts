import Vue from 'vue';
import { ElCard } from './card';
import { MsunUIComponent, MsunUIComponentSize, MsunUIHorizontalAlignment } from './component';

export function install(vue: typeof Vue): void;

/** MsunUI component common definition */
export type Component = MsunUIComponent;

/** Component size definition for button, input, etc */
export type ComponentSize = MsunUIComponentSize;

/** Horizontal alignment */
export type HorizontalAlignment = MsunUIHorizontalAlignment;

/** Card Component */
export class Card extends ElCard {}