import { VNodeDirective } from 'vue';

export interface MsInfiniteScroll extends VNodeDirective {
  name: 'infinite-scroll';
  value: Function;
}
