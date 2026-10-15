import { benefits } from '../data/content';

export function Benefits() {
  return (
    <section className="benefits section" aria-labelledby="benefits-title">
      <div className="wrap">
        <h2 id="benefits-title" className="h2">{benefits.title}</h2>
        <ul className="bens">
          {benefits.items.map((b) => (
            <li key={b.title} className="ben" data-reveal>
              <h3 className="ben__title">{b.title}</h3>
              <p className="ben__text">{b.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
