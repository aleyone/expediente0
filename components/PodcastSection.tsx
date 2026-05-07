'use client'
import { REAL_EPISODES, PODCAST_SECTIONS } from '@/lib/data'

export default function PodcastSection() {
  const featured = REAL_EPISODES[0]
  const rest = REAL_EPISODES.slice(1, 7)

  return (
    <section id="podcast" className="section">
      <div className="container">
        <div style={{ marginBottom: '64px' }}>
          <p className="section-label">Archivo de audio</p>
          <h2 className="section-title">El Podcast</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px' }}>
            Cada episodio abre un nuevo expediente. Cuatro historias, cuatro secciones, una hora de misterio.
          </p>
        </div>

        {/* Sections grid */}
        <div className="grid-4" style={{ marginBottom: '64px' }}>
          {PODCAST_SECTIONS.map((s) => (
            <div key={s.id} className="card">
              <div style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', marginBottom: '12px' }}>{s.icon}</div>
              <div className="font-typewriter" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--text-primary)', marginBottom: '8px' }}>{s.label}</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{s.description}</p>
            </div>
          ))}
        </div>

        {/* Featured episode */}
        <div className="card" style={{ padding: '32px', marginBottom: '24px', position: 'relative', borderColor: '#3a2a1a' }}>
          <div style={{ position: 'absolute', top: '16px', right: '16px' }}><span className="stamp">Último episodio</span></div>
          <p className="section-label">Expediente #{featured.number}</p>
          <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>{featured.title}</h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', marginBottom: '24px' }}>{featured.description}</p>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href={featured.ivooxUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">▶ Escuchar episodio</a>
            <span className="font-typewriter" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Duración: {featured.duration}</span>
          </div>
        </div>

        {/* Episode list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {rest.map((ep) => (
            <a key={ep.number} href={ep.ivooxUrl} target="_blank" rel="noopener noreferrer" className="card"
              style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', textDecoration: 'none', padding: '20px 24px' }}>
              <div className="font-typewriter" style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', opacity: 0.6, flexShrink: 0, width: '36px', textAlign: 'center' }}>
                {String(ep.number).padStart(2, '0')}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4 style={{ fontSize: '1rem', fontFamily: "'Playfair Display', serif", color: 'var(--text-primary)', marginBottom: '4px' }}>{ep.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{ep.description}</p>
              </div>
              <div className="font-typewriter" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', flexShrink: 0 }}>{ep.duration}</div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <a href="https://www.ivoox.com/podcast-expediente-0_sq_f13043182_1.html" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Ver todos los episodios →
          </a>
        </div>
      </div>
    </section>
  )
}
