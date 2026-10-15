import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { contacts, packages, quiz, site } from '../data/content';
import { IconArrow } from './Icons';

/* Квиз «Рассчитать стоимость»: 4 шага → ориентир цены из пакетов + готовая заявка.
   Сервера нет: заявка уходит письмом (mailto) или копируется для мессенджера.
   Один и тот же QuizForm стоит на странице и открывается во всплывающем окне. */

type Ctx = { openQuiz: (pkg?: string) => void };
const QuizCtx = createContext<Ctx>({ openQuiz: () => {} });
export const useQuiz = () => useContext(QuizCtx);

const STEPS = 4;
const empty = { format: '', date: '', place: '', guests: '', channel: '', name: '', contact: '', pkg: '' };

export function QuizForm({ pkg = '', idPrefix = 'q' }: { pkg?: string; idPrefix?: string }) {
  const [step, setStep] = useState(1);
  const [a, setA] = useState({ ...empty, pkg, format: pkg === 'Just Кайф' ? 'Антиквиз' : '' });
  const [note, setNote] = useState('');
  const set = (k: keyof typeof empty, v: string) => setA((p) => ({ ...p, [k]: v }));

  const estimate = useMemo(() => {
    const fid = quiz.formats.find((f) => f.label === a.format)?.id ?? '';
    const names = a.pkg ? [a.pkg] : quiz.estimate[fid] ?? quiz.estimate.default;
    return packages.filter((p) => names.includes(p.name));
  }, [a.format, a.pkg]);

  const text = [
    `Здравствуйте, ${site.firstName}! Хочу рассчитать стоимость праздника.`,
    a.format && `Формат: ${a.format}`,
    a.pkg && `Интересует пакет: «${a.pkg}»`,
    a.date && `Дата: ${a.date}`,
    a.place && `Место: ${a.place}`,
    a.guests && `Гостей: ${a.guests}`,
    a.name && `Имя: ${a.name}`,
    a.channel && `Как связаться: ${a.channel}${a.contact ? ` — ${a.contact}` : ''}`,
  ].filter(Boolean).join('\n');

  const canNext = step === 1 ? !!a.format : step === 3 ? !!a.guests : step === 4 ? !!a.channel && !!a.contact.trim() : true;
  const sendMail = () => {
    window.location.href = `${contacts.email.href}?subject=${encodeURIComponent(`Расчёт стоимости: ${a.format}`)}&body=${encodeURIComponent(text)}`;
    setNote(`Если почта не открылась — скопируйте заявку и отправьте на ${contacts.email.display}.`);
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setNote('Заявка скопирована. Вставьте её в сообщение Римме.'); }
    catch { setNote('Не получилось скопировать автоматически — выделите текст заявки вручную.'); }
  };
  const ph = a.channel === 'Telegram' ? '@ник или номер' : a.channel === 'ВКонтакте' ? 'ссылка на страницу' : a.channel === 'На почту' ? 'ваша почта' : 'номер телефона';

  return (
    <div className="qform">
      <div className="qform__body">
        {step === 1 && (
          <fieldset className="qset">
            <legend>Какой праздник планируете?</legend>
            <div className="opts">
              {quiz.formats.map((f) => (
                <button key={f.id} type="button" className="opt" aria-pressed={a.format === f.label} onClick={() => set('format', f.label)}>{f.label}</button>
              ))}
            </div>
          </fieldset>
        )}
        {step === 2 && (
          <fieldset className="qset">
            <legend>Дата и место <small>ответьте по желанию</small></legend>
            <label className="qf"><span>Дата</span><input id={`${idPrefix}-date`} value={a.date} onChange={(e) => set('date', e.target.value)} placeholder="ДД.ММ.ГГГГ" /></label>
            <label className="qf"><span>Место проведения</span><input id={`${idPrefix}-place`} value={a.place} onChange={(e) => set('place', e.target.value)} placeholder="Укажите город или площадку" /></label>
          </fieldset>
        )}
        {step === 3 && (
          <fieldset className="qset">
            <legend>Количество гостей (примерно)</legend>
            <div className="opts">
              {quiz.guests.map((g) => (
                <button key={g} type="button" className="opt" aria-pressed={a.guests === g} onClick={() => set('guests', g)}>{g}</button>
              ))}
            </div>
          </fieldset>
        )}
        {step === 4 && (
          <fieldset className="qset">
            <legend>Кому и как сообщить результат?</legend>
            <div className="opts">
              {quiz.channels.map((c) => (
                <button key={c} type="button" className="opt" aria-pressed={a.channel === c} onClick={() => set('channel', c)}>{c}</button>
              ))}
            </div>
            <label className="qf"><span>Ваше имя</span><input id={`${idPrefix}-name`} value={a.name} onChange={(e) => set('name', e.target.value)} autoComplete="name" /></label>
            <label className="qf"><span>Контакт для ответа</span><input id={`${idPrefix}-contact`} value={a.contact} onChange={(e) => set('contact', e.target.value)} placeholder={ph} /></label>
          </fieldset>
        )}
        {step > STEPS && (
          <div className="qresult">
            <p className="qresult__lead">{quiz.thanks} Ориентир по стоимости:</p>
            <ul className="est">
              {estimate.map((p) => <li key={p.name}><span>Пакет «{p.name}»</span><b>{p.price}</b></li>)}
            </ul>
            <p className="qhint">Точную сумму Римма назовёт после разговора: она зависит от даты, площадки и пожеланий. Трансфер за пределы Липецка оплачивается отдельно.</p>
            <pre className="qtext">{text}</pre>
            <div className="qactions">
              <button type="button" className="btn btn--gold" onClick={sendMail}>Отправить на почту</button>
              <button type="button" className="btn btn--outline-dark" onClick={copy}>Скопировать заявку</button>
            </div>
            <p className="qhint">
              Или напишите сами: <a href={contacts.vk.href} target="_blank" rel="noreferrer">ВКонтакте</a> · <a href={contacts.phone.href}>{contacts.phone.display}</a> ·{' '}
              <a href={contacts.telegram.href} target="_blank" rel="noreferrer">Telegram</a>
            </p>
            {note && <p className="qnote" aria-live="polite">{note}</p>}
            <button type="button" className="qlink" onClick={() => { setStep(1); setA({ ...empty }); setNote(''); }}>Начать заново</button>
          </div>
        )}
      </div>
      {step <= STEPS && (
        <div className="qform__foot">
          <span className="qstep">Шаг: {step}/{STEPS}</span>
          <div className="qnav">
            <button type="button" className="qback" disabled={step === 1} onClick={() => setStep(step - 1)} aria-label="Назад"><IconArrow dir="left" size={18} /></button>
            <button type="button" className="btn btn--gold btn--sm" disabled={!canNext} onClick={() => setStep(step + 1)}>
              {step === STEPS ? 'Рассчитать стоимость' : 'Следующий вопрос'} <IconArrow size={18} />
            </button>
          </div>
        </div>
      )}
      <div className="qform__bar"><i style={{ width: `${(Math.min(step, STEPS) / STEPS) * 100}%` }} /></div>
    </div>
  );
}

export function QuizProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [pkg, setPkg] = useState('');
  const [n, setN] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const openQuiz = useCallback((p?: string) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setPkg(p ?? ''); setN((x) => x + 1); setOpen(true);
  }, []);
  const close = useCallback(() => { setOpen(false); lastFocus.current?.focus(); }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    cardRef.current?.querySelector<HTMLElement>('.opt, input, button')?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open, close]);

  return (
    <QuizCtx.Provider value={{ openQuiz }}>
      {children}
      {open && (
        <div className="modal" onClick={(e) => e.target === e.currentTarget && close()}>
          <div className="modal__card quizcard" role="dialog" aria-modal="true" aria-labelledby="modal-quiz-title" ref={cardRef}>
            <button type="button" className="modal__close" onClick={close} aria-label="Закрыть">×</button>
            <h2 id="modal-quiz-title" className="quizcard__title">{quiz.title}</h2>
            <QuizForm key={n} pkg={pkg} idPrefix="mq" />
          </div>
        </div>
      )}
    </QuizCtx.Provider>
  );
}

/** Кнопка, открывающая квиз из любого места. */
export function QuizButton({ label = site.cta, pkg, className = 'btn btn--gold' }: { label?: string; pkg?: string; className?: string }) {
  const { openQuiz } = useQuiz();
  return <button type="button" className={className} onClick={() => openQuiz(pkg)}>{label}</button>;
}

/** Плавающая кнопка «Рассчитать стоимость». */
export function FloatingQuiz() {
  const { openQuiz } = useQuiz();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > window.innerHeight * 0.6);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <button type="button" className={`fab ${show ? 'is-on' : ''}`} onClick={() => openQuiz()} aria-label="Рассчитать стоимость" tabIndex={show ? 0 : -1}>
      <span className="fab__dot" aria-hidden="true" />Рассчитать стоимость
    </button>
  );
}
