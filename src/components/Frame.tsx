import type { CSSProperties } from 'react';
import type { Photo } from '../data/types';
import { asset } from '../lib/asset';
import { useLightbox } from './Lightbox';

type Props = {
  photo: Photo;
  /** переопределить пропорцию рамки (иначе берётся photo.ratio) */
  ratio?: string;
  className?: string;
  eager?: boolean;
  /** список для листания в lightbox; если не передан — фото не кликабельно */
  group?: Photo[];
  showCaption?: boolean;
  sizes?: string;
};

export function Frame({ photo, ratio, className = '', eager, group, showCaption }: Props) {
  const { open } = useLightbox();
  const style = { aspectRatio: ratio ?? photo.ratio ?? '4/5' } as CSSProperties;
  const img = (
    <img
      src={asset(photo.src)}
      alt={photo.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : undefined}
      style={{ objectPosition: photo.pos ?? '50% 50%' }}
    />
  );
  return (
    <figure className={`frame ${className}`}>
      {group ? (
        <button
          type="button"
          className="frame__box frame__box--zoom"
          style={style}
          onClick={() => open(group, Math.max(0, group.indexOf(photo)))}
          aria-label={`Открыть фото: ${photo.alt}`}
        >
          {img}
        </button>
      ) : (
        <div className="frame__box" style={style}>{img}</div>
      )}
      {showCaption && photo.caption && <figcaption className="frame__cap">{photo.caption}</figcaption>}
    </figure>
  );
}
