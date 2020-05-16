export interface MsunConvert {
  wbConvert(text: string): string;
}

declare module 'vue/types/vue' {
  interface Vue {
    /** 
     * @todo convert => 
     */
    $convert: MsunConvert;
  }
}
