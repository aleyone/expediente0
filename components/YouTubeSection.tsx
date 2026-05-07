'use client'
export default function YouTubeSection() {
  return (
    <section id="youtube" className="section">
      <div className="container">
        <div className="grid-2-reverse">
          <div>
            <p className="section-label">Canal de vídeo</p>
            <h2 className="section-title">YouTube</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Cada semana se abre un nuevo expediente. Historia, misterio, true crime y los enigmas que rodean al arte, narrados con vocación documental.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
              Cuatro historias por entrega. Un formato pensado para sumergirte completamente en cada caso.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {[
                { icon: '◈', text: 'Inexplicable — Fenómenos sin explicación' },
                { icon: '⊞', text: 'Archivo Histórico — Historia desconocida' },
                { icon: '◉', text: 'Hemeroteca Negra — True crime' },
                { icon: '◇', text: 'Contracultural — Arte y cultura extraña' },
              ].map((item) => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'var(--accent-gold)', fontSize: '1rem', flexShrink: 0 }}>{item.icon}</span>
                  <span className="font-typewriter" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>{item.text}</span>
                </div>
              ))}
            </div>
            <a href="https://www.youtube.com/@elexpediente0" target="_blank" rel="noopener noreferrer" className="btn-primary">▶ Ir al canal</a>
          </div>

          <div>
            <div style={{ position: 'relative', aspectRatio: '16/9', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '2px', overflow: 'hidden' }}>
              <iframe
                src="https://www.youtube.com/embed?listType=user_uploads&list=elexpediente0&index=1"
                title="El Expediente 0 — Último vídeo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </div>
            <p className="font-typewriter" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '12px' }}>Último vídeo publicado</p>
          </div>
        </div>
      </div>
    </section>
  )
}
