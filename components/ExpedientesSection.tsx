'use client'
const EXPEDIENTES_PLACEHOLDER = [
  { number: '001', title: 'El síndrome de la Habana', category: 'Inexplicable', excerpt: 'Diplomáticos americanos en La Habana comenzaron a sufrir síntomas neurológicos inexplicables. Nadie sabe qué los causó.' },
  { number: '002', title: 'Missing 411', category: 'Misterio', excerpt: 'Cientos de personas desaparecen cada año en los parques nacionales de EE.UU. sin dejar rastro. El investigador David Paulides tiene una teoría.' },
  { number: '003', title: 'Cicada 3301', category: 'Inexplicable', excerpt: 'En 2012 apareció en internet el rompecabezas más complejo jamás creado. Nadie sabe quién lo diseñó ni por qué.' },
  { number: '004', title: 'El paso Diatlov', category: 'Misterio', excerpt: 'Nueve excursionistas soviéticos murieron en circunstancias imposibles en los Urales. Seis décadas después, el caso sigue sin cerrarse.' },
  { number: '005', title: 'La carretera de las lágrimas', category: 'True Crime', excerpt: 'En la Ruta 16 de Canadá, decenas de mujeres indígenas han desaparecido a lo largo de décadas. Los casos permanecen sin resolver.' },
  { number: '006', title: 'Hilma af Klint', category: 'Arte', excerpt: 'Pintó el arte abstracto años antes que Kandinsky o Mondrian. Lo hizo en secreto, guiada por espíritus. Y ordenó que nadie lo viera hasta su muerte.' },
]

const CATEGORY_COLORS: Record<string, string> = {
  'Inexplicable': '#8b1a1a',
  'Misterio': '#4a3a6b',
  'True Crime': '#3a5a4a',
  'Arte': '#6b4a2a',
}

export default function ExpedientesSection() {
  return (
    <section id="expedientes" className="py-24 px-6" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-3">Archivo de casos</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
            Los Expedientes
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px' }}>
            Cada expediente es un caso documentado. Una historia real que merece ser investigada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXPEDIENTES_PLACEHOLDER.map((exp) => (
            <div
              key={exp.number}
              className="card-hover p-6 rounded-sm relative"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', cursor: 'default' }}
            >
              {/* Number */}
              <div
                className="font-typewriter text-xs mb-4"
                style={{ color: 'var(--text-muted)', letterSpacing: '0.2em' }}
              >
                EXPEDIENTE {exp.number}
              </div>

              {/* Category */}
              <div
                className="inline-block font-typewriter text-xs tracking-widest uppercase px-2 py-0.5 rounded-sm mb-3"
                style={{
                  background: CATEGORY_COLORS[exp.category] || '#2a221a',
                  color: 'var(--text-secondary)',
                  fontSize: '0.55rem',
                }}
              >
                {exp.category}
              </div>

              <h3
                className="mb-3"
                style={{ fontSize: '1.1rem', fontFamily: "'Playfair Display', serif", color: 'var(--text-primary)' }}
              >
                {exp.title}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {exp.excerpt}
              </p>

              {/* Decorative corner */}
              <div
                className="absolute bottom-0 right-0 w-6 h-6"
                style={{
                  borderTop: '1px solid var(--border-color)',
                  borderLeft: '1px solid var(--border-color)',
                  opacity: 0.5,
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-typewriter text-xs" style={{ color: 'var(--text-muted)' }}>
            Próximamente — Más expedientes en preparación
          </p>
        </div>
      </div>
    </section>
  )
}
