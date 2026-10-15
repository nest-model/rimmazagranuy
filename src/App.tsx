import { LightboxProvider } from './components/Lightbox';
import { FloatingQuiz, QuizProvider } from './components/Quiz';
import { useReveal } from './lib/useReveal';
import { Hero } from './sections/Hero';
import { Reels } from './sections/Reels';
import { Intro } from './sections/Intro';
import { Gallery } from './sections/Gallery';
import { Calc } from './sections/Calc';
import { Benefits } from './sections/Benefits';
import { Wedding } from './sections/Wedding';
import { Corporate } from './sections/Corporate';
import { Forum } from './sections/Forum';
import { Packages } from './sections/Packages';
import { Reviews } from './sections/Reviews';
import { Agency } from './sections/Agency';
import { FinalCta } from './sections/FinalCta';
import { Contacts } from './sections/Contacts';
import { Footer } from './sections/Footer';

/* Структура по референсу: имя + фото в круге → видео → «Приятно познакомиться!» → фото →
   квиз → «Что вы получите» → свадьба / корпоративы / форум → пакеты → отзывы → агентство → кнопка → контакты. */
export default function App() {
  useReveal();
  return (
    <LightboxProvider>
      <QuizProvider>
        <a className="skip" href="#about">Перейти к содержанию</a>
        <main>
          <Hero />
          <Reels />
          <Intro />
          <Gallery />
          <Calc />
          <Benefits />
          <Wedding />
          <Corporate />
          <Forum />
          <Packages />
          <Reviews />
          <Agency />
          <FinalCta />
          <Contacts />
        </main>
        <Footer />
        <FloatingQuiz />
      </QuizProvider>
    </LightboxProvider>
  );
}
