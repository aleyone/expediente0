import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carlos Montero Rocher — El Expediente 0',
  description: 'Canal dedicado a la historia, el misterio, el true crime y los enigmas del arte.',
  keywords: ['misterio', 'historia', 'true crime', 'podcast', 'expediente', 'ovni'],
  openGraph: {
    title: 'El Expediente 0',
    description: 'Misterio. Historia. True Crime. Arte.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
