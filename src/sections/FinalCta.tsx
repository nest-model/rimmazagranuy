import { finalCta, reviewsIntro } from '../data/content';
import { asset } from '../lib/asset';
import { QuizButton } from '../components/Quiz';

/* Бегущая строка из слов гостей + призыв. */
export function FinalCta() {
  const words = [...reviewsIntro.chips, ...reviewsIntro.chips];
  return (
    <section className="final" aria-label="Рассчитать стоимость">
      <div className="ticker" aria-hidden="true">
        <div className="ticker__row">{words.map((w, i) => <span key={i}>{w}</span>)}</div>
      </div>
      <div className="wrap final__in">
        <div className="final__text">
          <p className="final__line">{finalCta.line}</p>
          <QuizButton label={finalCta.button} className="btn btn--black btn--lg" />
        </div>
        <img className="final__cut" src={asset(finalCta.cutout.src)} alt={finalCta.cutout.alt} loading="lazy" />
      </div>
    </section>
  );
}
