import Vue from 'vue';
import { ElCard } from './card';
import {
  MsunUIComponent,
  MsunUIComponentSize,
  MsunUIHorizontalAlignment,
} from './component';
import { MsunConvert } from './convert';
import { MsunHttpClient } from './http';

export function install(vue: typeof Vue): void;

/** MsunUI component common definition */
export type Component = MsunUIComponent;

/** Component size definition for button, input, etc */
export type ComponentSize = MsunUIComponentSize;

/** Horizontal alignment */
export type HorizontalAlignment = MsunUIHorizontalAlignment;

/** Convert */
export const Convert: MsunConvert;

/** Http */
export const Http: MsunHttpClient;

/** Card Component */
export class Card extends ElCard {}
