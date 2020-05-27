export interface MsunCookie {
  /** get token */
  getToken(): string | undefined;

  /** set token */
  setToken(value: string | undefined): void;

  /** remove token */
  removeToken(): void;

  /** get language */
  getLanguage(): string | undefined;

  /** set language */
  setLanguage(value: string | undefined): void;

  /** get size */
  getSize(): string | undefined;

  /** set size */
  setSize(value: string | undefined): void;

  /** get font size */
  getFontSize(): string | undefined;

  /** set font size */
  setFontSize(value: string | undefined): void;

  /** get sidebar status */
  getSidebarStatus(): string | undefined;

  /** set sidebar status */
  setSidebarStatus(value: string | undefined): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    /**
     * @todo cookie =>
     */
    $cookie: MsunCookie;
  }
}
