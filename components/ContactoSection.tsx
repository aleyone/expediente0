'use client'
export default function ContactoSection() {
  return (
    <section id="contacto" className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="section-label" style={{ textAlign: 'center' }}>Comunicaciones</p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '16px' }}>Contacto</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '480px', margin: '0 auto 48px' }}>
          ¿Tienes un caso que merece ser investigado? ¿Quieres proponer una colaboración o un evento? Abre un expediente.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          {[
            { href: 'https://www.youtube.com/@elexpediente0', icon: '▶', label: 'YouTube', sub: '@elexpediente0' },
            { href: 'https://www.ivoox.com/podcast-expediente-0_sq_f13043182_1.html', icon: '🎙', label: 'Podcast', sub: 'EL EXPEDIENTE 0' },
          ].map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="card"
              style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 24px', textDecoration: 'none', minWidth: '200px' }}>
              <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
              <div style={{ textAlign: 'left' }}>
                <div className="font-typewriter" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--text-muted)' }}>{item.label}</div>
                <div className="font-typewriter" style={{ fontSize: '0.65rem', color: 'var(--text-primary)' }}>{item.sub}</div>
              </div>
            </a>
          ))}
        </div>
        <p className="font-typewriter" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Para colaboraciones y prensa: próximamente correo directo</p>
      </div>
    </section>
  )
}
