import Vuex from 'vuex';

export declare class Store<S> extends Vuex.Store<S> {}

declare module 'vue/types/vue' {
  interface Vue {
    /**
     * @todo store =>
     */
    $mStore: Store<any>;
  }
}
