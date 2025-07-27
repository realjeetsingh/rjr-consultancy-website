"use client"
import Link from 'next/link'

const services = [
  {
    title: "Business Consultation & Growth Strategy",
    description: "Personalized one-on-one sessions to diagnose business bottlenecks and craft scalable strategies.",
    icon: "📊",
    features: ["Business audit", "Growth planning", "Market analysis"]
  },
  {
    title: "Marketing & Lead Generation",
    description: "Paid ad campaigns (Instagram/Meta), local SEO, CRM integration, and WhatsApp automation setup.",
    icon: "📈",
    features: ["Social media ads", "Local SEO", "CRM integration"]
  },
  {
    title: "Sales Funnel Building & Automation",
    description: "Tools to streamline inquiries, follow-ups, appointment booking, and closing leads efficiently.",
    icon: "🔄",
    features: ["Lead capture", "Automated follow-ups", "Conversion tracking"]
  },
  {
    title: "Brand Positioning & Identity",
    description: "Help with visual branding, messaging, and social media strategy tailored for the local market.",
    icon: "🎯",
    features: ["Brand identity", "Message crafting", "Social strategy"]
  },
  {
    title: "Staff Training & Performance Monitoring",
    description: "Training modules for sales teams plus dashboard creation for KPI tracking.",
    icon: "👥",
    features: ["Sales training", "Performance dashboards", "KPI tracking"]
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Comprehensive Business Growth Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From strategy development to implementation, we provide end-to-end solutions 
            to transform your Delhi NCR business into a revenue-generating powerhouse.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="text-center">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/919599863263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
