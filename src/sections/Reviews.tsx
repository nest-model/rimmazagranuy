import { useRef } from 'react';
import { reviews, reviewsIntro } from '../data/content';
import type { Photo } from '../data/types';
import { asset } from '../lib/asset';
import { useLightbox } from '../components/Lightbox';
import { IconArrow } from '../components/Icons';

export function Reviews() {
  const { open } = useLightbox();
  const track = useRef<HTMLDivElement>(null);
  const shots: Photo[] = reviews.map((r) => ({ src: r.screenshot, alt: `Скриншот отзыва: ${r.author}`, caption: `${r.author} · ${r.source}` }));
  const scroll = (dir: 1 | -1) => {
    const el = track.current; if (!el) return;
    const card = el.querySelector<HTMLElement>('.letter');
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 20), behavior: 'smooth' });
  };

  return (
    <section className="reviews section" id="reviews" aria-labelledby="reviews-title">
      <div className="wrap">
        <div className="reviews__head">
          <div>
            <h2 id="reviews-title" className="h2">{reviewsIntro.title}</h2>
            <p className="lead">{reviewsIntro.sub}</p>
          </div>
          <div className="arrows">
            <button type="button" className="arrow" onClick={() => scroll(-1)} aria-label="Предыдущий отзыв"><IconArrow dir="left" /></button>
            <button type="button" className="arrow" onClick={() => scroll(1)} aria-label="Следующий отзыв"><IconArrow /></button>
          </div>
        </div>
        <ul className="chips" aria-label="Коротко из комментариев">
          {reviewsIntro.chips.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>
      <div className="track" ref={track} tabIndex={0} aria-label="Отзывы, листаются вбок">
        {reviews.map((r, i) => (
          <article key={r.screenshot} className={`letter ${r.featured ? 'letter--featured' : ''}`}>
            <div className="letter__meta">
              <span className="letter__occasion">{r.occasion}</span>
              <span className="letter__source">{r.source}</span>
            </div>
            <blockquote className="letter__quote"><p>{r.quote}</p></blockquote>
            <p className="letter__author">
              {r.author}
              {r.date && <span className="letter__date"> · {r.date}</span>}
            </p>
            <button type="button" className="letter__shot" onClick={() => open(shots, i)} aria-label={`Открыть оригинал отзыва: ${r.author}`}>
              <img src={asset(r.screenshot)} alt="" loading="lazy" decoding="async" />
              <span className="letter__shot-label">Оригинал отзыва</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
