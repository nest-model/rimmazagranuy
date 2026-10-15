/* Простые линейные иконки (своё SVG, без библиотек). */
type P = { size?: number };
const base = (size = 22) => ({ width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true });

export const IconHeart = ({ size }: P) => (
  <svg {...base(size)}><path d="M12 20s-7.5-4.4-9-9.3C2 7.2 4.3 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.8 1.2-1.7 2.8-2.8 4.8-2.8 2.9 0 5.2 2.7 4.2 6.2C19.5 15.6 12 20 12 20Z" /></svg>
);
export const IconComment = ({ size }: P) => (
  <svg {...base(size)}><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20l1.2-4.1A8.5 8.5 0 1 1 20.5 11.5Z" /></svg>
);
export const IconSend = ({ size }: P) => (
  <svg {...base(size)}><path d="M21 3 10 14M21 3l-6.5 18-4-7.5L3 9.5 21 3Z" /></svg>
);
export const IconSave = ({ size }: P) => (
  <svg {...base(size)}><path d="M6 3.5h12v17l-6-4.5-6 4.5v-17Z" /></svg>
);
export const IconPhone = ({ size }: P) => (
  <svg {...base(size)}><path d="M5 4h3.5l1.5 4.5-2 1.3a11 11 0 0 0 6.2 6.2l1.3-2 4.5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
);
export const IconArrow = ({ size, dir = 'right' }: P & { dir?: 'left' | 'right' }) => (
  <svg {...base(size)} style={{ transform: dir === 'left' ? 'scaleX(-1)' : undefined }}><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
);
