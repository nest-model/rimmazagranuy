import { useEffect } from 'react';

/** Мягкое появление при прокрутке. Элементы видимы и без JS: анимируется только сдвиг. */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const vh = window.innerHeight;
    // то, что уже на экране при загрузке, не трогаем
    els.forEach((el) => { if (el.getBoundingClientRect().top > vh * 0.92) el.classList.add('reveal-wait'); });
    root.classList.add('has-reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.remove('reveal-wait'); io.unobserve(e.target); }
      }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
