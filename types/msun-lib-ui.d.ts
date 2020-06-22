import Vue, { PluginObject } from 'vue';
import { MsunUIComponent, MsunUIComponentSize, MsunUIHorizontalAlignment } from './component';
import { MsunConvert } from './convert';
import { MsunCookie } from './cookie';
import { MsunDefaultLayout } from './default-layout';
import { MsunHttpClient } from './http';
import { MsLayout } from './layout';
import { MsunPermission } from './permission';
import { MsReuseTab } from './reuse-tab';
import { Store } from './store';
import { ElSelectTableDrag } from './select-table-drag';

export function install(vue: typeof Vue): void;

/** MsunUI component common definition */
export type Component = MsunUIComponent;

/** Component size definition for button, input, etc */
export type ComponentSize = MsunUIComponentSize;

/** Horizontal alignment */
export type HorizontalAlignment = MsunUIHorizontalAlignment;

/** store module */
export const mStore: Store<any>;

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

/** ReuseTab Component */
export class ReuseTab extends MsReuseTab {}

/** SelectTableDrag Directive */
export const SelectTableDrag: PluginObject<ElSelectTableDrag>;
