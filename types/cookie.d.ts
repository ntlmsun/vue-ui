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
}

declare module 'vue/types/vue' {
  interface Vue {
    /**
     * @todo cookie =>
     */
    $cookie: MsunCookie;
  }
}
