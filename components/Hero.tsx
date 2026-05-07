'use client'
export default function Hero() {
  return (
    <section id="inicio" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(139,26,26,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #8b1a1a, transparent)' }} />

      <div className="fade-in" style={{ position: 'relative', maxWidth: '800px', width: '100%' }}>
        <div style={{ marginBottom: '32px' }}><span className="stamp">Confidencial</span></div>

        <p style={{ fontFamily: "'Special Elite', monospace", fontSize: '0.8rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '20px' }}>
          Carlos Montero Rocher presenta
        </p>

        {/* Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <img
            src="/logo.png"
            alt="El Expediente 0"
            style={{ width: '200px', height: '200px', objectFit: 'contain', filter: 'drop-shadow(0 0 30px rgba(139,26,26,0.4))' }}
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>

        <h1 className="font-typewriter flicker" style={{ fontSize: 'clamp(2rem, 5.5vw, 3.8rem)', letterSpacing: '0.1em', color: 'var(--text-primary)', marginBottom: '16px' }}>
          EL EXPEDIENTE 0
        </h1>

        <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: 'var(--text-secondary)', marginBottom: '40px' }}>
          "Hay archivos que nunca debieron abrirse."
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '48px' }}>
          {['Misterio', 'Historia', 'True Crime', 'Arte & Cultura'].map((tag) => (
            <span key={tag} style={{ fontFamily: "'Special Elite', monospace", fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '8px 18px', border: '1px solid #2a221a', color: 'var(--text-muted)' }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '64px' }}>
          <a href="https://www.youtube.com/@elexpediente0" target="_blank" rel="noopener noreferrer" className="btn-primary">▶ Ver en YouTube</a>
          <a href="https://www.ivoox.com/podcast-expediente-0_sq_f13043182_1.html" target="_blank" rel="noopener noreferrer" className="btn-secondary">🎙 Escuchar Podcast</a>
        </div>

        {/* Scroll indicator — debajo de los botones, no absoluto */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontFamily: "'Special Elite', monospace", fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Explorar</span>
          <div style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, var(--accent-gold), transparent)' }} />
        </div>
      </div>
    </section>
  )
}
