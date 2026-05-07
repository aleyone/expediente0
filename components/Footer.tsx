'use client'
export default function Footer() {
  return (
    <footer className="py-12 px-6" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-typewriter text-xs tracking-widest mb-1" style={{ color: 'var(--accent-gold)' }}>
            CARLOS MONTERO ROCHER
          </div>
          <div className="font-typewriter text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>
            EL EXPEDIENTE 0
          </div>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.youtube.com/@elexpediente0"
            target="_blank"
            rel="noopener noreferrer"
            className="font-typewriter text-xs tracking-widest uppercase transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            YouTube
          </a>
          <a
            href="https://www.ivoox.com/podcast-expediente-0_sq_f13043182_1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-typewriter text-xs tracking-widest uppercase transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            Podcast
          </a>
        </div>

        <div className="font-typewriter text-xs" style={{ color: 'var(--text-muted)' }}>
          © 2026 El Expediente 0. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
