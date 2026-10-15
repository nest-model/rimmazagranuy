import { wedding } from '../data/content';
import { VideoPlayer } from '../components/VideoPlayer';
import { Frame } from '../components/Frame';

export function Wedding() {
  return (
    <section className="wedding section" id="wedding" aria-labelledby="wedding-title">
      <div className="wrap">
        <p className="eyebrow">{wedding.eyebrow}</p>
        <h2 id="wedding-title" className="h2">{wedding.title}</h2>
        <div className="wedding__grid">
          <div className="wedding__media">
            <VideoPlayer video={wedding.video} tone="dark" />
          </div>
          <div className="wedding__text">
            {wedding.intro.map((t) => <p key={t} className="lead">{t}</p>)}
            <ul className="tags" aria-label="Что входит в организацию">
              {wedding.checklist.map((c) => <li key={c} className={c.length > 40 ? 'tag tag--wide' : 'tag'}>{c}</li>)}
            </ul>
            <p className="lead">{wedding.tail}</p>
            <div className="wedding__photos">
              {wedding.photos.map((p) => <Frame key={p.src} photo={p} ratio="4/5" group={wedding.photos} showCaption />)}
            </div>
          </div>
        </div>
        <div className="verdict" data-reveal>
          <p className="verdict__lead">{wedding.verdictLead}</p>
          <p className="verdict__a">{wedding.verdictA}</p>
          <p className="verdict__b">{wedding.verdictB}</p>
        </div>
      </div>
    </section>
  );
}
