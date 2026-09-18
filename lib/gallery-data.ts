export interface GalleryItem {
  src: string;
  alt: string;
}

// Für diesen Betrieb liegen noch keine kuratierten Galerie-Fotos vor. Die
// Galerie-Komponente fällt in diesem Fall auf ihre Template-Platzhalter
// zurück, bis der Bildpool ergänzt ist.
export const galleryItems: GalleryItem[] = [];
