/* Фото и видео, которые просто положили в папку uploads/ — подхватываются автоматически при сборке.
   Фото уменьшаются до 1600 px и сжимаются в webp (vite-imagetools). */
import type { Photo, Video } from './types';

type UrlMap = Record<string, string>;

const galleryImgs = import.meta.glob('../../uploads/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, query: '?w=1600&format=webp&quality=78', import: 'default' }) as UrlMap;
const forumImgs = import.meta.glob('../../uploads/forum/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, query: '?w=1600&format=webp&quality=78', import: 'default' }) as UrlMap;
const agencyImgs = import.meta.glob('../../uploads/agency/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, query: '?w=1600&format=webp&quality=78', import: 'default' }) as UrlMap;

const extraVideos = import.meta.glob('../../uploads/videos/*.{mp4,MP4,mov,MOV,webm}', { eager: true, query: '?url', import: 'default' }) as UrlMap;
const forumVideos = import.meta.glob('../../uploads/forum-video/*.{mp4,MP4,mov,MOV,webm}', { eager: true, query: '?url', import: 'default' }) as UrlMap;
const agencyVideos = import.meta.glob('../../uploads/agency-video/*.{mp4,MP4,mov,MOV,webm}', { eager: true, query: '?url', import: 'default' }) as UrlMap;

/** имя файла без папки и расширения: '…/Свадьба 03.07.mp4' → 'Свадьба 03.07' */
const nameOf = (path: string) => decodeURIComponent(path.split('/').pop() ?? '').replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').trim();
const sorted = (m: UrlMap) => Object.keys(m).sort((a, b) => a.localeCompare(b, 'ru', { numeric: true }));

const toPhotos = (m: UrlMap, alt: string): Photo[] =>
  sorted(m).map((k) => ({ src: m[k], alt, ratio: '3/4', pos: '50% 35%' }));

const toVideos = (m: UrlMap, prefix: string): Video[] =>
  sorted(m).map((k, i) => ({ id: `${prefix}-${i}`, src: m[k], title: nameOf(k), orientation: 'vertical' }));

export const uploaded = {
  gallery: toPhotos(galleryImgs, 'Фото с мероприятия Риммы Сковородниковой'),
  forum: toPhotos(forumImgs, 'Форум для event-специалистов'),
  agency: toPhotos(agencyImgs, 'Мероприятие агентства «За гранью»'),
  videos: toVideos(extraVideos, 'up'),
  forumVideo: toVideos(forumVideos, 'forum')[0] as Video | undefined,
  agencyVideo: toVideos(agencyVideos, 'agency')[0] as Video | undefined,
};
