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
      background: scrolled ? 'rgba(10,8,6,0.97)' : 'rgba(10,8,6,0.75)',
      borderBottom: '1px solid #3a2a1a',
      backdropFilter: 'blur(10px)',
      transition: 'background 0.3s ease',
    }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

        {/* Brand */}
        <a href="#inicio" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1.5, flexShrink: 0 }}>
          <span style={{ fontFamily: "'Special Elite', monospace", fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
            Carlos Montero Rocher
          </span>
          <span style={{ fontFamily: "'Special Elite', monospace", fontSize: '0.9rem', letterSpacing: '0.15em', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
            El Expediente 0
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="desktop-nav" style={{ display: 'flex', gap: '28px', listStyle: 'none', margin: 0, padding: 0 }}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                style={{
                  fontFamily: "'Special Elite', monospace",
                  fontSize: '0.85rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#c8b89a',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'}
                onMouseLeave={e => e.currentTarget.style.color = '#c8b89a'}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
          aria-label="Menú"
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--text-secondary)' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--text-secondary)' }} />
          <span style={{ display: 'block', width: '14px', height: '2px', background: 'var(--text-secondary)' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(10,8,6,0.98)', borderTop: '1px solid #2a221a', padding: '20px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}
              style={{ fontFamily: "'Special Elite', monospace", fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c8b89a', textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
