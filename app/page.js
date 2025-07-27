import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import StatsSection from '../components/StatsSection'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'
import WhatsAppWidget from '../components/WhatsAppWidget'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactCTA />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
