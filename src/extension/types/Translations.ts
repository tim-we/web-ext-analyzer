/**
 * Describes the i18n translations for a single locale.
 * See https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization for details.
 */
export type Translations = Record<
  string,
  {
    message: string;
    description?: string;
    placeholders?: Record<
      string,
      {
        content: string;
        example?: string;
      }
    >;
  }
>;
