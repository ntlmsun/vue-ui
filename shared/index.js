/* Automatically generated by './build/bin/build-entry.js' */

import Alert from '../packages/alert/index.js';
import Aside from '../packages/aside/index.js';
import Autocomplete from '../packages/autocomplete/index.js';
import Avatar from '../packages/avatar/index.js';
import Backtop from '../packages/backtop/index.js';
import Badge from '../packages/badge/index.js';
import Breadcrumb from '../packages/breadcrumb/index.js';
import BreadcrumbItem from '../packages/breadcrumb-item/index.js';
import Button from '../packages/button/index.js';
import ButtonGroup from '../packages/button-group/index.js';
import Calendar from '../packages/calendar/index.js';
import Card from '../packages/card/index.js';
import Carousel from '../packages/carousel/index.js';
import CarouselItem from '../packages/carousel-item/index.js';
import Cascader from '../packages/cascader/index.js';
import CascaderPanel from '../packages/cascader-panel/index.js';
import Checkbox from '../packages/checkbox/index.js';
import CheckboxButton from '../packages/checkbox-button/index.js';
import CheckboxGroup from '../packages/checkbox-group/index.js';
import Col from '../packages/col/index.js';
import Collapse from '../packages/collapse/index.js';
import CollapseItem from '../packages/collapse-item/index.js';
import ColorPicker from '../packages/color-picker/index.js';
import Container from '../packages/container/index.js';
import DatePicker from '../packages/date-picker/index.js';
import DefaultLayout from '../packages/default-layout/index.js';
import Dialog from '../packages/dialog/index.js';
import Divider from '../packages/divider/index.js';
import Drawer from '../packages/drawer/index.js';
import Dropdown from '../packages/dropdown/index.js';
import DropdownMenu from '../packages/dropdown-menu/index.js';
import DropdownItem from '../packages/dropdown-item/index.js';
import Footer from '../packages/footer/index.js';
import Form from '../packages/form/index.js';
import FormItem from '../packages/form-item/index.js';
import Header from '../packages/header/index.js';
import Icon from '../packages/icon/index.js';
import Image from '../packages/image/index.js';
import InfiniteScroll from '../packages/infinite-scroll/index.js';
import Input from '../packages/input/index.js';
import InputNumber from '../packages/input-number/index.js';
import Layout from '../packages/layout/index.js';
import Link from '../packages/link/index.js';
import Loading from '../packages/loading/index.js';
import Main from '../packages/main/index.js';
import Menu from '../packages/menu/index.js';
import MenuItem from '../packages/menu-item/index.js';
import MenuItemGroup from '../packages/menu-item-group/index.js';
import Message from '../packages/message/index.js';
import MessageBox from '../packages/message-box/index.js';
import Notification from '../packages/notification/index.js';
import Option from '../packages/option/index.js';
import OptionGroup from '../packages/option-group/index.js';
import PageHeader from '../packages/page-header/index.js';
import Pagination from '../packages/pagination/index.js';
import Popconfirm from '../packages/popconfirm/index.js';
import Popover from '../packages/popover/index.js';
import Progress from '../packages/progress/index.js';
import Radio from '../packages/radio/index.js';
import RadioGroup from '../packages/radio-group/index.js';
import RadioButton from '../packages/radio-button/index.js';
import Rate from '../packages/rate/index.js';
import Row from '../packages/row/index.js';
import Scrollbar from '../packages/scrollbar/index.js';
import Select from '../packages/select/index.js';
import Slider from '../packages/slider/index.js';
import Spinner from '../packages/spinner/index.js';
import Step from '../packages/step/index.js';
import Steps from '../packages/steps/index.js';
import Submenu from '../packages/submenu/index.js';
import Switch from '../packages/switch/index.js';
import TabPane from '../packages/tab-pane/index.js';
import Table from '../packages/table/index.js';
import TableColumn from '../packages/table-column/index.js';
import Tabs from '../packages/tabs/index.js';
import Tag from '../packages/tag/index.js';
import TimePicker from '../packages/time-picker/index.js';
import TimeSelect from '../packages/time-select/index.js';
import Timeline from '../packages/timeline/index.js';
import TimelineItem from '../packages/timeline-item/index.js';
import Tooltip from '../packages/tooltip/index.js';
import Transfer from '../packages/transfer/index.js';
import Tree from '../packages/tree/index.js';
import Upload from '../packages/upload/index.js';
import oAxiosInterceptor from '../shared/utils/axios/axios.js';
import { Startup } from '../shared/utils/axios/startup.js';
import mStore from '../shared/utils/store/index.js';
import Http from '../shared/utils/http/index.js';
import Convert from '../shared/utils/convert/index.js';
import Cookie from '../shared/utils/cookie/index.js';
import Permission from '../shared/utils/permission/permission.js';
import '../packages/icons/components';
import SvgIcon from 'vue-svgicon';
import Router from 'vue-router';
import * as directives from '../shared/directives';
import locale from 'msun-lib-ui/shared/locale';
import CollapseTransition from 'msun-lib-ui/shared/transitions/collapse-transition';

const components = [
  Alert,
  Aside,
  Autocomplete,
  Avatar,
  Backtop,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  CascaderPanel,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Container,
  DatePicker,
  DefaultLayout,
  Dialog,
  Divider,
  Drawer,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Footer,
  Form,
  FormItem,
  Header,
  Icon,
  Image,
  Input,
  InputNumber,
  Layout,
  Link,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Option,
  OptionGroup,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  RadioGroup,
  RadioButton,
  Rate,
  Row,
  Scrollbar,
  Select,
  Slider,
  Spinner,
  Step,
  Steps,
  Submenu,
  Switch,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  Tag,
  TimePicker,
  TimeSelect,
  Timeline,
  TimelineItem,
  Tooltip,
  Transfer,
  Tree,
  Upload,
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key])
  })

  Vue.use(InfiniteScroll);
  Vue.use(Loading.directive);
  Vue.prototype.$MSUN = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }

  Vue.use(SvgIcon, {
    tagName: 'svg-icon',
    defaultWidth: '1em',
    defaultHeight: '1em'
  });

  Vue.use(Router);

  Vue.prototype.$convert = Convert;
  Vue.prototype.$http = Http;
  Vue.prototype.$cookie = Cookie;
  Vue.prototype.$mStore = mStore;
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

  oAxiosInterceptor.init();

  Startup.bootstrap();
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.5-beta.0.6',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Http,
  Convert,
  Cookie,
  mStore,
  Permission,
  CollapseTransition,
  Loading,
  Alert,
  Aside,
  Autocomplete,
  Avatar,
  Backtop,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  CascaderPanel,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Container,
  DatePicker,
  DefaultLayout,
  Dialog,
  Divider,
  Drawer,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Footer,
  Form,
  FormItem,
  Header,
  Icon,
  Image,
  InfiniteScroll,
  Input,
  InputNumber,
  Layout,
  Link,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Message,
  MessageBox,
  Notification,
  Option,
  OptionGroup,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  RadioGroup,
  RadioButton,
  Rate,
  Row,
  Scrollbar,
  Select,
  Slider,
  Spinner,
  Step,
  Steps,
  Submenu,
  Switch,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  Tag,
  TimePicker,
  TimeSelect,
  Timeline,
  TimelineItem,
  Tooltip,
  Transfer,
  Tree,
  Upload
};
