'use client'
export default function ContactoSection() {
  return (
    <section id="contacto" className="py-24 px-6" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="section-label mb-3">Comunicaciones</p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
          Contacto
        </h2>
        <p className="mb-12" style={{ color: 'var(--text-secondary)' }}>
          ¿Tienes un caso que merece ser investigado? ¿Quieres proponer una colaboración o un evento?
          Abre un expediente.
        </p>

        {/* Contact links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://www.youtube.com/@elexpediente0"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover flex items-center gap-3 px-6 py-4 rounded-sm"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', textDecoration: 'none' }}
          >
            <span style={{ fontSize: '1.2rem' }}>▶</span>
            <div className="text-left">
              <div className="font-typewriter text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>YouTube</div>
              <div className="font-typewriter text-xs" style={{ color: 'var(--text-primary)' }}>@elexpediente0</div>
            </div>
          </a>
          <a
            href="https://www.ivoox.com/podcast-expediente-0_sq_f13043182_1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover flex items-center gap-3 px-6 py-4 rounded-sm"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', textDecoration: 'none' }}
          >
            <span style={{ fontSize: '1.2rem' }}>🎙</span>
            <div className="text-left">
              <div className="font-typewriter text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>Podcast</div>
              <div className="font-typewriter text-xs" style={{ color: 'var(--text-primary)' }}>EL EXPEDIENTE 0</div>
            </div>
          </a>
        </div>

        <p className="font-typewriter text-xs" style={{ color: 'var(--text-muted)' }}>
          Para colaboraciones y prensa: próximamente correo directo
        </p>
      </div>
    </section>
  )
}
