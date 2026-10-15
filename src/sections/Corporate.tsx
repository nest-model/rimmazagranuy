import { corporate } from '../data/content';
import { VideoPlayer } from '../components/VideoPlayer';
import { Frame } from '../components/Frame';

export function Corporate() {
  return (
    <section className="corporate section" id="corporate" aria-labelledby="corp-title">
      <div className="wrap corporate__grid">
        <div className="corporate__text">
          <p className="eyebrow">{corporate.eyebrow}</p>
          <h2 id="corp-title" className="corporate__lead">{corporate.lead}</h2>
          <ul className="words" aria-label="Какие корпоративы">
            {corporate.words.map((w) => <li key={w}>{w}</li>)}
          </ul>
          <p className="lead">{corporate.text}</p>
        </div>
        <div className="corporate__media">
          <VideoPlayer video={corporate.video} tone="dark" className="corporate__video" />
          <div className="corporate__stills">
            {corporate.photos.map((p) => <Frame key={p.src} photo={p} ratio="3/4" group={corporate.photos} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
