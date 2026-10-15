import { agency } from '../data/content';
import { asset } from '../lib/asset';
import { VideoPlayer } from '../components/VideoPlayer';
import { Frame } from '../components/Frame';

export function Agency() {
  return (
    <section className="agency section" id="agency" aria-labelledby="agency-title">
      <div className="wrap">
        <p className="agency__bridge">{agency.bridge}</p>
        <div className="agency__head">
          <h2 id="agency-title" className="agency__logo">
            <img src={asset(agency.logo)} alt={`Агентство «${agency.name}» events`} loading="lazy" />
          </h2>
          <div className="agency__intro">
            <p className="agency__tagline">{agency.tagline}</p>
            <p className="agency__cities">{agency.cities.join(' · ')}</p>
            <p className="agency__text">{agency.text}</p>
          </div>
        </div>
        <VideoPlayer video={agency.video} tone="dark" className="agency__film" />
        <ul className="agency__services">
          {agency.services.map((s) => (
            <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>
          ))}
        </ul>
        <p className="agency__note">{agency.servicesNote}</p>
        <h3 className="agency__ph">{agency.photosTitle}</h3>
        <div className="agency__photos">
          {agency.photos.map((p) => <Frame key={p.src} photo={p} ratio="3/4" group={agency.photos} showCaption />)}
        </div>
      </div>
    </section>
  );
}
