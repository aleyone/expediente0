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
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,8,6,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid #2a221a' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="font-typewriter text-xs tracking-widest" style={{ color: 'var(--accent-gold)' }}>
            CARLOS MONTERO ROCHER
          </span>
          <span className="font-typewriter text-sm tracking-wider" style={{ color: 'var(--text-primary)' }}>
            EL EXPEDIENTE 0
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-typewriter text-xs tracking-widest uppercase transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className="block w-5 h-px" style={{ background: 'var(--text-secondary)' }} />
          <span className="block w-5 h-px" style={{ background: 'var(--text-secondary)' }} />
          <span className="block w-4 h-px" style={{ background: 'var(--text-secondary)' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(10,8,6,0.98)', borderBottom: '1px solid #2a221a' }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-typewriter text-xs tracking-widest uppercase"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
