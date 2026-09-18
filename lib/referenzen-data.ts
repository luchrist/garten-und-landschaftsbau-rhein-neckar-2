export interface Referenz {
  id: string;
  /** Short project title, e.g. "Hanggarten mit Sitzmauer". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

// Für diesen Betrieb liegen noch keine freigegebenen Referenzfotos vor. Bis
// echte Vorher/Nachher-Paare vorliegen bleibt die Liste leer, die Sektion auf
// der Startseite blendet sich dann automatisch aus.
export const referenzen: Referenz[] = [];
