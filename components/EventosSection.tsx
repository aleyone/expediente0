'use client'
export default function EventosSection() {
  return (
    <section id="eventos" className="section">
      <div className="container">
        <div style={{ marginBottom: '64px' }}>
          <p className="section-label">En directo</p>
          <h2 className="section-title">Eventos</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px' }}>
            Conferencias, presentaciones y encuentros donde los expedientes cobran vida.
          </p>
        </div>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 32px', textAlign: 'center' }}>
          <div style={{ marginBottom: '24px' }}><span className="stamp">Próximamente</span></div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
            Los primeros eventos están en preparación
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '400px', marginBottom: '32px' }}>
            Conferencias, presentaciones y encuentros donde investigaremos juntos los casos más enigmáticos.
          </p>
          <a href="https://www.youtube.com/@elexpediente0" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Suscribirse al canal →
          </a>
        </div>
      </div>
    </section>
  )
}
