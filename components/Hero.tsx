'use client'
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(139,26,26,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #8b1a1a, transparent)' }} />

      <div className="relative max-w-4xl mx-auto fade-in">
        {/* Stamp */}
        <div className="mb-8 flex justify-center">
          <span className="stamp">Confidencial</span>
        </div>

        {/* Author name */}
        <p className="section-label mb-4">Carlos Montero Rocher presenta</p>

        {/* Logo image */}
        <div className="flex justify-center mb-8">
          <div className="relative" style={{ width: '200px', height: '200px' }}>
            <div
              className="w-full h-full rounded-sm"
              style={{
                background: 'url(/logo.png) center/contain no-repeat',
                filter: 'drop-shadow(0 0 30px rgba(139,26,26,0.4))',
              }}
            />
          </div>
        </div>

        {/* Main title */}
        <h1
          className="font-typewriter flicker mb-2"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', letterSpacing: '0.1em', color: 'var(--text-primary)' }}
        >
          EL EXPEDIENTE 0
        </h1>

        {/* Tagline */}
        <p
          className="mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'var(--text-secondary)',
          }}
        >
          "Hay archivos que nunca debieron abrirse."
        </p>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['Misterio', 'Historia', 'True Crime', 'Arte & Cultura'].map((tag) => (
            <span
              key={tag}
              className="font-typewriter text-xs tracking-widest uppercase px-4 py-1.5 rounded-sm"
              style={{ border: '1px solid #2a221a', color: 'var(--text-muted)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.youtube.com/@elexpediente0"
            target="_blank"
            rel="noopener noreferrer"
            className="font-typewriter text-xs tracking-widest uppercase px-8 py-3 transition-all duration-200"
            style={{
              background: 'var(--accent-red)',
              color: 'var(--text-primary)',
              border: '1px solid #a02020',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#a02020')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-red)')}
          >
            ▶ Ver en YouTube
          </a>
          <a
            href="https://www.ivoox.com/podcast-expediente-0_sq_f13043182_1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-typewriter text-xs tracking-widest uppercase px-8 py-3 transition-all duration-200"
            style={{
              border: '1px solid #2a221a',
              color: 'var(--text-secondary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-gold)'
              e.currentTarget.style.color = 'var(--accent-gold)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#2a221a'
              e.currentTarget.style.color = 'var(--text-secondary)'
            }}
          >
            🎙 Escuchar Podcast
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="section-label">Explorar</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, var(--accent-gold), transparent)' }} />
      </div>
    </section>
  )
}
