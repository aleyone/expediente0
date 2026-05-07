'use client'
export default function SobreMiSection() {
  return (
    <section id="sobre-mi" className="py-24 px-6" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Photo placeholder */}
          <div className="flex flex-col items-center">
            <div
              className="rounded-sm mb-4 flex items-center justify-center"
              style={{
                width: '100%',
                maxWidth: '380px',
                aspectRatio: '3/4',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
              }}
            >
              <div className="text-center p-8">
                <div className="font-typewriter text-xs tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                  FOTOGRAFÍA
                </div>
                <div style={{ fontSize: '3rem', opacity: 0.2 }}>◉</div>
                <div className="font-typewriter text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
                  Carlos Montero Rocher
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.youtube.com/@elexpediente0"
                target="_blank"
                rel="noopener noreferrer"
                className="font-typewriter text-xs tracking-widest"
                style={{ color: 'var(--text-muted)' }}
              >
                YouTube
              </a>
              <span style={{ color: 'var(--border-color)' }}>·</span>
              <a
                href="https://www.ivoox.com/podcast-expediente-0_sq_f13043182_1.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-typewriter text-xs tracking-widest"
                style={{ color: 'var(--text-muted)' }}
              >
                iVoox
              </a>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="section-label mb-3">El investigador</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1.5rem' }}>
              Carlos Montero Rocher
            </h2>
            <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8" style={{ borderTop: '1px solid var(--border-color)' }}>
              {[
                { value: '10+', label: 'Episodios' },
                { value: '186', label: 'Escuchas' },
                { value: '4', label: 'Secciones' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-typewriter"
                    style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-typewriter text-xs tracking-widest mt-1" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
