import Vue from 'vue';
import { MsunUIComponent, MsunUIComponentSize, MsunUIHorizontalAlignment } from './component';
import { MsunConvert } from './convert';
import { MsunCookie } from './cookie';
import { MsunDefaultLayout } from './default-layout';
import { MsunHttpClient } from './http';
import { MsLayout } from './layout';
import { MsunPermission } from './permission';
import { Store } from './store';
import { MsunApp } from './app';

export interface InstallationOptions {
  locale: any;
  i18n: any;
  size: string;
}

/** The version of msun-lib-ui */
export const version: string;

export function install(vue: typeof Vue, options?: InstallationOptions): void;

/** MsunUI component common definition */
export type Component = MsunUIComponent;

/** Component size definition for button, input, etc */
export type ComponentSize = MsunUIComponentSize;

/** Horizontal alignment */
export type HorizontalAlignment = MsunUIHorizontalAlignment;

/** store module */
export const mStore: Store<any>;

/** app */
export const App: MsunApp;

/** cookie */
export const Cookie: MsunCookie;

/** Convert */
export const Convert: MsunConvert;

/** Http */
export const Http: MsunHttpClient;

/** permission */
export const Permission: MsunPermission;

/** Layout Component */
export class DefaultLayout extends MsunDefaultLayout {}

/** Layout Component */
export class Layout extends MsLayout {}
