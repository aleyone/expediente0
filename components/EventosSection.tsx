'use client'
export default function EventosSection() {
  return (
    <section id="eventos" className="py-24 px-6" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-3">En directo</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
            Eventos
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px' }}>
            Conferencias, presentaciones y encuentros donde los expedientes cobran vida.
          </p>
        </div>

        {/* Coming soon state */}
        <div
          className="flex flex-col items-center justify-center py-20 rounded-sm"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
        >
          <div className="stamp mb-6">Próximamente</div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem',
              color: 'var(--text-secondary)',
              marginBottom: '0.75rem',
            }}
          >
            Los primeros eventos están en preparación
          </h3>
          <p
            className="text-center max-w-md"
            style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}
          >
            Conferencias, presentaciones y encuentros donde investigaremos juntos los casos más enigmáticos.
            Suscríbete al canal para estar al tanto.
          </p>
          <div className="mt-8">
            <a
              href="https://www.youtube.com/@elexpediente0"
              target="_blank"
              rel="noopener noreferrer"
              className="font-typewriter text-xs tracking-widest uppercase px-6 py-2.5 inline-block transition-all duration-200"
              style={{ border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-gold)'
                e.currentTarget.style.color = 'var(--accent-gold)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)'
                e.currentTarget.style.color = 'var(--text-muted)'
              }}
            >
              Suscribirse al canal →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
