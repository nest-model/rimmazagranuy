import { contacts, hero, site, stats } from '../data/content';
import { asset } from '../lib/asset';
import { QuizButton } from '../components/Quiz';

/* Имя крупно, справа портрет на графитовом фоне — края мягко растворяются в чёрном. Без золота. */
export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <p className="hero__cities">{hero.cities}</p>
          <h1 id="hero-title" className="hero__name">
            <span>{site.firstName}</span>
            <span>{site.lastName}</span>
          </h1>
          <p className="hero__role">{hero.role}</p>
          <div className="hero__cta">
            <QuizButton className="btn btn--light btn--lg" label="Рассчитать стоимость" />
            <a className="btn btn--ghost btn--lg" href={contacts.phone.href}>{contacts.phone.display}</a>
          </div>
        </div>
        <div className="hero__visual">
          <img className="hero__photo" src={asset(hero.photo.src)} alt={hero.photo.alt} fetchPriority="high" decoding="async" />
        </div>
      </div>
      <ul className="wrap stats" aria-label="Коротко обо мне">
        {stats.map((s) => (
          <li key={s.value}><b>{s.value}</b><span>{s.label}</span></li>
        ))}
      </ul>
    </section>
  );
}
