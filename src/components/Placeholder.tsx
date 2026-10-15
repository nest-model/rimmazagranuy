type Props = { label: string; hint?: string; ratio?: string; kind?: 'photo' | 'video'; tone?: 'light' | 'dark' };

/** Временная заглушка под будущие фото и видео. Убирается, как только в content.ts появляется файл. */
export function Placeholder({ label, hint, ratio = '4/5', kind = 'photo', tone = 'light' }: Props) {
  return (
    <div className={`ph ph--${tone}`} style={{ aspectRatio: ratio }} role="img" aria-label={label}>
      <span className="ph__icon" aria-hidden="true">{kind === 'video' ? '▷' : '◻'}</span>
      <span className="ph__label">{label}</span>
      {hint && <span className="ph__hint">{hint}</span>}
    </div>
  );
}
