export type Photo = {
  src: string;
  alt: string;
  /** пропорция для резерва места, напр. '4/5' или '1186/1600' */
  ratio?: string;
  /** кадрирование: CSS object-position, напр. '50% 20%' */
  pos?: string;
  caption?: string;
};

export type Video = {
  id: string;
  /** локальный файл 'media/video/x.mp4'. Пусто — показывается заглушка */
  src: string;
  poster?: string;
  /** внешнее видео (VK / YouTube / Rutube): ссылка для встраивания iframe */
  embed?: string;
  title: string;
  caption?: string;
  orientation: 'vertical' | 'horizontal';
};

export type GalleryCategory = 'portrait' | 'wedding' | 'corporate' | 'event';
export type GallerySize = 's' | 'm' | 'l' | 'wide';

export type GalleryItem =
  | { type: 'photo'; photo: Photo; category: GalleryCategory; size: GallerySize }
  | { type: 'video'; video: Video; category: GalleryCategory; size: GallerySize };

export type Review = {
  occasion: string;
  source: string;
  quote: string;
  author: string;
  date?: string;
  screenshot: string;
  featured?: boolean;
};

export type Pkg = {
  name: string;
  kind: string;
  price: string;
  items: string[];
  extras: string[];
  featured?: boolean;
};

export type Fact = { tag: string; text: string };

export type ContactLink = { label: string; display: string; href: string };
