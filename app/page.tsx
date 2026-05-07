import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PodcastSection from '@/components/PodcastSection'
import YouTubeSection from '@/components/YouTubeSection'
import ExpedientesSection from '@/components/ExpedientesSection'
import EventosSection from '@/components/EventosSection'
import SobreMiSection from '@/components/SobreMiSection'
import ContactoSection from '@/components/ContactoSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PodcastSection />
        <YouTubeSection />
        <ExpedientesSection />
        <EventosSection />
        <SobreMiSection />
        <ContactoSection />
      </main>
      <Footer />
    </>
  )
}
