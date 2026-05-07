'use client'
const EXPEDIENTES = [
  { number: '001', title: 'El síndrome de la Habana', category: 'Inexplicable', color: '#8b1a1a', excerpt: 'Diplomáticos americanos en La Habana comenzaron a sufrir síntomas neurológicos inexplicables. Nadie sabe qué los causó.' },
  { number: '002', title: 'Missing 411', category: 'Misterio', color: '#4a3a6b', excerpt: 'Cientos de personas desaparecen cada año en los parques nacionales de EE.UU. sin dejar rastro.' },
  { number: '003', title: 'Cicada 3301', category: 'Inexplicable', color: '#8b1a1a', excerpt: 'En 2012 apareció en internet el rompecabezas más complejo jamás creado. Nadie sabe quién lo diseñó ni por qué.' },
  { number: '004', title: 'El paso Diatlov', category: 'Misterio', color: '#4a3a6b', excerpt: 'Nueve excursionistas soviéticos murieron en circunstancias imposibles en los Urales. El caso sigue sin cerrarse.' },
  { number: '005', title: 'La carretera de las lágrimas', category: 'True Crime', color: '#3a5a4a', excerpt: 'En la Ruta 16 de Canadá, decenas de mujeres indígenas han desaparecido a lo largo de décadas.' },
  { number: '006', title: 'Hilma af Klint', category: 'Arte', color: '#6b4a2a', excerpt: 'Pintó el arte abstracto años antes que Kandinsky. Lo hizo en secreto, guiada por espíritus.' },
]

export default function ExpedientesSection() {
  return (
    <section id="expedientes" className="section">
      <div className="container">
        <div style={{ marginBottom: '64px' }}>
          <p className="section-label">Archivo de casos</p>
          <h2 className="section-title">Los Expedientes</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px' }}>
            Cada expediente es un caso documentado. Una historia real que merece ser investigada.
          </p>
        </div>

        <div className="grid-3">
          {EXPEDIENTES.map((exp) => (
            <div key={exp.number} className="card" style={{ position: 'relative' }}>
              <div className="font-typewriter" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--text-muted)', marginBottom: '16px' }}>
                EXPEDIENTE {exp.number}
              </div>
              <span style={{ display: 'inline-block', background: exp.color, color: 'var(--text-secondary)', fontFamily: "'Special Elite', monospace", fontSize: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '2px', marginBottom: '12px' }}>
                {exp.category}
              </span>
              <h3 style={{ fontSize: '1.1rem', fontFamily: "'Playfair Display', serif", color: 'var(--text-primary)', marginBottom: '12px' }}>{exp.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{exp.excerpt}</p>
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '20px', height: '20px', borderTop: '1px solid var(--border-color)', borderLeft: '1px solid var(--border-color)', opacity: 0.5 }} />
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <p className="font-typewriter" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Próximamente — Más expedientes en preparación</p>
        </div>
      </div>
    </section>
  )
}
