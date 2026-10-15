import { forum } from '../data/content';
import { VideoPlayer } from '../components/VideoPlayer';
import { Frame } from '../components/Frame';
import { Placeholder } from '../components/Placeholder';

export function Forum() {
  return (
    <section className="forum section" id="forum" aria-labelledby="forum-title">
      <div className="wrap">
        <div className="forum__card">
          <div className="forum__top">
            <div className="forum__num" aria-hidden="true">
              <span className="forum__digits">{forum.number}</span>
              <span className="forum__unit">{forum.numberLabel}</span>
            </div>
            <div className="forum__text">
              <p className="eyebrow">{forum.eyebrow}</p>
              <h2 id="forum-title" className="h3">{forum.title}</h2>
              {forum.text.map((t) => <p key={t}>{t}</p>)}
              <ol className="route" aria-label="Города форума">
                {forum.route.map((r, i) => (
                  <li key={r.city} className={`route__stop ${i === forum.route.length - 1 ? 'is-next' : ''}`}>
                    <span className="route__dot" aria-hidden="true" />
                    <span className="route__city">{r.city}</span>
                    <span className="route__status">{r.status}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="forum__media">
            <VideoPlayer video={forum.video} tone="dark" />
            <div className="forum__photos">
              {forum.photos.length > 0
                ? forum.photos.map((p) => <Frame key={p.src} photo={p} ratio="16/9" group={forum.photos} showCaption />)
                : ['Фото с форума в Липецке', 'Фото с форума в Белгородской области'].map((l) => <Placeholder key={l} label={l} hint="место под фото" ratio="16/9" tone="dark" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
