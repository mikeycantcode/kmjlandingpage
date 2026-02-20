import Link from 'next/link';

export default function HowDoWeDoItPage() {
  return (
    <main className="stage method-page">
      <div className="method-orb orb-a" />
      <div className="method-orb orb-b" />
      <div className="method-orb orb-c" />

      <section className="hero method-hero">
        <p className="eyebrow method-kicker">KMJ Partners / Method</p>

        <h1 className="method-title">How do we do it?</h1>

        <p className="lead method-sub">Network of pages on X and IG, then AI shortform content.</p>

        <div className="method-grid">
          <article className="method-card">
            <div className="method-spark spark-network" aria-hidden="true" />
            <span>01</span>
            <h2>Network of Pages</h2>
            <p>Build focused pages on X + IG designed to pull in the right audience repeatedly.</p>
          </article>
          <article className="method-card">
            <div className="method-spark spark-ai" aria-hidden="true" />
            <span>02</span>
            <h2>AI Shortform Content</h2>
            <p>Produce high-frequency shortform built from data, hooks, and strong creative rhythm.</p>
          </article>
          <article className="method-card">
            <div className="method-spark spark-loop" aria-hidden="true" />
            <span>03</span>
            <h2>Compound the Loop</h2>
            <p>Scale winners, tighten conversion paths, and keep momentum compounding week to week.</p>
          </article>
        </div>

        <div className="cta-row">
          <Link href="/" className="btn btn-outline">
            Back Home
          </Link>
          <a href="https://t.me/kevinkapital" className="btn btn-solid">
            Book Intro Call
          </a>
        </div>
      </section>
    </main>
  );
}
