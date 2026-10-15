import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import type { Photo } from '../data/types';
import { asset } from '../lib/asset';

type Ctx = { open: (list: Photo[], index: number) => void };
const LightboxCtx = createContext<Ctx>({ open: () => {} });
export const useLightbox = () => useContext(LightboxCtx);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<Photo[]>([]);
  const [index, setIndex] = useState(-1);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);

  const open = useCallback((l: Photo[], i: number) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setList(l); setIndex(i);
  }, []);
  const close = useCallback(() => { setIndex(-1); lastFocus.current?.focus(); }, []);
  const step = useCallback((d: number) => setIndex((i) => (i + d + list.length) % list.length), [list.length]);

  useEffect(() => {
    if (index < 0) return;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [index, close, step]);

  const p = index >= 0 ? list[index] : null;
  return (
    <LightboxCtx.Provider value={{ open }}>
      {children}
      {p && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={p.alt}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <figure className="lightbox__figure" key={p.src}>
            <img src={asset(p.src)} alt={p.alt} />
            {(p.caption || list.length > 1) && (
              <figcaption>
                <span>{p.caption}</span>
                {list.length > 1 && <span className="lightbox__count">{index + 1} / {list.length}</span>}
              </figcaption>
            )}
          </figure>
          <button ref={closeRef} className="lightbox__btn lightbox__close" onClick={close} aria-label="Закрыть">×</button>
          {list.length > 1 && (
            <>
              <button className="lightbox__btn lightbox__prev" onClick={() => step(-1)} aria-label="Предыдущее фото">←</button>
              <button className="lightbox__btn lightbox__next" onClick={() => step(1)} aria-label="Следующее фото">→</button>
            </>
          )}
        </div>
      )}
    </LightboxCtx.Provider>
  );
}
