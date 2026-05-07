'use client'
import { REAL_EPISODES, PODCAST_SECTIONS } from '@/lib/data'

export default function PodcastSection() {
  const featured = REAL_EPISODES[0]
  const rest = REAL_EPISODES.slice(1, 7)

  return (
    <section id="podcast" className="py-24 px-6" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">Archivo de audio</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-primary)' }}>
            El Podcast
          </h2>
          <p className="mt-3" style={{ color: 'var(--text-secondary)', maxWidth: '520px' }}>
            Cada episodio abre un nuevo expediente. Cuatro historias, cuatro secciones, una hora de misterio.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {PODCAST_SECTIONS.map((s) => (
            <div
              key={s.id}
              className="p-4 rounded-sm"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
            >
              <div className="text-2xl mb-2" style={{ color: 'var(--accent-gold)' }}>{s.icon}</div>
              <div className="font-typewriter text-xs tracking-wider mb-1" style={{ color: 'var(--text-primary)' }}>
                {s.label}
              </div>
              <p className="text-xs" style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured episode */}
        <div
          className="p-8 mb-8 rounded-sm relative overflow-hidden"
          style={{ background: 'var(--bg-card)', border: '1px solid #3a2a1a' }}
        >
          <div className="absolute top-4 right-4">
            <span className="stamp">Último episodio</span>
          </div>
          <p className="section-label mb-3">Expediente #{featured.number}</p>
          <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', marginBottom: '1rem' }}>
            {featured.title}
          </h3>
          <p className="mb-6" style={{ color: 'var(--text-secondary)', maxWidth: '700px' }}>
            {featured.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href={featured.ivooxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-typewriter text-xs tracking-widest uppercase px-6 py-2.5 transition-all duration-200"
              style={{ background: 'var(--accent-red)', color: 'var(--text-primary)', border: '1px solid #a02020' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#a02020')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-red)')}
            >
              ▶ Escuchar episodio
            </a>
            <span className="font-typewriter text-xs" style={{ color: 'var(--text-muted)' }}>
              Duración: {featured.duration}
            </span>
          </div>
        </div>

        {/* Episode list */}
        <div className="space-y-3">
          {rest.map((ep) => (
            <a
              key={ep.number}
              href={ep.ivooxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover flex items-start gap-6 p-5 rounded-sm block"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', textDecoration: 'none' }}
            >
              <div
                className="font-typewriter text-lg flex-shrink-0 w-10 text-center"
                style={{ color: 'var(--accent-gold)', opacity: 0.6 }}
              >
                {String(ep.number).padStart(2, '0')}
              </div>
              <div className="flex-1 min-w-0">
                <h4
                  className="mb-1"
                  style={{ fontSize: '1rem', fontFamily: "'Playfair Display', serif", color: 'var(--text-primary)' }}
                >
                  {ep.title}
                </h4>
                <p
                  className="text-sm line-clamp-2"
                  style={{ color: 'var(--text-muted)', fontFamily: "'Crimson Text', serif" }}
                >
                  {ep.description}
                </p>
              </div>
              <div className="font-typewriter text-xs flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
                {ep.duration}
              </div>
            </a>
          ))}
        </div>

        {/* Ver todos */}
        <div className="mt-8 text-center">
          <a
            href="https://www.ivoox.com/podcast-expediente-0_sq_f13043182_1.html"
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
            Ver todos los episodios →
          </a>
        </div>
      </div>
    </section>
  )
}
