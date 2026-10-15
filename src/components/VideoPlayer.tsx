import { useEffect, useRef, useState } from 'react';
import type { Video } from '../data/types';
import { asset } from '../lib/asset';
import { Placeholder } from './Placeholder';

const EVT = 'rimma:video-play';

type Props = { video: Video; tone?: 'light' | 'dark'; className?: string };

/**
 * Видео с обложкой. Звук не включается сам, одновременно играет только одно видео.
 * Поддерживает локальный файл (src) и внешнее видео (embed).
 */
export function VideoPlayer({ video, tone = 'light', className = '' }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const ratio = video.orientation === 'vertical' ? '9/16' : '16/9';

  useEffect(() => {
    const onOther = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== video.id) {
        ref.current?.pause();
        if (video.embed) setStarted(false);
      }
    };
    window.addEventListener(EVT, onOther);
    return () => window.removeEventListener(EVT, onOther);
  }, [video.id, video.embed]);

  if (!video.src && !video.embed) {
    return (
      <div className={`video video--${video.orientation} ${className}`}>
        <Placeholder label={video.caption ?? video.title} hint="место под видео" ratio={ratio} kind="video" tone={tone} />
      </div>
    );
  }

  const start = () => {
    setStarted(true);
    window.dispatchEvent(new CustomEvent(EVT, { detail: video.id }));
    requestAnimationFrame(() => ref.current?.play().catch(() => {}));
  };

  return (
    <div className={`video video--${video.orientation} ${className}`}>
      <div className="video__box" style={{ aspectRatio: ratio }}>
        {video.embed ? (
          started && (
            <iframe
              src={video.embed}
              title={video.title}
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )
        ) : (
          <video
            ref={ref}
            src={asset(video.src)}
            poster={asset(video.poster)}
            preload="none"
            playsInline
            controls={started}
            onPlay={() => window.dispatchEvent(new CustomEvent(EVT, { detail: video.id }))}
          />
        )}
        {!started && (
          <button type="button" className="video__cover" onClick={start} aria-label={`Смотреть видео: ${video.title}`}>
            {video.poster && <img src={asset(video.poster)} alt="" loading="lazy" decoding="async" />}
            <span className="video__play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
            </span>
            <span className="video__meta">
              <span className="video__title">{video.title}</span>
              {video.caption && <span className="video__cap">{video.caption}</span>}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
