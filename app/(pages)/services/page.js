import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import WhatsAppWidget from '../../../components/WhatsAppWidget'

export const metadata = {
  title: 'Our Services - RJR Consultancy',
  description: 'Comprehensive business growth services including consultation, marketing, lead generation, sales funnel building, and staff training.',
}

const services = [
  {
    title: "Business Consultation & Growth Strategy",
    description: "Personalized one-on-one sessions to diagnose business bottlenecks and craft scalable strategies.",
    icon: "📊",
    features: [
      "Business audit and analysis",
      "Growth strategy development", 
      "Market opportunity assessment",
      "Competitive analysis",
      "ROI optimization planning"
    ]
  },
  {
    title: "Marketing & Lead Generation",
    description: "Paid ad campaigns (Instagram/Meta), local SEO, CRM integration, and WhatsApp automation setup.",
    icon: "📈",
    features: [
      "Social media advertising",
      "Local SEO optimization",
      "CRM system integration",
      "WhatsApp business automation",
      "Content marketing strategy"
    ]
  },
  {
    title: "Sales Funnel Building & Automation",
    description: "Tools to streamline inquiries, follow-ups, appointment booking, and closing leads efficiently.",
    icon: "🔄",
    features: [
      "Lead capture systems",
      "Automated follow-up sequences",
      "Appointment booking systems",
      "Sales process optimization",
      "Conversion tracking setup"
    ]
  },
  {
    title: "Brand Positioning & Identity",
    description: "Help with visual branding, messaging, and social media strategy tailored for the local market.",
    icon: "🎯",
    features: [
      "Brand identity development",
      "Marketing message crafting",
      "Social media strategy",
      "Local market positioning",
      "Visual brand guidelines"
    ]
  },
  {
    title: "Staff Training & Performance Monitoring",
    description: "Training modules for sales teams plus dashboard creation for KPI tracking.",
    icon: "👥",
    features: [
      "Sales team training programs",
      "Customer service training",
      "Performance dashboard setup",
      "KPI tracking systems",
      "Ongoing coaching support"
    ]
  }
]

export default function Services() {
  return (
    <main>
      <Navigation />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive business growth solutions designed to transform your Delhi NCR business 
              into a revenue-generating powerhouse.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                    What You Get:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <a
                    href="https://wa.me/919599863263"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center block"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
