export interface MsunConvert {
  /** 获取五笔码 */
  wbConvert(text: string | null): string;

  /** 获取全拼码 */
  fullConvert(text: string | null): string;

  /** 获取简拼码 */
  SimpConvert(text: string | null): string;
}

declare module 'vue/types/vue' {
  interface Vue {
    /** 
     * @todo convert => 
     */
    $convert: MsunConvert;
  }
}
