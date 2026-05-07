'use client'
export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '48px 24px' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
        <div>
          <div className="font-typewriter" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--accent-gold)', marginBottom: '4px' }}>CARLOS MONTERO ROCHER</div>
          <div className="font-typewriter" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--text-muted)' }}>EL EXPEDIENTE 0</div>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          {[
            { href: 'https://www.youtube.com/@elexpediente0', label: 'YouTube' },
            { href: 'https://www.ivoox.com/podcast-expediente-0_sq_f13043182_1.html', label: 'Podcast' },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="font-typewriter"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="font-typewriter" style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>© 2026 El Expediente 0. Todos los derechos reservados.</div>
      </div>
    </footer>
  )
}
