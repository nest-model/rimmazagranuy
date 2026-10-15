import { useState } from 'react';

export function CopyButton({ text, label = 'Скопировать' }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {
      // буфер недоступен — выделяем текст рядом, чтобы скопировать вручную
      const sel = window.getSelection();
      const node = document.querySelector(`[data-copy="${CSS.escape(text)}"]`);
      if (sel && node) { const r = document.createRange(); r.selectNodeContents(node); sel.removeAllRanges(); sel.addRange(r); }
    }
  };
  return (
    <button type="button" className="copy" onClick={copy} aria-live="polite">
      {done ? 'Скопировано' : label}
    </button>
  );
}
