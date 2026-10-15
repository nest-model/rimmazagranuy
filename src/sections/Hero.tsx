import { contacts, hero, site, stats } from '../data/content';
import { asset } from '../lib/asset';
import { QuizButton } from '../components/Quiz';

/* Имя крупно, фото-вырезка в золотой арке с линиями из логотипа «За гранью», цифры под ним. */
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
            <QuizButton className="btn btn--gold btn--lg" label="Рассчитать стоимость" />
            <a className="btn btn--ghost btn--lg" href={contacts.phone.href}>{contacts.phone.display}</a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="arch" aria-hidden="true" />
          <svg className="peak" viewBox="0 0 400 140" aria-hidden="true" preserveAspectRatio="none">
            <path d="M0 132 L140 8 L400 118" /><path d="M0 138 L360 84" />
          </svg>
          <img className="hero__cut" src={asset(hero.cutout.src)} alt={hero.cutout.alt} fetchPriority="high" />
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
