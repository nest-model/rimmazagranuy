import { facts, intro } from '../data/content';
import { Frame } from '../components/Frame';
import { useQuiz } from '../components/Quiz';

export function Intro() {
  const { openQuiz } = useQuiz();
  return (
    <section className="intro" id="about" aria-labelledby="intro-title">
      {/* белый фон фотографии растянут на весь блок */}
      <div className="intro__band">
        <div className="wrap intro__grid">
          <Frame photo={intro.postPhoto} className="intro__photo" />
          <div className="intro__text">
            <h2 id="intro-title" className="h2">{intro.title}</h2>
            {intro.story.map((t) => <p key={t}>{t}</p>)}
            <p className="intro__quote">{intro.quote}</p>
            <p>
              {intro.inviteBefore}
              <button type="button" className="inline-link" onClick={() => openQuiz()}>{intro.inviteLink}</button>
              {intro.inviteAfter}
            </p>
          </div>
        </div>
      </div>
      <div className="wrap intro__facts">
        <h3 className="facts__title">{intro.factsLead}</h3>
        <ul className="facts">
          {facts.map((f) => (
            <li key={f.text} className="fact" data-reveal>
              <span className="fact__tag">{f.tag}</span>
              <span>{f.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
