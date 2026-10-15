import { packages, services } from '../data/content';
import { QuizButton } from '../components/Quiz';

export function Packages() {
  return (
    <section className="services section" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <h2 id="services-title" className="h2 center">{services.title}</h2>
        <div className="pkgs">
          {packages.map((p) => (
            <article key={p.name} className={`pkg ${p.featured ? 'pkg--featured' : ''}`}>
              <header className="pkg__head">
                <h3 className="pkg__name">{p.name}</h3>
                <p className="pkg__kind">{p.kind}</p>
              </header>
              <ul className="pkg__list">{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
              {p.extras.length > 0 && <ul className="pkg__extras">{p.extras.map((e) => <li key={e}>+ {e}</li>)}</ul>}
              <p className="pkg__price">{p.price}</p>
              <QuizButton pkg={p.name} label="Рассчитать стоимость" className="btn btn--gold btn--sm pkg__cta" />
            </article>
          ))}
        </div>
        <p className="services__note center">{services.note}</p>
      </div>
    </section>
  );
}
