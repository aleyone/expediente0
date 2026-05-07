'use client'
import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'YouTube', href: '#youtube' },
  { label: 'Expedientes', href: '#expedientes' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(10,8,6,0.96)' : 'transparent',
      borderBottom: scrolled ? '1px solid #2a221a' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
    }}>
      <div className="container" style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#inicio" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1.3 }}>
          <span className="font-typewriter" style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--accent-gold)' }}>CARLOS MONTERO ROCHER</span>
          <span className="font-typewriter" style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--text-primary)' }}>EL EXPEDIENTE 0</span>
        </a>

        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="font-typewriter nav-link"
                style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }} className="mobile-menu-btn" aria-label="Menú">
          <span style={{ display: 'block', width: '20px', height: '1px', background: 'var(--text-secondary)' }} />
          <span style={{ display: 'block', width: '20px', height: '1px', background: 'var(--text-secondary)' }} />
          <span style={{ display: 'block', width: '14px', height: '1px', background: 'var(--text-secondary)' }} />
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: 'rgba(10,8,6,0.98)', borderBottom: '1px solid #2a221a', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="font-typewriter"
              style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-secondary)', textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
