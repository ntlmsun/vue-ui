import { VNodeDirective } from 'vue';

export interface ElSelectTableDrag extends VNodeDirective {
  name: 'select-table-drag';
  value: Function;
}
