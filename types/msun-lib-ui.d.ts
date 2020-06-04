import Vue, { PluginObject } from 'vue';
import { MsAlert } from './alert';
import { MsAside } from './aside';
import { MsAutocomplete } from './autocomplete';
import { MsAvatar } from './avatar';
import { MsBacktop } from './backtop';
import { MsBadge } from './badge';
import { MsBreadcrumb } from './breadcrumb';
import { MsBreadcrumbItem } from './breadcrumb-item';
import { MsButton } from './button';
import { MsButtonGroup } from './button-group';
import { MsCalendar } from './calendar';
import { MsCard } from './card';
import { MsCarousel } from './carousel';
import { MsCarouselItem } from './carousel-item';
import { MsCascader } from './cascader';
import { MsCheckbox } from './checkbox';
import { MsCheckboxButton } from './checkbox-button';
import { MsCheckboxGroup } from './checkbox-group';
import { MsCol } from './col';
import { MsCollapse } from './collapse';
import { MsCollapseItem } from './collapse-item';
import { MsColorPicker } from './color-picker';
import { MsunUIComponent, MsunUIComponentSize, MsunUIHorizontalAlignment } from './component';
import { MsContainer } from './container';
import { MsunConvert } from './convert';
import { MsunCookie } from './cookie';
import { MsDatePicker } from './date-picker';
import { MsunDefaultLayout } from './default-layout';
import { MsDialog } from './dialog';
import { MsDivider } from './divider';
import { MsDrawer } from './drawer';
import { MsDropdown } from './dropdown';
import { MsDropdownItem } from './dropdown-item';
import { MsDropdownMenu } from './dropdown-menu';
import { MsFooter } from './footer';
import { MsForm } from './form';
import { MsFormItem } from './form-item';
import { MsHeader } from './header';
import { MsunHttpClient } from './http';
import { MsIcon } from './icon';
import { MsImage } from './image';
import { MsInfiniteScroll } from './infinite-scroll';
import { MsInput } from './input';
import { MsInputNumber } from './input-number';
import { MsLayout } from './layout';
import { MsLink } from './link';
import { MsLoading } from './loading';
import { MsMain } from './main';
import { MsMenu } from './menu';
import { MsMenuItem } from './menu-item';
import { MsMenuItemGroup } from './menu-item-group';
import { MsMessage } from './message';
import { MsMessageBox } from './message-box';
import { MsNotification } from './notification';
import { MsOption } from './option';
import { MsOptionGroup } from './option-group';
import { MsPageHeader } from './page-header';
import { MsPagination } from './pagination';
import { MsunPermission } from './permission';
import { MsPopconfirm } from './popconfirm';
import { MsPopover } from './popover';
import { MsProgress } from './progress';
import { MsRadio } from './radio';
import { MsRadioButton } from './radio-button';
import { MsRadioGroup } from './radio-group';
import { MsRate } from './rate';
import { MsRow } from './row';
import { MsSelect } from './select';
import { MsSlider } from './slider';
import { MsStep } from './step';
import { MsSteps } from './steps';
import { Store } from './store';
import { MsSubmenu } from './submenu';
import { MsSwitch } from './switch';
import { MsTabPane } from './tab-pane';
import { MsTable } from './table';
import { MsTableColumn } from './table-column';
import { MsTabs } from './tabs';
import { MsTag } from './tag';
import { MsTimePicker } from './time-picker';
import { MsTimeSelect } from './time-select';
import { MsTimeline } from './timeline';
import { MsTimelineItem } from './timeline-item';
import { MsTooltip } from './tooltip';
import { MsTransfer } from './transfer';
import { MsTree, TreeData } from './tree';
import { MsUpload } from './upload';

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

/** cookie */
export const Cookie: MsunCookie;

/** Convert */
export const Convert: MsunConvert;

/** Http */
export const Http: MsunHttpClient;

/** permission */
export const Permission: MsunPermission;

/** Alert Component */
export class Alert extends MsAlert {}

/** Aside Component */
export class Aside extends MsAside {}

/** Autocomplete Component */
export class Autocomplete extends MsAutocomplete {}

/** Avatar Component */
export class Avatar extends MsAvatar {}

/** Backtop Component */
export class Backtop extends MsBacktop {}

/** Bagde Component */
export class Badge extends MsBadge {}

/** Breadcrumb Component */
export class Breadcrumb extends MsBreadcrumb {}

/** Breadcrumb Item Component */
export class BreadcrumbItem extends MsBreadcrumbItem {}

/** Button Component */
export class Button extends MsButton {}

/** Button Group Component */
export class ButtonGroup extends MsButtonGroup {}

/** Calendar Component */
export class Calendar extends MsCalendar {}

/** Card Component */
export class Card extends MsCard {}

/** Carousel Component */
export class Carousel extends MsCarousel {}

/** Carousel Item Component */
export class CarouselItem extends MsCarouselItem {}

/** Cascader Component */
export class Cascader extends MsCascader {}

/** Checkbox Component */
export class Checkbox extends MsCheckbox {}

/** Checkbox Button Component */
export class CheckboxButton extends MsCheckboxButton {}

/** Checkbox Group Component */
export class CheckboxGroup extends MsCheckboxGroup {}

/** Colunm Layout Component */
export class Col extends MsCol {}

/** Collapse Component */
export class Collapse extends MsCollapse {}

/** Collapse Item Component */
export class CollapseItem extends MsCollapseItem {}

/** Color Picker Component */
export class ColorPicker extends MsColorPicker {}

/** Container Component */
export class Container extends MsContainer {}

/** Date Picker Component */
export class DatePicker extends MsDatePicker {}

/** Layout Component */
export class DefaultLayout extends MsunDefaultLayout {}

/** Dialog Component */
export class Dialog extends MsDialog {}

/** Divider Component */
export class Divider extends MsDivider {}

/** Drawer Component */
export class Drawer extends MsDrawer {}

/** Dropdown Component */
export class Dropdown extends MsDropdown {}

/** Dropdown Item Component */
export class DropdownItem extends MsDropdownItem {}

/** Dropdown Menu Component */
export class DropdownMenu extends MsDropdownMenu {}

/** Footer Component */
export class Footer extends MsFooter {}

/** Form Component */
export class Form extends MsForm {}

/** Form Item Component */
export class FormItem extends MsFormItem {}

/** Header Component */
export class Header extends MsHeader {}

/** Icon Component */
export class Icon extends MsIcon {}

/** Image Component */
export class Image extends MsImage {}

/** InfiniteScroll Directive */
export const InfiniteScroll: PluginObject<MsInfiniteScroll>;

/** Input Component */
export class Input extends MsInput {}

/** Input Number Component */
export class InputNumber extends MsInputNumber {}

/** Layout Component */
export class Layout extends MsLayout {}

/** Link Component */
export class Link extends MsLink {}

/** Show animation while loading data */
export const Loading: MsLoading;

/** Main Component */
export class Main extends MsMain {}

/** Menu that provides navigation for your website */
export class Menu extends MsMenu {}

/** Menu Item Component */
export class MenuItem extends MsMenuItem {}

/** Menu Item Group Component */
export class MenuItemGroup extends MsMenuItemGroup {}

/** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
export const Message: MsMessage;

/** A set of modal boxes simulating system message box, mainly for message prompt, success tips, error messages and query information */
export const MessageBox: MsMessageBox;

/** Displays a global notification message at the upper right corner of the page */
export const Notification: MsNotification;

/** Dropdown Select Option Component */
export class Option extends MsOption {}

/** Dropdown Select Option Group Component */
export class OptionGroup extends MsOptionGroup {}

/** PageHeader Component */
export class PageHeader extends MsPageHeader {}

/** Pagination Component */
export class Pagination extends MsPagination {}

/** Popconfirm Component */
export class Popconfirm extends MsPopconfirm {}

/** Popover Component */
export class Popover extends MsPopover {}

/** Progress Component */
export class Progress extends MsProgress {}

/** Radio Component */
export class Radio extends MsRadio {}

/** Radio Button Component */
export class RadioButton extends MsRadioButton {}

/** Radio Group Component */
export class RadioGroup extends MsRadioGroup {}

/** Rate Component */
export class Rate extends MsRate {}

/** Row Layout Component */
export class Row extends MsRow {}

/** Dropdown Select Component */
export class Select extends MsSelect {}

/** Slider Component */
export class Slider extends MsSlider {}

/** Step Component */
export class Step extends MsStep {}

/** Steps Component */
export class Steps extends MsSteps {}

/** Submenu Component */
export class Submenu extends MsSubmenu {}

/** Switch Component */
export class Switch extends MsSwitch {}

/** Tab Pane Component */
export class TabPane extends MsTabPane {}

/** Table Component */
export class Table extends MsTable {}

/** Table Column Component */
export class TableColumn extends MsTableColumn {}

/** Tabs Component */
export class Tabs extends MsTabs {}

/** Tag Component */
export class Tag extends MsTag {}

/** Timeline Component */
export class Timeline extends MsTimeline {}

/** Timeline Item Component */
export class TimelineItem extends MsTimelineItem {}

/** TimePicker Component */
export class TimePicker extends MsTimePicker {}

/** TimeSelect Component */
export class TimeSelect extends MsTimeSelect {}

/** Tooltip Component */
export class Tooltip extends MsTooltip {}

/** Transfer Component */
export class Transfer extends MsTransfer {}

/** Tree Component */
export class Tree<K = any, D = TreeData> extends MsTree<K, D> {}

/** Upload Component */
export class Upload extends MsUpload {}
