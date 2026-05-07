'use client'
export default function YouTubeSection() {
  return (
    <section id="youtube" className="py-24 px-6" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="section-label mb-3">Canal de vídeo</p>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>
              YouTube
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              Cada semana se abre un nuevo expediente. Historia, misterio, true crime y los enigmas
              que rodean al arte, narrados con vocación documental.
            </p>
            <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
              Cuatro historias por entrega. Un formato pensado para sumergirte completamente en cada caso.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                { icon: '◈', text: 'Inexplicable — Fenómenos sin explicación' },
                { icon: '⊞', text: 'Archivo Histórico — Historia desconocida' },
                { icon: '◉', text: 'Hemeroteca Negra — True crime' },
                { icon: '◇', text: 'Contracultural — Arte y cultura extraña' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span style={{ color: 'var(--accent-gold)', fontSize: '1rem' }}>{item.icon}</span>
                  <span className="font-typewriter text-xs tracking-wide" style={{ color: 'var(--text-secondary)' }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://www.youtube.com/@elexpediente0"
              target="_blank"
              rel="noopener noreferrer"
              className="font-typewriter text-xs tracking-widest uppercase px-8 py-3 inline-block transition-all duration-200"
              style={{ background: 'var(--accent-red)', color: 'var(--text-primary)', border: '1px solid #a02020' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#a02020')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-red)')}
            >
              ▶ Ir al canal
            </a>
          </div>

          {/* Embedded latest video placeholder */}
          <div>
            <div
              className="relative rounded-sm overflow-hidden"
              style={{ aspectRatio: '16/9', background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
            >
              {/* YouTube embed — latest video */}
              <iframe
                src="https://www.youtube.com/embed?listType=user_uploads&list=elexpediente0&index=1"
                title="El Expediente 0 — Último vídeo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
            <p className="mt-3 font-typewriter text-xs text-center" style={{ color: 'var(--text-muted)' }}>
              Último vídeo publicado
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
