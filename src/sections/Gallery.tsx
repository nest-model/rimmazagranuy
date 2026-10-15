import { useMemo, useState } from 'react';
import { gallery, galleryIntro } from '../data/content';
import type { Photo } from '../data/types';
import { Frame } from '../components/Frame';
import { VideoPlayer } from '../components/VideoPlayer';

export function Gallery() {
  const [all, setAll] = useState(false);
  const items = all ? gallery : gallery.slice(0, galleryIntro.visible);
  const photos = useMemo(() => gallery.flatMap((g) => (g.type === 'photo' ? [g.photo] : [])) as Photo[], []);
  const hasMore = gallery.length > galleryIntro.visible;
  return (
    <section className="gallery section" id="gallery" aria-labelledby="gallery-title">
      <div className="wrap">
        <h2 id="gallery-title" className="h2">{galleryIntro.title}</h2>
        <div className="tiles">
          {items.map((g, i) => (
            <div key={g.type === 'photo' ? g.photo.src : g.video.id} className={`tile ${i % 5 === 0 ? 'tile--tall' : ''}`} style={{ ['--d' as string]: `${(i % 6) * 50}ms` }}>
              {g.type === 'photo' ? <Frame photo={g.photo} ratio="auto" group={photos} /> : <VideoPlayer video={g.video} tone="dark" />}
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="gallery__more">
            <button type="button" className="btn btn--ghost" onClick={() => setAll((v) => !v)} aria-expanded={all}>
              {all ? galleryIntro.less : `${galleryIntro.more} · ещё ${gallery.length - galleryIntro.visible}`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
