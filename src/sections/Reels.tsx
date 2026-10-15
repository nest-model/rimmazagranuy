import { reels } from '../data/content';
import { VideoPlayer } from '../components/VideoPlayer';

export function Reels() {
  return (
    <section className="reels section" id="video" aria-labelledby="reels-title">
      <div className="wrap">
        <h2 id="reels-title" className="h2">{reels.title}</h2>
        <div className="reels__row">
          {reels.items.map((r) => (
            <div key={r.video.id} className="reel">
              <VideoPlayer video={{ ...r.video, title: r.label, orientation: 'vertical' }} tone="dark" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
