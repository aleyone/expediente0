'use client'
export default function SobreMiSection() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <div className="grid-2-reverse">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="card" style={{ width: '100%', maxWidth: '380px', aspectRatio: '3/4', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="font-typewriter" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--text-muted)', marginBottom: '12px' }}>FOTOGRAFÍA</div>
                <div style={{ fontSize: '3rem', opacity: 0.2 }}>◉</div>
                <div className="font-typewriter" style={{ fontSize: '0.6rem', marginTop: '12px', color: 'var(--text-muted)' }}>Carlos Montero Rocher</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
              <a href="https://www.youtube.com/@elexpediente0" target="_blank" rel="noopener noreferrer" className="font-typewriter" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textDecoration: 'none' }}>YouTube</a>
              <span style={{ color: 'var(--border-color)' }}>·</span>
              <a href="https://www.ivoox.com/podcast-expediente-0_sq_f13043182_1.html" target="_blank" rel="noopener noreferrer" className="font-typewriter" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textDecoration: 'none' }}>iVoox</a>
            </div>
          </div>

          <div>
            <p className="section-label">El investigador</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '24px' }}>Carlos Montero Rocher</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-secondary)' }}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--border-color)' }}>
              {[{ value: '10+', label: 'Episodios' }, { value: '186', label: 'Escuchas' }, { value: '4', label: 'Secciones' }].map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div className="font-typewriter" style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', lineHeight: 1 }}>{stat.value}</div>
                  <div className="font-typewriter" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--text-muted)', marginTop: '4px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
