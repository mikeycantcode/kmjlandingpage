'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const SHAPES = [
  { id: 'a', className: 'shape-a' },
  { id: 'b', className: 'shape-b' },
  { id: 'c', className: 'shape-c' },
  { id: 'd', className: 'shape-d' },
  { id: 'e', className: 'shape-e' },
  { id: 'f', className: 'shape-f' },
  { id: 'g', className: 'shape-g' },
  { id: 'h', className: 'shape-h' }
];

export default function HomePage() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [isPressing, setIsPressing] = useState(false);

  useEffect(() => {
    setPointer({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  }, []);

  const handleMove = (event) => {
    setPointer({ x: event.clientX, y: event.clientY });
  };

  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    setPointer({ x: touch.clientX, y: touch.clientY });
  };

  const handleLeave = () => {
    setIsPressing(false);
    setPointer({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  };

  return (
    <main
      className={`stage ${isPressing ? 'pressing' : ''}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseDown={() => setIsPressing(true)}
      onMouseUp={() => setIsPressing(false)}
      onTouchStart={() => setIsPressing(true)}
      onTouchEnd={() => setIsPressing(false)}
      onTouchMove={handleTouchMove}
      style={{
        '--mx': `${pointer.x}px`,
        '--my': `${pointer.y}px`
      }}
    >
      {SHAPES.map((shape) => (
        <div key={shape.id} className={`shape ${shape.className}`} />
      ))}

      <section className="hero">
        <p className="eyebrow">kmj.partners / marketing agency</p>

        <h1>
          KMJ Partners
        </h1>

        <p className="lead lead-small">Digital growth + marketing for creators and online brands.</p>
        <p className="lead">We scale audience, sharpen distribution, and turn attention into revenue.</p>

        <div className="cta-row">
          <a href="https://t.me/kevinkapital" className="btn btn-solid">
            Book Intro Call
          </a>
          <Link href="/how-do-we-do-it" className="btn btn-outline">
            How do we do it?
          </Link>
        </div>
      </section>

      <aside className="metrics">
        <div>
          <span>Impressions</span>
          <strong>1B+</strong>
        </div>
        <div>
          <span>Followers Built</span>
          <strong>1M+</strong>
        </div>
        <div>
          <span>Revenue Growth</span>
          <strong>$600K+</strong>
        </div>
      </aside>
    </main>
  );
}
