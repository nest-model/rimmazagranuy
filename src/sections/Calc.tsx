import { quiz } from '../data/content';
import { QuizForm } from '../components/Quiz';

/* Встроенный на странице квиз «Рассчитайте стоимость». */
export function Calc() {
  return (
    <section className="calc section" id="calc" aria-labelledby="calc-title">
      <div className="wrap wrap--narrow">
        <div className="quizcard">
          <h2 id="calc-title" className="quizcard__title">{quiz.title}</h2>
          <QuizForm idPrefix="iq" />
        </div>
      </div>
    </section>
  );
}
