'use client'
export default function Hero() {
  return (
    <section id="inicio" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '96px 24px 64px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(139,26,26,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #8b1a1a, transparent)' }} />

      <div className="fade-in" style={{ position: 'relative', maxWidth: '800px', width: '100%' }}>
        <div style={{ marginBottom: '32px' }}><span className="stamp">Confidencial</span></div>

        <p className="section-label" style={{ marginBottom: '16px' }}>Carlos Montero Rocher presenta</p>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <div style={{ width: '180px', height: '180px', background: 'url(/logo.png) center/contain no-repeat', filter: 'drop-shadow(0 0 30px rgba(139,26,26,0.4))' }} />
        </div>

        <h1 className="font-typewriter flicker" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', letterSpacing: '0.1em', color: 'var(--text-primary)', marginBottom: '12px' }}>
          EL EXPEDIENTE 0
        </h1>

        <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: 'var(--text-secondary)', marginBottom: '32px' }}>
          "Hay archivos que nunca debieron abrirse."
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
          {['Misterio', 'Historia', 'True Crime', 'Arte & Cultura'].map((tag) => (
            <span key={tag} className="font-typewriter" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', padding: '6px 16px', border: '1px solid #2a221a', color: 'var(--text-muted)' }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://www.youtube.com/@elexpediente0" target="_blank" rel="noopener noreferrer" className="btn-primary">▶ Ver en YouTube</a>
          <a href="https://www.ivoox.com/podcast-expediente-0_sq_f13043182_1.html" target="_blank" rel="noopener noreferrer" className="btn-secondary">🎙 Escuchar Podcast</a>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <span className="section-label" style={{ marginBottom: 0 }}>Explorar</span>
        <div style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, var(--accent-gold), transparent)' }} />
      </div>
    </section>
  )
}
